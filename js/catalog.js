/**
 * Checked public list prices. Asia/Shanghai.
 * urlKind "listing" = a specific product page that was available at checkedAt.
 * urlKind "search" = platform search; the card must say to verify the live price.
 * These are asking prices, not sold prices and not a quote.
 */
(function (global) {
  "use strict";

  global.LUXARB_CATALOG = {
    checkedAt: "2026-10-29T13:30:00+08:00",
    checkedOn: "2026-10-29",
    timezone: "Asia/Shanghai",
    comparisons: [
      {
        id: "chanel-classic-flap",
        href: "product-chanel-flap.html",
        brand: "Chanel",
        name: "Classic Flap Medium, black caviar, gold hardware",
        icon: "👜",
        offers: [
          {
            id: "chanel-fashionphile",
            platform: "fashionphile",
            price: 8595,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://www.fashionphile.com/products/chanel-caviar-quilted-medium-double-flap-black-1970317",
            condition: "Excellent",
            year: "2021",
            details: "Item #1970317. Gold-tone hardware, authenticity card, Fashionphile certificate."
          },
          {
            id: "chanel-rebag",
            platform: "rebag",
            price: 8980,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://shop.rebag.com/products/handbags-chanel-classic-double-flap-bag-quilted-caviar-medium4212783",
            condition: "Great",
            year: "",
            details: "Item #421278/3. Gold hardware, brand code 20032498, no accessories listed."
          }
        ]
      },
      {
        id: "hermes-birkin-30",
        href: "product-hermes-birkin.html",
        brand: "Hermès",
        name: "Birkin 30 Togo, Noir, palladium hardware",
        icon: "👜",
        offers: [
          {
            id: "birkin-fashionphile",
            platform: "fashionphile",
            price: 22995,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://www.fashionphile.com/products/hermes-togo-birkin-30-black-1918032",
            condition: "Excellent",
            year: "2022",
            details: "Item #1918032. Dust bag and raincoat. Lock, keys, and clochette not included."
          },
          {
            id: "birkin-rebag",
            platform: "rebag",
            price: 25850,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://shop.rebag.com/products/handbags-hermes-birkin-handbag-black-togo-with-palladium-hardware-304375161",
            condition: "Very Good",
            year: "2017",
            details: "Item #437516/1. Stamp A (2017). Lock, keys, clochette, box, and dust bag."
          }
        ]
      },
      {
        id: "lv-neverfull",
        href: "product-lv-neverfull.html",
        brand: "Louis Vuitton",
        name: "Neverfull MM, Damier Ebene",
        icon: "👜",
        offers: [
          {
            id: "neverfull-fashionphile",
            platform: "fashionphile",
            price: 1595,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://www.fashionphile.com/products/louis-vuitton-damier-ebene-neverfull-mm-1992692",
            condition: "Excellent",
            year: "2019",
            details: "Item #1992692. Fashionphile certificate. Pochette not listed."
          },
          {
            id: "neverfull-rebag",
            platform: "rebag",
            price: 1780,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://shop.rebag.com/products/handbags-louis-vuitton-neverfull-tote-damier-mm44561233",
            condition: "Great",
            year: "",
            details: "Item #445612/33. Brown coated canvas, red interior, gold hardware, brand code GI1152. No accessories. Rebag notes a light odor."
          }
        ]
      },
      {
        id: "rolex-datejust",
        href: "product-rolex-dj.html",
        brand: "Rolex",
        name: "Datejust 36, ref. 126200, steel",
        icon: "⌚",
        offers: [
          {
            id: "datejust-fashionphile",
            platform: "fashionphile",
            price: 9995,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://www.fashionphile.com/products/rolex-stainless-steel-36mm-oyster-perpetual-datejust-watch-silver-126200-1918093",
            condition: "Excellent",
            year: "2020",
            details: "Item #1918093. Silver dial, Jubilee bracelet, box, papers, and retail tags."
          },
          {
            id: "datejust-chrono24",
            platform: "chrono24",
            price: 10850,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://www.chrono24.com/rolex/rolex-datejust-36mm-stainless-steel-smooth-bezel-white-roman-dial-jubilee-bracelet-126200--id25822328.htm",
            condition: "Like new & unworn",
            year: "",
            details: "Listing code FDGMW0. White Roman dial, smooth bezel, Jubilee, box and papers. Year not stated. Seller: Luxury Time NYC."
          }
        ]
      },
      {
        id: "omega-speedmaster",
        href: "product-omega-speedy.html",
        brand: "Omega",
        name: "Speedmaster Professional Moonwatch, ref. 310.30.42.50.01.001",
        icon: "⌚",
        offers: [
          {
            id: "speedy-chrono24",
            platform: "chrono24",
            price: 6449,
            currency: "USD",
            urlKind: "listing",
            publicUrl: "https://www.chrono24.com/omega/speedmaster-moonwatch-co-axial-hesalite--id24885652.htm",
            condition: "Like new & unworn",
            year: "2026",
            details: "Listing code ETDW42. Hesalite, steel bracelet, box and papers. Seller: The Timeless Collector, New York. The page also shows a shipping line; confirm the total at checkout."
          },
          {
            id: "speedy-fashionphile-search",
            platform: "fashionphile",
            price: null,
            currency: "USD",
            urlKind: "search",
            publicUrl: "https://www.fashionphile.com/search?q=310.30.42.50.01.001",
            condition: "",
            year: "",
            details: "No in-stock Fashionphile listing for this reference was captured on the check date. This opens search results."
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
