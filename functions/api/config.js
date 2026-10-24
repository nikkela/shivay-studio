// Tells the dashboard whether WhatsApp test mode is on. Only the last 4 digits are shared; the number stays in the Cloudflare secret TEST_WHATSAPP.
export function onRequestGet({ env }) {
  const n = (env.TEST_WHATSAPP || '').replace(/\D/g, '');
  return Response.json({ test: !!n, last4: n.slice(-4) }, { headers: { 'Cache-Control': 'no-store' } });
}
