# Invoice Maker website

The public website for the desktop app: plain HTML and CSS in `public/`, no build step. Cloudflare serves
it as a Worker with static assets (`wrangler.jsonc`). The small worker in `src/worker.js` sends
`www.billingpos.app` to `billingpos.app` with a 301, so Google sees one address for each page.

## Edit
- Pages: `public/index.html` (home) and `public/404.html`; styles in `public/styles.css`.
- **Download button:** on a new release, update the installer's URL and version in `public/index.html` and
  `public/download.html`. The MSI is too big for Cloudflare's 25 MB file limit, so host it on a GitHub Release or an R2 bucket.
- **Download page (`/download`):** the page the Android app opens and shares. Google Play doesn't allow the app
  to lead users to prices or purchases outside Play, so keep it free of prices and buy wording, and don't link
  it to pages that have them (home, Terms, Refund, Privacy, checkout).
- **Screenshot:** save one as `public/images/screenshot-dashboard.png` and it shows under the hero.

Preview: open `public/index.html` in a browser, or run `npx wrangler dev` in this folder.

## Deploy to Cloudflare (once)
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** → pick this repo.
2. Production branch: `main`. Root directory: leave empty.
   Build command: leave empty. Deploy command: `npx wrangler deploy`.
3. Save and deploy. The site goes live at **billingpos.app** (Settings → Domains & Routes). The `*.workers.dev`
   address is turned off (`workers_dev: false`) so Google can't index a second copy of the site.

After that, every push to the branch redeploys the site. To use your own domain later: the Worker's
**Settings → Domains & Routes → Add → Custom domain**.
