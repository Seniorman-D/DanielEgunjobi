const { cors, env, supabase } = require('./_shared');

async function pesapalToken() {
  const base = env('PESAPAL_BASE_URL').replace(/\/$/, '');
  const response = await fetch(`${base}/api/Auth/RequestToken`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ consumer_key: env('PESAPAL_CONSUMER_KEY'), consumer_secret: env('PESAPAL_CONSUMER_SECRET') })
  });
  const data = await response.json();
  if (!response.ok || !data.token) throw new Error(data.message || 'Unable to authenticate with PesaPal.');
  return data.token;
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const { order_id } = JSON.parse(event.body || '{}');
    if (!order_id) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'order_id is required.' }) };
    const rows = await supabase(`orders?id=eq.${encodeURIComponent(order_id)}&select=*&limit=1`);
    const order = rows?.[0];
    if (!order) return { statusCode: 404, headers: cors, body: JSON.stringify({ error: 'Order not found.' }) };
    if (!Number(order.total_amount) || Number(order.total_amount) <= 0) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'This order requires a price quote before payment.' }) };
    if (order.payment_status === 'paid') return { statusCode: 409, headers: cors, body: JSON.stringify({ error: 'Order is already paid.' }) };

    const token = await pesapalToken();
    const base = env('PESAPAL_BASE_URL').replace(/\/$/, '');
    const payload = {
      id: order.order_number,
      currency: order.currency || 'KES',
      amount: Number(order.total_amount),
      description: `Luo Ancestral Covenant order ${order.order_number}`,
      callback_url: env('PESAPAL_CALLBACK_URL'),
      cancellation_url: process.env.PESAPAL_CANCELLATION_URL || env('PESAPAL_CALLBACK_URL'),
      notification_id: env('PESAPAL_IPN_ID'),
      billing_address: {
        email_address: order.customer_email || '',
        phone_number: order.customer_phone,
        first_name: order.customer_name.split(' ')[0] || order.customer_name,
        last_name: order.customer_name.split(' ').slice(1).join(' ') || ''
      }
    };
    const response = await fetch(`${base}/api/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok || !data.redirect_url) throw new Error(data.error?.message || data.message || 'Unable to create PesaPal payment.');

    await supabase(`orders?id=eq.${encodeURIComponent(order.id)}`, {
      method: 'PATCH',
      body: JSON.stringify({ payment_status: 'pending', payment_provider: 'pesapal', payment_tracking_id: data.order_tracking_id || null })
    });

    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true, redirect_url: data.redirect_url, tracking_id: data.order_tracking_id || null }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: error.message || 'Unable to start payment.' }) };
  }
};
