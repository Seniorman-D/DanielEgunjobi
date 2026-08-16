const { cors, requireAdmin, supabase } = require('./_shared');

const clean = (value) => value == null ? null : String(value).trim();

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors };
  try {
    await requireAdmin(event);
    if (event.httpMethod === 'GET') {
      const products = await supabase('products?select=*&order=created_at.asc');
      return { statusCode: 200, headers: cors, body: JSON.stringify({ products }) };
    }
    const body = JSON.parse(event.body || '{}');
    if (event.httpMethod === 'POST') {
      if (!body.name || !body.description) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Name and description are required.' }) };
      const slug = clean(body.slug) || clean(body.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const price = body.price === '' || body.price == null ? null : Number(body.price);
      if (price != null && (!Number.isFinite(price) || price < 0)) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Price must be a valid non-negative number.' }) };
      const [product] = await supabase('products', { method: 'POST', body: JSON.stringify({ slug, name: clean(body.name), category: clean(body.category), description: clean(body.description), price, currency: clean(body.currency) || 'KES', image: clean(body.image), is_active: body.is_active !== false }) });
      return { statusCode: 201, headers: cors, body: JSON.stringify({ product }) };
    }
    if (event.httpMethod === 'PATCH') {
      const id = event.queryStringParameters?.id;
      if (!id) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Product id is required.' }) };
      const patch = {};
      ['name','slug','category','description','currency','image'].forEach(k => { if (body[k] !== undefined) patch[k] = clean(body[k]); });
      if (body.price !== undefined) {
        patch.price = body.price === '' || body.price == null ? null : Number(body.price);
        if (patch.price != null && (!Number.isFinite(patch.price) || patch.price < 0)) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Price must be a valid non-negative number.' }) };
      }
      if (body.is_active !== undefined) patch.is_active = Boolean(body.is_active);
      patch.updated_at = new Date().toISOString();
      const [product] = await supabase(`products?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify(patch) });
      if (!product) return { statusCode: 404, headers: cors, body: JSON.stringify({ error: 'Product not found.' }) };
      return { statusCode: 200, headers: cors, body: JSON.stringify({ product }) };
    }
    return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method not allowed' }) };
  } catch (error) {
    const status = error.message === 'Unauthorized' || error.message === 'Admin access required' ? 401 : 400;
    return { statusCode: status, headers: cors, body: JSON.stringify({ error: error.message || 'Product operation failed.' }) };
  }
};
