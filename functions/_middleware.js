// Whole site is private: every request needs the site password (Cloudflare secret SITE_PASSWORD).
const USER = 'shivay';

function same(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

export async function onRequest({ request, env, next }) {
  const pass = env.SITE_PASSWORD;
  if (!pass) return new Response('Site is private.', { status: 503, headers: { 'Cache-Control': 'no-store' } });
  const h = request.headers.get('Authorization') || '';
  if (h.startsWith('Basic ')) {
    let u = '', p = '';
    try { const s = atob(h.slice(6)); const i = s.indexOf(':'); u = s.slice(0, i); p = s.slice(i + 1); } catch (e) {}
    if (same(u, USER) && same(p, pass)) {
      const res = await next();
      const out = new Response(res.body, res);
      out.headers.set('X-Robots-Tag', 'noindex, nofollow');
      out.headers.set('Cache-Control', 'private, no-store');
      return out;
    }
  }
  return new Response('This site is private.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Shivay Studio", charset="UTF-8"', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' }
  });
}
