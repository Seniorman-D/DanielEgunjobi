const { cors, env, supabase, sendEmail, sendWhatsApp } = require('./_shared');

async function token() {
  const base = env('PESAPAL_BASE_URL').replace(/\/$/, '');
  const r = await fetch(`${base}/api/Auth/RequestToken`, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ consumer_key: env('PESAPAL_CONSUMER_KEY'), consumer_secret: env('PESAPAL_CONSUMER_SECRET') }) });
  const d = await r.json();
  if (!r.ok || !d.token) throw new Error(d.message || 'PesaPal authentication failed');
  return d.token;
}

async function status(trackingId) {
  const t = await token();
  const base = env('PESAPAL_BASE_URL').replace(/\/$/, '');
  const r = await fetch(`${base}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(trackingId)}`, { headers: { Accept: 'application/json', Authorization: `Bearer ${t}` } });
  const d = await r.json();
  if (!r.ok) throw new Error(d.error?.message || d.message || 'Unable to verify payment status');
  return d;
}

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'GET' && event.httpMethod !== 'POST') return { statusCode: 405, headers: cors, body: 'Method not allowed' };
    const payload = event.httpMethod === 'GET' ? event.queryStringParameters || {} : JSON.parse(event.body || '{}');
    const trackingId = payload.OrderTrackingId || payload.orderTrackingId;
    const reference = payload.OrderMerchantReference || payload.orderMerchantReference;
    if (!trackingId || !reference) return { statusCode: 400, headers: cors, body: 'Missing payment identifiers' };

    const result = await status(trackingId);
    const paymentStatus = String(result.payment_status_description || result.payment_status_code || '').toLowerCase();
    const paid = paymentStatus.includes('completed') || paymentStatus.includes('paid') || String(result.status_code) === '1';
    const nextPayment = paid ? 'paid' : (paymentStatus.includes('failed') || paymentStatus.includes('rejected') ? 'failed' : 'pending');
    const nextOrder = paid ? 'confirmed' : undefined;
    const patch = { payment_status: nextPayment, payment_tracking_id: trackingId, payment_reference: result.confirmation_code || result.reference || null };
    if (nextOrder) patch.order_status = nextOrder;
    const rows = await supabase(`orders?order_number=eq.${encodeURIComponent(reference)}&select=*&limit=1`);
    const order = rows?.[0];
    if (order) {
      await supabase(`orders?id=eq.${encodeURIComponent(order.id)}`, { method: 'PATCH', body: JSON.stringify(patch) });
      if (paid) {
        await Promise.allSettled([
          sendEmail({ to: order.customer_email, subject: `Payment confirmed — ${order.order_number}`, html: `<h2>Payment confirmed</h2><p>Your payment for <strong>${order.order_number}</strong> has been confirmed.</p><p>We will now process your order.</p>` }),
          sendEmail({ to: process.env.ADMIN_EMAIL, subject: `Payment received — ${order.order_number}`, html: `<h2>Payment received</h2><p>Order <strong>${order.order_number}</strong> is paid and confirmed.</p>` }),
          sendWhatsApp({ to: order.customer_phone, text: `Luo Ancestral Covenant: Payment confirmed for order ${order.order_number}. Your order is now being processed.` }),
          sendWhatsApp({ to: process.env.ADMIN_WHATSAPP_NUMBER, text: `PAYMENT RECEIVED — ${order.order_number}\nCustomer: ${order.customer_name}\nAmount: KSh ${Number(order.total_amount).toLocaleString()}` })
        ]);
      }
    }
    return { statusCode: 200, headers: { ...cors, 'Content-Type': 'application/json' }, body: JSON.stringify({ orderNotificationType: 'IPNCHANGE', orderTrackingId: trackingId, orderMerchantReference: reference }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: error.message }) };
  }
};
