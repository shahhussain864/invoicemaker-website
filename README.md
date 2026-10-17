# Invoice Maker website

The public website for the desktop app: plain HTML and CSS in `public/`, no build step. Cloudflare serves
it as a Worker with static assets (`wrangler.jsonc`).

## Edit
- Pages: `public/index.html` (home) and `public/404.html`; styles in `public/styles.css`.
- **Download button:** set `DOWNLOAD_URL` near the bottom of `public/index.html` to the installer's URL.
  The MSI is too big for Cloudflare's 25 MB file limit, so host it on a GitHub Release or an R2 bucket.
- **Screenshot:** save one as `public/images/screenshot-dashboard.png` and it shows under the hero.

Preview: open `public/index.html` in a browser, or run `npx wrangler dev` in this folder.

## Deploy to Cloudflare (once)
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** → pick this repo.
2. Production branch: `main`. Root directory: leave empty.
   Build command: leave empty. Deploy command: `npx wrangler deploy`.
3. Save and deploy. The site goes live at `https://invoicemaker-website.<your-subdomain>.workers.dev`.

After that, every push to the branch redeploys the site. To use your own domain later: the Worker's
**Settings → Domains & Routes → Add → Custom domain**.
