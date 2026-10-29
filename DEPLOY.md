# Deploy LuxArb (getluxarb.com)

Static site — **no build step**. Serve the folder as-is on Vercel.

## Domain

- Canonical: **https://getluxarb.com** (apex)
- `www.getluxarb.com` redirects to the apex. `vercel.json` sends a permanent redirect for `/` and `/:path*` when the host is `www.getluxarb.com`.
- DNS stays on Cloudflare as already configured for the apex and `www`.

## If this repo already deploys from `main`

Merging the pull request into `main` publishes this static tree. There is no install and no build command. Vercel should keep Framework Preset **Other**, with an empty build command and the repo root as the output.

The redirect rules ship with `vercel.json`. After the merge, confirm `https://www.getluxarb.com/compare` lands on `https://getluxarb.com/compare`.

## First-time import

1. Vercel → **Add New…** → **Project** → import **FranSyun/luxarb-demo**
2. Framework Preset: **Other**
3. Build Command: empty
4. Output Directory: empty / `.`
5. Deploy
6. Settings → Domains: `getluxarb.com` and `www.getluxarb.com`

## What not to add

Do not commit affiliate passwords, network OTPs, or placeholder tracking links. Approved URLs go in `js/affiliates.js` as `taggedUrl` only after the network issues them.
