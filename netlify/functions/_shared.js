const json = (data, status = 200, extra = {}) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', ...extra }
});

const cors = {
  'Access-Control-Allow-Origin': process.env.PUBLIC_SITE_URL || '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS'
};

const options = () => new Response(null, { status: 204, headers: cors });

function env(name, required = true) {
  const value = process.env[name];
  if (required && !value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function supabaseHeaders(accessToken) {
  const key = env('SUPABASE_SECRET_KEY');
  return {
    apikey: key,
    Authorization: `Bearer ${accessToken || key}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
  };
}

async function supabase(path, init = {}, accessToken) {
  const base = env('SUPABASE_URL').replace(/\/$/, '');
  const response = await fetch(`${base}/rest/v1/${path}`, {
    ...init,
    headers: { ...supabaseHeaders(accessToken), ...(init.headers || {}) }
  });
  const text = await response.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!response.ok) {
    const message = data?.message || data?.error_description || data?.hint || 'Database request failed';
    throw new Error(message);
  }
  return data;
}

async function getSupabaseUser(accessToken) {
  if (!accessToken) return null;
  const base = env('SUPABASE_URL').replace(/\/$/, '');
  const response = await fetch(`${base}/auth/v1/user`, {
    headers: { apikey: env('SUPABASE_PUBLISHABLE_KEY'), Authorization: `Bearer ${accessToken}` }
  });
  if (!response.ok) return null;
  return response.json();
}

async function requireAdmin(request) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  const user = await getSupabaseUser(token);
  if (!user?.id) throw new Error('Unauthorized');
  const rows = await supabase(`profiles?select=id,role&id=eq.${encodeURIComponent(user.id)}&limit=1`);
  if (!rows?.[0] || rows[0].role !== 'admin') throw new Error('Admin access required');
  return { user, token };
}

function orderReference() {
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
  const suffix = crypto.randomUUID().split('-')[0].toUpperCase();
  return `LAC-${stamp}-${suffix}`.slice(0, 50);
}

async function sendEmail({ to, subject, html }) {
  if (!process.env.RESEND_API_KEY || !to) return { skipped: true };
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || 'Luo Ancestral Covenant <orders@luoancestralcovenant.org>',
      to: [to], subject, html
    })
  });
  if (!response.ok) throw new Error(`Email provider error: ${await response.text()}`);
  return response.json();
}

async function sendWhatsApp({ to, text }) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const version = process.env.WHATSAPP_GRAPH_VERSION;
  if (!token || !phoneNumberId || !version || !to) return { skipped: true };
  const response = await fetch(`https://graph.facebook.com/${version}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ messaging_product: 'whatsapp', to: to.replace(/\D/g, ''), type: 'text', text: { body: text } })
  });
  if (!response.ok) throw new Error(`WhatsApp provider error: ${await response.text()}`);
  return response.json();
}

module.exports = { json, cors, options, env, supabase, getSupabaseUser, requireAdmin, orderReference, sendEmail, sendWhatsApp };
