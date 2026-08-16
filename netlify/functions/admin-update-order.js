const { cors, requireAdmin, supabase, sendEmail, sendWhatsApp } = require('./_shared');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors };
  if (event.httpMethod !== 'PATCH') return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    await requireAdmin(event);
    const id = event.queryStringParameters?.id;
    const body = JSON.parse(event.body || '{}');
    if (!id) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Order id is required.' }) };
    const allowedOrder = ['new','confirmed','processing','shipped','delivered','completed','cancelled','refunded'];
    const allowedPayment = ['unpaid','pending','paid','failed','refunded','quote_required'];
    if (body.order_status && !allowedOrder.includes(body.order_status)) throw new Error('Invalid order status.');
    if (body.payment_status && !allowedPayment.includes(body.payment_status)) throw new Error('Invalid payment status.');
    const patch = {};
    if (body.order_status) patch.order_status = body.order_status;
    if (body.payment_status) patch.payment_status = body.payment_status;
    if (body.notes !== undefined) patch.notes = body.notes;
    const [order] = await supabase(`orders?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify(patch) });
    if (!order) return { statusCode: 404, headers: cors, body: JSON.stringify({ error: 'Order not found.' }) };
    if (body.order_status === 'shipped' || body.order_status === 'delivered') {
      await Promise.allSettled([
        sendEmail({ to: order.customer_email, subject: `Order ${order.order_number} — ${body.order_status}`, html: `<h2>Order update</h2><p>Your order <strong>${order.order_number}</strong> is now <strong>${body.order_status}</strong>.</p>` }),
        sendWhatsApp({ to: order.customer_phone, text: `Luo Ancestral Covenant: Order ${order.order_number} is now ${body.order_status}. Thank you.` })
      ]);
    }
    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true, order }) };
  } catch (error) {
    const status = error.message.includes('Admin access') || error.message === 'Unauthorized' ? 401 : 400;
    return { statusCode: status, headers: cors, body: JSON.stringify({ error: error.message }) };
  }
};
