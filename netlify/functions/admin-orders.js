const { cors, requireAdmin, supabase } = require('./_shared');
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors };
  try {
    await requireAdmin(event);
    const limit = Math.min(100, Math.max(1, Number(event.queryStringParameters?.limit || 50)));
    const orders = await supabase(`orders?select=*,order_items(*)&order=created_at.desc&limit=${limit}`);
    return { statusCode: 200, headers: cors, body: JSON.stringify({ orders }) };
  } catch (error) {
    const status = error.message === 'Unauthorized' || error.message === 'Admin access required' ? 401 : 500;
    return { statusCode: status, headers: cors, body: JSON.stringify({ error: error.message }) };
  }
};
