# LuxArb

Cross-platform **price comparison** for pre-owned luxury bags and watches.

LuxArb records public asking prices — platform, list price, condition when the listing shows one, and a direct link — for models shoppers search for (Chanel Classic Flap, Hermès Birkin, Louis Vuitton Neverfull, Rolex Datejust, Omega Speedmaster). Prices are snapshots. They are not a promise of stock and not financial advice.

**Default language:** English, with an on-page language switcher (简体中文, 繁體中文, and others). Strings that are not translated fall back to English.

**Contact:** frank-cps@mail.grokbot.com

**Live site:** https://getluxarb.com

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — how to compare, featured checked prices |
| `compare.html` | Five comparisons, method, and FAQ |
| `product-*.html` | One comparison or buying guide per model, with direct retailer links |
| `guide-chanel-prices.html` | How to compare secondhand Chanel prices |
| `disclaimer.html` | Snapshots, condition, fees, partner-link disclosure |
| `llms.txt` | Short summary for answer engines |
| `sitemap.xml` / `robots.txt` | Discovery |

## Where prices and links live

| File | Change it when |
|------|----------------|
| `js/catalog.js` | A listing’s public URL, price, condition, or check date changes. Keep the same facts in the HTML cards. |
| `js/affiliates.js` | A network approves a real tagged URL. Set that platform’s `taggedUrl`. Leave it `""` until then. A value containing `{url}` is filled with the encoded public listing URL. |

Do not invent tracking URLs. While `taggedUrl` is empty, buttons open the public listing or search URL, with `rel="sponsored noopener noreferrer"`.

Checked snapshot in this repo: **2026-11-03 (Asia/Shanghai)** for the handbag asks. Fashionphile Neverfull item 1992692 is sold out, so that button is search-only. Watch cards remain the 2026-10-29 record.

## Local preview

```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

## Footer disclosure

Every page shows this fixed line: “Affiliate disclosure: We may earn a commission if you buy through links on this site, at no extra cost to you. Prices and availability can change on retailer sites.”
