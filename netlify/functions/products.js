const { cors, supabase } = require('./_shared');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors };
  if (event.httpMethod !== 'GET') return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const products = await supabase('products?is_active=eq.true&select=id,slug,name,category,description,price,currency,image&order=created_at.asc');
    return { statusCode: 200, headers: { ...cors, 'Cache-Control': 'public, max-age=60' }, body: JSON.stringify({ products }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: error.message || 'Unable to load products.' }) };
  }
};
