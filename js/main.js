/**
 * LuxArb Demo — visitor-facing JS
 * Platform CTAs use soft "Coming soon" toast (never expose placeholder codes).
 */
(function () {
  "use strict";

  function toastMessage() {
    if (window.LuxI18n && typeof window.LuxI18n.t === "function") {
      return window.LuxI18n.t("cta.coming");
    }
    return "Coming soon — live platform links will appear here.";
  }

  function showToast(msg) {
    var el = document.getElementById("toast");
    if (!el) {
      window.alert(msg);
      return;
    }
    el.textContent = msg;
    el.hidden = false;
    el.classList.add("toast-show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      el.classList.remove("toast-show");
      el.hidden = true;
    }, 3200);
  }

  document.querySelectorAll("a.js-platform-cta").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var href = a.getAttribute("href") || "";
      // Soft-gate placeholders only; allow real http(s) links through
      if (!href || href === "#" || href.indexOf("affiliate-pending") !== -1) {
        e.preventDefault();
        showToast(toastMessage());
      }
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("luxarb:langchange", function () {
    // Refresh toast copy context if open; no-op otherwise
  });
})();
