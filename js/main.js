/**
 * Luxury CPS Demo Site — minimal JS
 * Affiliate deep links are placeholders (#affiliate-pending).
 * Replace with network deep-link templates after approval.
 */
(function () {
  "use strict";

  document.querySelectorAll('a[href="#affiliate-pending"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var msg =
        "联盟深链尚未接入（占位 #affiliate-pending）。\n" +
        "请在 Impact / Awin / CJ 等后台生成深链后替换本页 CTA。";
      window.alert(msg);
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
