# Deploy LuxArb Demo (getluxarb.com)

Static site — **no build step**. Serve the folder as-is on Vercel.

## Domain

- Primary: **getluxarb.com** (DNS on Cloudflare)
- Backup: keep the existing **GitHub Pages** (`github.io`) deployment as a fallback

## Option A — Import from GitHub

1. Open [Vercel](https://vercel.com) → **Add New…** → **Project**
2. Import **FranSyun/luxarb-demo**
3. Framework Preset: **Other** (or leave unset)
4. Build Command: leave **empty**
5. Output Directory: leave **empty** / `.` (root is the site)
6. Deploy

## Option B — Drag folder

1. Vercel → **Add New…** → **Project** → **Browse all templates** / drag-and-drop upload
2. Upload the `luxury-cps-site` folder (or the repo root that contains `index.html`)
3. Deploy with no build settings

## Custom domain + Cloudflare DNS

In Vercel: Project → **Settings** → **Domains** → add `getluxarb.com` and `www.getluxarb.com`.

In Cloudflare DNS for `getluxarb.com` (DNS only / grey cloud is fine for apex A; proxy optional):

| Type  | Name | Content                 | Notes                          |
|-------|------|-------------------------|--------------------------------|
| A     | `@`  | `76.76.21.21`           | Vercel apex                    |
| CNAME | `www`| `cname.vercel-dns.com`  | www → Vercel                   |

After records propagate, complete domain verification in the Vercel Domains UI if prompted.

## Notes

- `vercel.json` enables `cleanUrls` (e.g. `/compare` → `compare.html`).
- Production canonical is https://getluxarb.com; www should redirect there.
- Do not require `npm install` or a build pipeline for this site.
