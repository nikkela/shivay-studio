# Shivay Studio website
Static site, no build, no dependencies. Hosted free on Cloudflare Pages (project `shivay-studio`), auto-deploys on every push to `main`.

- `/` – public website: https://shivay-studio.pages.dev
- `/login` (file `login.html`) – studio login + dashboard (demo, data stays in the browser): https://shivay-studio.pages.dev/login
- Dashboard → Galleries: paste the client's Google Photos album link, then **Send on WhatsApp** sends it with save-to-your-account steps. Messages go through `/api/wa` (Pages Function). While the Cloudflare secret `TEST_WHATSAPP` is set, every message goes to that number instead of the client, and the number never appears in the code (delete the secret to go live).
- `/preview` – preview page to send the client on WhatsApp (live site in laptop + phone frames, features, next steps)
- `/demo` redirects to `/` (see `_redirects`)

Edit `index.html`:
- Photos: the `PHOTOS` and `GALLERY` lists at the top of the script. Put your own images in a `photos/` folder and use `/photos/name.jpg`.
- Phone number: search `918302615834`.
- Packages and reviews are plain HTML.

Logo: `logo.svg` (also favicon), `apple-touch-icon.png` (phone home screen), `og-image.jpg` (link previews).
