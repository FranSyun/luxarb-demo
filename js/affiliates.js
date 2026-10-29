/**
 * LuxArb outbound link map.
 *
 * Each platform has a public search URL and an optional taggedUrl.
 * Leave taggedUrl as "" until that network approves a real tracking link
 * for this site. Do not invent tracking hosts or deep links.
 *
 * When a program is approved, paste the issued https URL into taggedUrl.
 * js/main.js will point "Shop on …" buttons at it the same day.
 * While taggedUrl is empty, buttons open the public listing or search URL
 * stored on the card (js/catalog.js).
 *
 * Operator status (not shown in the page), 2026-10-29 Asia/Shanghai:
 * - rebag: CJ Affiliate advertiser 5749848 — application Pending. No deep link.
 * - Awin publisher 3011361 — luxury programs mostly Pending or Rejected;
 *   Joined was empty. No Awin luxury deep links.
 * - thredup: no approved link on this property.
 */
(function (global) {
  "use strict";

  global.LUXARB_AFFILIATES = {
    rebag: {
      name: "Rebag",
      network: "CJ Affiliate",
      status: "pending",
      taggedUrl: "",
      publicSearch: "https://shop.rebag.com/search?q="
    },
    fashionphile: {
      name: "Fashionphile",
      network: "",
      status: "no-program",
      taggedUrl: "",
      publicSearch: "https://www.fashionphile.com/search?q="
    },
    chrono24: {
      name: "Chrono24",
      network: "Awin",
      status: "pending",
      taggedUrl: "",
      publicSearch: "https://www.chrono24.com/search/index.htm?query="
    },
    therealreal: {
      name: "The RealReal",
      network: "",
      status: "no-program",
      taggedUrl: "",
      publicSearch: "https://www.therealreal.com/products?keywords="
    },
    vestiaire: {
      name: "Vestiaire Collective",
      network: "",
      status: "no-program",
      taggedUrl: "",
      publicSearch: "https://www.vestiairecollective.com/search/?q="
    },
    thredup: {
      name: "ThredUp",
      network: "Awin",
      status: "no-approved-link",
      taggedUrl: "",
      publicSearch: "https://www.thredup.com/products?search_text="
    }
  };
})(typeof window !== "undefined" ? window : this);
