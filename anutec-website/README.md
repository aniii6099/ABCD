# Anutec Advertising — website

Static site (HTML/CSS/JS, no build step). Pages: `index.html`, `about.html`, `industries.html`, `network.html`, `contact.html`.

## Edit your details
Open `assets/js/main.js` and change the `CONFIG` block at the top (phone, WhatsApp number, email).
Planner estimates (views per cab per day) are in `initPlanner()` in the same file.

## Deploy on Cloudflare Pages
**Option A — from GitHub (auto-deploys on every push)**
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Pick this repo. Framework preset: **None**. Build command: *(leave empty)*.
3. Build output directory: `anutec-website` (or `/` if this folder is the repo root).
4. Deploy. You'll get `https://anutec-advertising.pages.dev`; add your own domain under *Custom domains*.

**Option B — upload directly**
Workers & Pages → Create → Pages → *Upload assets* → drag this folder in.

**Option C — CLI**
```
npx wrangler pages deploy . --project-name anutec-advertising
```
