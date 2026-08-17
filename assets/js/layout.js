/* =========================================================================
   Shared header + footer, injected into every page.
   Edit the markup ONCE here and all pages update — this is what replaces a
   template engine on a no-build site.
   Depends on content.js. Must run before i18n.js applies translations.
   ========================================================================= */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* Which page are we on? */
  var here = location.pathname.split("/").pop() || "index.html";

  /* ---------------------------------------------------------------------
     The IBM Quantum lockup, rebuilt as type.
     Branding rules: the "IBM Quantum" lockup MAY be used; the standalone
     8-bar IBM logo may NOT. Nothing here reproduces the 8-bar logo.
     ------------------------------------------------------------------ */
  var IBM_QUANTUM_LOCKUP =
    '<a class="ibmq-link" href="https://quantum.cloud.ibm.com/" target="_blank" rel="noopener noreferrer">' +
      '<span class="ibmq" role="img" aria-label="IBM Quantum">' +
        '<span class="ibmq__ibm">IBM</span><span class="ibmq__q">Quantum</span>' +
      "</span>" +
    "</a>";

  /* ---------------------------------------------------------------------
     HEADER
     ------------------------------------------------------------------ */
  function headerHTML() {
    var items = NAV.map(function (n) {
      var current = (n.href === here) || (here === "" && n.href === "index.html");
      return '<li><a class="nav__link" href="' + esc(n.href) + '"' +
             (current ? ' aria-current="page"' : "") +
             ' data-i18n="' + esc(n.key) + '"></a></li>';
    }).join("");

    return '' +
    '<a class="skip-link" href="#main" data-i18n="nav.skip"></a>' +
    '<header class="header">' +
      '<div class="wrap header__inner">' +
        '<a class="brand" href="index.html">' +
          '<img class="brand__mark" src="assets/img/badge.svg" alt="" width="38" height="38">' +
          '<span class="brand__txt">' +
            '<span class="brand__t">Qiskit Fall Fest 2026</span>' +
            '<span class="brand__s">Polytechnique Montréal</span>' +
          "</span>" +
        "</a>" +
        '<nav class="nav" aria-label="Navigation principale">' +
          '<ul class="nav__list" id="nav-list">' + items + "</ul>" +
          '<div class="nav__tools">' +
            '<button class="lang-btn" data-lang-btn type="button">EN</button>' +
            '<button class="icon-btn" data-theme-btn type="button" data-i18n-attr="aria-label:nav.theme|title:nav.theme">' +
              '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>' +
            "</button>" +
            '<a class="btn btn--primary btn--sm nav__cta" data-register href="#" data-i18n="nav.register"></a>' +
            '<button class="icon-btn burger" id="burger" type="button" aria-expanded="false" aria-controls="nav-list" data-i18n-attr="aria-label:nav.menu">' +
              '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
            "</button>" +
          "</div>" +
        "</nav>" +
      "</div>" +
    "</header>";
  }

  /* ---------------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------------ */
  function footerHTML() {
    var links = NAV.map(function (n) {
      return '<li><a href="' + esc(n.href) + '" data-i18n="' + esc(n.key) + '"></a></li>';
    }).join("");

    return '' +
    '<section class="cta">' +
      '<div class="wrap">' +
        '<h2 data-i18n="cta.title"></h2>' +
        '<p data-i18n="cta.lede"></p>' +
        '<a class="btn btn--on-dark btn--lg" data-register href="#">' +
          '<span data-i18n="cta.btn"></span>' +
          '<svg class="arw" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        "</a>" +
      "</div>" +
    "</section>" +

    '<footer class="footer">' +
      '<div class="wrap">' +
        '<div class="footer__top">' +
          "<div>" +
            '<a class="brand brand--footer" href="index.html">' +
              '<img class="brand__mark" src="assets/img/badge.svg" alt="" width="38" height="38">' +
              '<span class="brand__txt">' +
                '<span class="brand__t">Qiskit Fall Fest 2026</span>' +
                '<span class="brand__s">Polytechnique Montréal</span>' +
              "</span>" +
            "</a>" +
            '<p class="footer__tag" data-i18n="foot.tag"></p>' +
            '<div class="socials">' +
              '<a data-mailto href="#" aria-label="Courriel / Email">' +
                '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>' +
              "</a>" +
              (SITE.linkedin ? '<a href="' + esc(SITE.linkedin) + '" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z"/></svg></a>' : "") +
              (SITE.instagram ? '<a href="' + esc(SITE.instagram) + '" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' : "") +
              (SITE.github ? '<a href="' + esc(SITE.github) + '" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg></a>' : "") +
            "</div>" +
          "</div>" +

          "<div>" +
            '<p class="footer__h" data-i18n="foot.explore"></p>' +
            '<ul class="footer__links">' + links + "</ul>" +
          "</div>" +

          "<div>" +
            '<p class="footer__h" data-i18n="foot.contact"></p>' +
            '<ul class="footer__links">' +
              '<li><a data-register href="#" data-i18n="nav.register"></a></li>' +
              '<li><a href="code-of-conduct.html" data-i18n="foot.coc"></a></li>' +
              '<li><a data-mailto data-mailto-text href="#"></a></li>' +
            "</ul>" +
            '<p class="footer__h" style="margin-top:var(--sp-5)" data-i18n="foot.support"></p>' +
            '<div class="ibmq-wrap">' + IBM_QUANTUM_LOCKUP + "</div>" +
          "</div>" +
        "</div>" +

        '<div class="footer__bot">' +
          '<p data-i18n="foot.disclaim"></p>' +
          '<p data-i18n="foot.credit"></p>' +
          "<p>© <span data-year></span> Qiskit Fall Fest — Polytechnique Montréal.</p>" +
        "</div>" +
      "</div>" +
    "</footer>";
  }

  /* ---------------------------------------------------------------------
     Mount. Placeholders <div id="site-header"> / <div id="site-footer">
     are replaced; if absent we prepend/append to <body>.
     ------------------------------------------------------------------ */
  function mount() {
    var h = document.getElementById("site-header");
    if (h) { h.outerHTML = headerHTML(); }
    else { document.body.insertAdjacentHTML("afterbegin", headerHTML()); }

    var f = document.getElementById("site-footer");
    if (f) { f.outerHTML = footerHTML(); }
    else { document.body.insertAdjacentHTML("beforeend", footerHTML()); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
