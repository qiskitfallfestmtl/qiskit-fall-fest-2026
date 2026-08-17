/* =========================================================================
   Bilingual engine.  French is the default; English is the toggle.
   Depends on content.js (I18N, SITE).
   ========================================================================= */
(function () {
  "use strict";

  var LANGS = ["fr", "en"];
  var KEY = "qff26.lang";

  function initialLang() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved && LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* private browsing */ }
    // Respect the browser only when it clearly asks for English.
    var nav = (navigator.language || "fr").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "fr";
  }

  var lang = initialLang();

  /** Look up a key. Falls back to the other language, then to the key. */
  function t(key) {
    var e = I18N[key];
    if (!e) return key;
    return e[lang] || e.fr || e.en || key;
  }

  /** Pick the right side of any {fr, en} pair. */
  function pick(pair) {
    if (!pair) return "";
    return pair[lang] || pair.fr || pair.en || "";
  }

  /** Fill every [data-i18n] element in the document. */
  function applyStatic(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    (root || document).querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      // format:  data-i18n-attr="aria-label:nav.menu|title:nav.theme"
      el.getAttribute("data-i18n-attr").split("|").forEach(function (pairStr) {
        var bits = pairStr.split(":");
        if (bits.length === 2) el.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });
  }

  function setLang(next, rerender) {
    if (LANGS.indexOf(next) === -1) return;
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    applyStatic();
    if (typeof rerender === "function") rerender();
    // The button offers the OTHER language.
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.textContent = lang === "fr" ? "EN" : "FR";
      b.setAttribute("aria-label", t("nav.lang"));
      b.setAttribute("title", t("nav.lang"));
    });
  }

  window.I18n = {
    get lang() { return lang; },
    t: t,
    pick: pick,
    applyStatic: applyStatic,
    setLang: setLang,
    toggle: function (rerender) { setLang(lang === "fr" ? "en" : "fr", rerender); }
  };
})();
