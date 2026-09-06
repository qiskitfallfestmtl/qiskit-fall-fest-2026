/* =========================================================================
   Qiskit Fall Fest 2026 — Polytechnique Montréal
   App behaviour: nav, theme, countdown, program, people, calendar.
   Depends on content.js + layout.js + i18n.js.  No build step, no deps.
   ========================================================================= */
(function () {
  "use strict";

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var pick = function (p) { return window.I18n.pick(p); };
  var t    = function (k) { return window.I18n.t(k); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ---------------------------------------------------------------------
     THEME
     ------------------------------------------------------------------ */
  var THEME_KEY = "qff26.theme";
  function updateIBMQuantumLogo() {
    var img = document.querySelector("[data-ibm-quantum-logo]");
    if (!img) return;
    img.src = currentTheme() === "dark"
      ? "assets/img/IBM_Quantum_logotype_rev_RGB.png"
      : "assets/img/IBM_Quantum_logotype_pos_RGB.png";
  }
  function applyTheme(mode) {
    if (mode === "light" || mode === "dark") document.documentElement.setAttribute("data-theme", mode);
    else document.documentElement.removeAttribute("data-theme");
    updateIBMQuantumLogo();
  }
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  try { applyTheme(localStorage.getItem(THEME_KEY)); } catch (e) {}

  /* ---------------------------------------------------------------------
     LINKS — one source of truth
     ------------------------------------------------------------------ */
  function wireLinks() {
    $$("[data-register]").forEach(function (a) {
      a.href = SITE.registrationUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
    $$("[data-mailto]").forEach(function (a) {
      if (!SITE.email) { a.removeAttribute("href"); return; }
      a.href = "mailto:" + SITE.email;
      
      if (a.hasAttribute("data-mailto-text")) a.textContent = SITE.email;
    });
    $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------------------------------------------------------------------
     COUNTDOWN
     ------------------------------------------------------------------ */
  function initCountdown() {
    var box = $("#countdown");
    if (!box) return;
    var start = new Date(SITE.startISO).getTime();
    var end   = new Date(SITE.endISO).getTime();
    var f = { d: $("#cd-d"), h: $("#cd-h"), m: $("#cd-m"), s: $("#cd-s") };

    function tick() {
      var now = Date.now(), diff = start - now;
      if (diff <= 0) {
        box.innerHTML = '<p class="countdown__done">' + esc(now <= end ? t("cd.live") : t("cd.over")) + "</p>";
        return true;
      }
      var s = Math.floor(diff / 1000);
      var d = Math.floor(s / 86400); s -= d * 86400;
      var h = Math.floor(s / 3600);  s -= h * 3600;
      var m = Math.floor(s / 60);    s -= m * 60;
      if (f.d) f.d.textContent = d;
      if (f.h) f.h.textContent = String(h).padStart(2, "0");
      if (f.m) f.m.textContent = String(m).padStart(2, "0");
      if (f.s) f.s.textContent = String(s).padStart(2, "0");
      return false;
    }
    if (tick()) return;
    var id = setInterval(function () { if (tick()) clearInterval(id); }, 1000);
  }

  /* ---------------------------------------------------------------------
     PROGRAM
     ------------------------------------------------------------------ */
  function minutesBetween(a, b) {
    var pa = a.split(":"), pb = b.split(":");
    return (pb[0] * 60 + +pb[1]) - (pa[0] * 60 + +pa[1]);
  }

  function durationText(mins) {
    var fr = window.I18n.lang === "fr";
    if (mins < 60) return mins + " min";
    var h = Math.floor(mins / 60), r = mins % 60;
    if (fr) return r ? h + " h " + r : h + " h";
    return r ? h + " hr " + r + " min" : h + " hr";
  }

  function slotHTML(slot) {
    var desc = pick(slot.d);
    var typeLabel = TYPE_LABEL[slot.type] ? pick(TYPE_LABEL[slot.type]) : "";
    return '' +
      '<li class="slot slot--' + esc(slot.type) + '">' +
        '<div class="slot__time"><span class="slot__hrs">' + esc(slot.start) + "–" + esc(slot.end) + "</span>" +
          '<span class="slot__dur">' + esc(durationText(minutesBetween(slot.start, slot.end))) + "</span>" +
        "</div>" +
        '<div class="slot__body">' +
          '<div class="slot__tags">' +
            (typeLabel ? '<span class="chip">' + esc(typeLabel) + "</span>" : "") +
            (slot.tbc ? '<span class="chip chip--tbc">' + esc(t("prog.tbc")) + "</span>" : "") +
          "</div>" +
          '<h3 class="slot__t">' + esc(pick(slot.t)) + "</h3>" +
          (desc ? '<p class="slot__d">' + esc(desc) + "</p>" : "") +
        "</div>" +
      "</li>";
  }

  function renderProgram() {
    var d1 = $("#timeline-day1"), d2 = $("#timeline-day2");
    if (d1) d1.innerHTML = PROGRAM.day1.map(slotHTML).join("");
    if (d2) d2.innerHTML = PROGRAM.day2.map(slotHTML).join("");
  }

  /* ---------------------------------------------------------------------
     PEOPLE
     ------------------------------------------------------------------ */
  function personHTML(p) {
    var named = !!(p.name && p.name.trim());
    var name = named ? p.name : pick(PERSON_PLACEHOLDER);
    var src = p.photo || PERSON_FALLBACK_IMG;
    var isPlaceholder = !p.photo;

    // The placeholder is one small shared file sitting above the fold on the
    // speakers/team pages — load it eagerly. Real photos stay lazy.
    var loading = isPlaceholder ? "eager" : "lazy";
    var media = '<div class="person__media' + (isPlaceholder ? " person__media--ph" : "") + '">' +
        '<img src="' + esc(src) + '" alt="' + (named ? esc(p.name) : "") + '" loading="' + loading + '" decoding="async" width="300" height="300">' +
      "</div>";

    var inner = media +
      '<p class="person__n' + (named ? "" : " person__n--tba") + '">' + esc(name) + "</p>" +
      '<p class="person__r">' + esc(pick(p.role)) + "</p>";

    return '<li class="person">' +
      (p.link ? '<a class="person__link" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">' + inner + "</a>" : inner) +
      "</li>";
  }

  function renderPeople() {
    var s = $("#speakers-list");
    if (s) s.innerHTML = SPEAKERS.map(personHTML).join("");
    var m = $("#team-list");
    if (m) m.innerHTML = TEAM.map(personHTML).join("");
  }

  /* ---------------------------------------------------------------------
     PARTNERS
     ------------------------------------------------------------------ */
  function renderSponsors() {
    var host = $("#sponsor-logos"), fb = $("#sponsors-fallback");
    if (!host) return;
    host.innerHTML = SPONSORS.map(function (x) {
      var img = '<img src="' + esc(x.logo) + '" alt="' + esc(x.name) + '" loading="lazy">';
      return x.url
        ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer">' + img + "</a>"
        : "<div>" + img + "</div>";
    }).join("");
    host.hidden = SPONSORS.length === 0;
    if (fb) fb.hidden = SPONSORS.length > 0;
  }

  /* ---------------------------------------------------------------------
     FAQ
     ------------------------------------------------------------------ */
  function renderFaq() {
    var host = $("#faq-list");
    if (!host) return;
    host.innerHTML = FAQ.map(function (i) {
      return "<details><summary>" + esc(pick(i.q)) + "</summary><p>" + esc(pick(i.a)) + "</p></details>";
    }).join("");
  }

  /* ---------------------------------------------------------------------
     VENUE
     ------------------------------------------------------------------ */
  function renderVenue() {
    var a = $("#venue-address");
    if (a) {
      var v = SITE.venue;
      a.innerHTML = ["<strong>" + esc(v.name) + "</strong>", v.room ? esc(v.room) : "",
        esc(v.street), esc(v.city) + " (" + esc(v.region) + ")&nbsp; " + esc(v.postal)]
        .filter(Boolean).join("<br>");
    }
    var m = $("#venue-map-link");
    if (m) m.href = SITE.venue.mapsUrl;
  }

  /* ---------------------------------------------------------------------
     ADD TO CALENDAR
     Opens the user's calendar in a new tab (Google / Outlook), or hands
     over an .ics file for Apple Calendar. Downloading a file is the LAST
     option, not the default.
     ------------------------------------------------------------------ */
  var EVENT_TITLE = "Qiskit Fall Fest 2026 — Polytechnique Montréal";

  function utcStamp(iso) {
    return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  }
  function venueLine() {
    var v = SITE.venue;
    return [v.name, v.room, v.street, v.city + " (" + v.region + ") " + v.postal]
      .filter(Boolean).join(", ");
  }
  function googleUrl() {
    var p = new URLSearchParams({
      action: "TEMPLATE",
      text: EVENT_TITLE,
      dates: utcStamp(SITE.startISO) + "/" + utcStamp(SITE.endISO),
      details: t("hero.lede") + "\n\n" + SITE.url,
      location: venueLine(),
      ctz: "America/Toronto"
    });
    return "https://calendar.google.com/calendar/render?" + p.toString();
  }
  function outlookUrl() {
    var p = new URLSearchParams({
      path: "/calendar/action/compose",
      rru: "addevent",
      subject: EVENT_TITLE,
      startdt: SITE.startISO,
      enddt: SITE.endISO,
      location: venueLine(),
      body: t("hero.lede") + "\n\n" + SITE.url
    });
    return "https://outlook.office.com/calendar/0/deeplink/compose?" + p.toString();
  }
  function downloadIcs() {
    var body = [
      "BEGIN:VCALENDAR", "VERSION:2.0",
      "PRODID:-//Qiskit Fall Fest 2026//Polytechnique Montreal//FR",
      "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
      "UID:qff2026-polymtl@" + (location.hostname || "local"),
      "DTSTAMP:" + utcStamp(new Date().toISOString()),
      "DTSTART:" + utcStamp(SITE.startISO),
      "DTEND:" + utcStamp(SITE.endISO),
      "SUMMARY:" + EVENT_TITLE,
      "LOCATION:" + venueLine().replace(/,/g, "\\,"),
      "URL:" + SITE.url,
      "DESCRIPTION:" + String(t("hero.lede")).replace(/,/g, "\\,"),
      "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");
    var url = URL.createObjectURL(new Blob([body], { type: "text/calendar;charset=utf-8" }));
    var a = document.createElement("a");
    a.href = url; a.download = "qiskit-fall-fest-2026-polymtl.ics";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function initCalendar() {
    var wrap = $("#calendar-menu");
    if (!wrap) return;
    var btn = $("#calendar-btn", wrap);
    var menu = $("#calendar-list", wrap);

    function close() { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    function open()  { menu.hidden = false; btn.setAttribute("aria-expanded", "true"); }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.hidden ? open() : close();
    });
    document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) { close(); btn.focus(); }
    });

    $("#cal-google", wrap).addEventListener("click", function (e) {
      e.preventDefault(); window.open(googleUrl(), "_blank", "noopener"); close();
    });
    $("#cal-outlook", wrap).addEventListener("click", function (e) {
      e.preventDefault(); window.open(outlookUrl(), "_blank", "noopener"); close();
    });
    $("#cal-ics", wrap).addEventListener("click", function (e) {
      e.preventDefault(); downloadIcs(); close();
    });
  }

  /* ---------------------------------------------------------------------
     NAV
     ------------------------------------------------------------------ */
  function initNav() {
    var header = $(".header");
    if (header) {
      var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 8); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    var list = $("#nav-list"), burger = $("#burger");
    if (!burger || !list) return;
    burger.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.closest("a")) { list.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("is-open")) {
        list.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); burger.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     REVEAL
     ------------------------------------------------------------------ */
  function initReveal() {
    var els = $$(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------ */
  function renderDynamic() {
    renderProgram(); renderPeople(); renderSponsors(); renderFaq(); renderVenue();
  }

  function init() {
    document.documentElement.lang = window.I18n.lang;
    window.I18n.setLang(window.I18n.lang, renderDynamic);

    updateIBMQuantumLogo();
    wireLinks();
    initCountdown();
    initCalendar();
    initNav();
    initReveal();

    $$("[data-lang-btn]").forEach(function (b) {
      b.addEventListener("click", function () {
        window.I18n.toggle(renderDynamic);
        wireLinks();
      });
    });
    $$("[data-theme-btn]").forEach(function (b) {
      b.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
