const { cors, supabase, orderReference, sendEmail, sendWhatsApp } = require('./_shared');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const body = JSON.parse(event.body || '{}');
    const customer = body.customer || {};
    const items = Array.isArray(body.items) ? body.items : [];
    if (!customer.name || !customer.phone || !items.length) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Name, phone and at least one product are required.' }) };
    const slugs = [...new Set(items.map(x => x.slug || x.product_slug).filter(Boolean))];
    const ids = [...new Set(items.map(x => x.product_id).filter(Boolean))];
    if (!slugs.length && !ids.length) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Products are required.' }) };
    const filters = [];
    if (slugs.length) filters.push(`slug=in.(${slugs.map(x => encodeURIComponent(x)).join(',')})`);
    if (ids.length) filters.push(`id=in.(${ids.map(x => encodeURIComponent(x)).join(',')})`);
    const products = await supabase(`products?or=(${filters.join(',')})&is_active=eq.true&select=id,slug,name,price,currency`);
    const byKey = new Map(products.flatMap(p => [[p.id, p], [p.slug, p]]));
    let total = 0;
    const normalized = [];
    for (const item of items) {
      const product = byKey.get(item.product_id || item.slug || item.product_slug);
      const qty = Math.max(1, Math.min(99, Number.parseInt(item.quantity, 10) || 1));
      if (!product) throw new Error('One or more selected products are unavailable.');
      const unitPrice = product.price == null ? null : Number(product.price);
      if (unitPrice != null) total += unitPrice * qty;
      normalized.push({ product_id: product.id, name: product.name, quantity: qty, unit_price: unitPrice });
    }
    const reference = orderReference();
    const [order] = await supabase('orders', { method: 'POST', body: JSON.stringify({ order_number: reference, customer_name: String(customer.name).trim(), customer_email: customer.email ? String(customer.email).trim() : null, customer_phone: String(customer.phone).trim(), delivery_address: customer.address ? String(customer.address).trim() : null, notes: body.notes ? String(body.notes).trim() : null, subtotal: total, total_amount: total, currency: products[0]?.currency || 'KES', payment_status: total > 0 ? 'unpaid' : 'quote_required', order_status: 'new' }) });
    await supabase('order_items', { method: 'POST', body: JSON.stringify(normalized.map(x => ({ ...x, order_id: order.id }))) });
    const lines = normalized.map(x => `• ${x.name} × ${x.quantity}`).join('\n');
    const text = `NEW ORDER — LUO ANCESTRAL COVENANT\nOrder: ${reference}\nCustomer: ${customer.name}\nPhone: ${customer.phone}\n\n${lines}\n\nTotal: ${total > 0 ? `KSh ${total.toLocaleString()}` : 'Price on request'}\nStatus: New`;
    await Promise.allSettled([
      sendWhatsApp({ to: process.env.ADMIN_WHATSAPP_NUMBER, text }),
      sendEmail({ to: customer.email, subject: `Order ${reference} received`, html: `<h2>Thank you for your order</h2><p>Your order <strong>${reference}</strong> has been received.</p><p>Status: <strong>${total > 0 ? 'Awaiting payment' : 'Price on request'}</strong></p>` }),
      sendEmail({ to: process.env.ADMIN_EMAIL, subject: `New order ${reference}`, html: `<h2>New order</h2><p><strong>${reference}</strong></p><p>${customer.name} — ${customer.phone}</p><pre>${lines}\n\nTotal: ${total > 0 ? `KSh ${total.toLocaleString()}` : 'Price on request'}</pre>` })
    ]);
    return { statusCode: 201, headers: cors, body: JSON.stringify({ ok: true, order: { id: order.id, order_number: reference, total, currency: order.currency, payment_status: order.payment_status }, payment_available: total > 0 }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: error.message || 'Unable to create order.' }) };
  }
};
