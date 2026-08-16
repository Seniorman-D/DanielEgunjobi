const { cors, env, supabase } = require('./_shared');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const { email, password } = JSON.parse(event.body || '{}');
    if (!email || !password) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Email and password are required.' }) };
    const base = env('SUPABASE_URL').replace(/\/$/, '');
    const response = await fetch(`${base}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { apikey: env('SUPABASE_PUBLISHABLE_KEY'), 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const session = await response.json();
    if (!response.ok || !session.access_token) return { statusCode: 401, headers: cors, body: JSON.stringify({ error: 'Invalid login details.' }) };
    const profiles = await supabase(`profiles?select=id,full_name,role&id=eq.${encodeURIComponent(session.user.id)}&limit=1`);
    if (!profiles?.[0] || profiles[0].role !== 'admin') return { statusCode: 403, headers: cors, body: JSON.stringify({ error: 'This account is not an administrator.' }) };
    return { statusCode: 200, headers: cors, body: JSON.stringify({ access_token: session.access_token, refresh_token: session.refresh_token, user: profiles[0] }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: error.message }) };
  }
};
