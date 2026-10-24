// Only reachable after the site password (see _middleware.js). Number lives in the Cloudflare secret TEST_WHATSAPP.
export function onRequestGet({ env }) {
  return Response.json({ testWhatsapp: (env.TEST_WHATSAPP || '').replace(/\D/g, '') }, { headers: { 'Cache-Control': 'private, no-store' } });
}
