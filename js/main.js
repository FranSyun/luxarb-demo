/**
 * LuxArb — wire outbound CTAs from js/catalog.js + js/affiliates.js.
 * Tagged partner URLs are used only when affiliates.js sets a real https taggedUrl.
 */
(function () {
  "use strict";

  function t(key) {
    if (window.LuxI18n && typeof window.LuxI18n.t === "function") {
      return window.LuxI18n.t(key);
    }
    return "";
  }

  function offerById(id) {
    var catalog = window.LUXARB_CATALOG;
    if (!catalog || !id) return null;
    var comps = catalog.comparisons || [];
    var i, j, offers;
    for (i = 0; i < comps.length; i++) {
      offers = comps[i].offers || [];
      for (j = 0; j < offers.length; j++) {
        if (offers[j].id === id) return offers[j];
      }
    }
    return null;
  }

  function usableTagged(url) {
    if (!url || typeof url !== "string") return false;
    var u = url.trim();
    if (!/^https:\/\/[^\s]+$/i.test(u)) return false;
    if (/placeholder|changeme|paste-here|example\.com|\bTODO\b|\bTBD\b/i.test(u)) return false;
    return true;
  }

  function anyTagged() {
    var map = window.LUXARB_AFFILIATES || {};
    return Object.keys(map).some(function (key) {
      return map[key] && usableTagged(map[key].taggedUrl);
    });
  }

  function applyLinks() {
    document.querySelectorAll("a.js-outbound").forEach(function (a) {
      var offer = offerById(a.getAttribute("data-offer"));
      var platform = (offer && offer.platform) || a.getAttribute("data-platform") || "";
      var cfg = (window.LUXARB_AFFILIATES || {})[platform];
      var publicUrl = (offer && offer.publicUrl) || a.getAttribute("href") || "";
      var href = publicUrl;
      if (cfg && usableTagged(cfg.taggedUrl)) {
        var tagged = cfg.taggedUrl.trim();
        href = tagged.indexOf("{url}") !== -1
          ? tagged.split("{url}").join(encodeURIComponent(publicUrl))
          : tagged;
      }
      if (href) a.setAttribute("href", href);
      a.setAttribute("rel", "sponsored noopener noreferrer");
      a.setAttribute("target", "_blank");
    });

    var note = document.getElementById("footer-disclosure");
    if (note) {
      var key = anyTagged() ? "footer.note.partner" : "footer.note";
      note.setAttribute("data-i18n", key);
      var text = t(key);
      if (text) note.textContent = text;
    }
  }

  function syncSocial() {
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    var desc = document.querySelector('meta[name="description"]');
    if (ogTitle) ogTitle.setAttribute("content", document.title);
    if (twTitle) twTitle.setAttribute("content", document.title);
    if (desc && ogDesc) ogDesc.setAttribute("content", desc.getAttribute("content") || "");
    if (desc && twDesc) twDesc.setAttribute("content", desc.getAttribute("content") || "");
  }

  function boot() {
    applyLinks();
    syncSocial();
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("luxarb:langchange", function () {
    applyLinks();
    syncSocial();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
