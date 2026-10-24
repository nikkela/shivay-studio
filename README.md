# Shivay Studio website
Static site, no build, no dependencies. Hosted free on Cloudflare Pages (project `shivay-studio`), auto-deploys on every push to `main`.

- `/` – public website: https://shivay-studio.pages.dev
- `/login` (file `login.html`) – studio login + dashboard (demo, data stays in the browser): https://shivay-studio.pages.dev/login
- `/demo` redirects to `/` (see `_redirects`)

Edit `index.html`:
- Photos: the `PHOTOS` and `GALLERY` lists at the top of the script. Put your own images in a `photos/` folder and use `/photos/name.jpg`.
- Phone number: search `918302615834`.
- Packages and reviews are plain HTML.

Logo: `logo.svg` (also favicon), `apple-touch-icon.png` (phone home screen), `og-image.jpg` (link previews).
