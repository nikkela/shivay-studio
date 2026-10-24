// Opens WhatsApp with the message. In test mode (secret TEST_WHATSAPP set) every message goes to that number,
// so the number is never written in the code or the page.
export function onRequestGet({ request, env }) {
  const u = new URL(request.url);
  const test = (env.TEST_WHATSAPP || '').replace(/\D/g, '');
  let to = (u.searchParams.get('to') || '').replace(/\D/g, '');
  if (to.length === 10) to = '91' + to;
  const dest = test || to;
  const text = (u.searchParams.get('text') || '').slice(0, 2000);
  if (!/^\d{11,15}$/.test(dest)) return new Response('Invalid phone number', { status: 400 });
  return new Response(null, { status: 302, headers: { Location: 'https://wa.me/' + dest + '?text=' + encodeURIComponent(text), 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' } });
}
