/* =========================================================================
   Qiskit Fall Fest 2026 — Polytechnique Montréal
   App behaviour: nav, theme, countdown, program, people, partners, hackathon.
   Depends on content.js + layout.js + i18n.js. No build step, no deps.
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
    var registerHref = (SITE.registrationClosed && SITE.discord) ? SITE.discord : SITE.registrationUrl;
    $$("[data-register]").forEach(function (a) {
      a.href = registerHref;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
    $$("[data-discord]").forEach(function (a) {
      a.href = SITE.discord;
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
    var hasPhoto = !!(p.photo && p.photo.trim());

    var media;
    if (hasPhoto) {
      media = '<div class="person__media">' +
        '<img src="' + esc(p.photo) + '" alt="' + (named ? esc(p.name) : "") + '" loading="lazy" decoding="async" width="300" height="300">' +
      '</div>';
    } else {
      // Circle avatar with human icon inside when photo is missing
      media = '<div class="person__media person__media--circle-avatar" aria-hidden="true">' +
        '<svg class="person__avatar-icon" viewBox="0 0 24 24" fill="currentColor">' +
          '<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>' +
        '</svg>' +
      '</div>';
    }

    var linkedinIcon = p.link
      ? '<span class="person__social" title="' + esc(t("spk.linkedin")) + '"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z"/></svg></span>'
      : '';

    var inner = media +
      '<p class="person__n' + (named ? "" : " person__n--tba") + '">' + esc(name) + linkedinIcon + '</p>' +
      '<p class="person__r">' + esc(pick(p.role)) + '</p>';

    return '<li class="person">' +
      (p.link ? '<a class="person__link" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(name) + ' (LinkedIn)">' + inner + '</a>' : inner) +
      '</li>';
  }

  function renderPeople() {
    var container = $("#speakers-container");
    var groups = (typeof SPEAKER_GROUPS !== "undefined") ? SPEAKER_GROUPS : window.SPEAKER_GROUPS;
    if (container && groups) {
      container.innerHTML = groups.map(function (g) {
        var items = SPEAKERS.filter(function (s) { return s.group === g.id; });
        if (!items.length) return "";
        return '<div class="speakers-section reveal">' +
          '<h2 class="speakers-section__t">' + esc(pick(g.title)) + '</h2>' +
          '<ul class="people">' + items.map(personHTML).join("") + '</ul>' +
        '</div>';
      }).join("");
    } else {
      var s = $("#speakers-list");
      if (s) s.innerHTML = SPEAKERS.map(personHTML).join("");
    }

    var m = $("#team-list");
    if (m) m.innerHTML = TEAM.map(personHTML).join("");
  }

  /* ---------------------------------------------------------------------
     PARTNERS
     ------------------------------------------------------------------ */
  function renderSponsors() {
    ["#sponsor-logos", "#home-partners"].forEach(function (sel) {
      var host = $(sel);
      if (host) renderPartnerGroups(host);
    });
  }

  function renderPartnerGroups(host) {
    var only = (host.getAttribute("data-groups") || "").split(/\s+/).filter(Boolean);
    function tile(x) {
      var inner = x.logo
        ? '<img src="' + esc(x.logo) + '" alt="' + esc(x.name) + '" loading="lazy">'
        : '<span class="logos__name">' + esc(x.name) + "</span>";
      return x.url
        ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer" title="' + esc(x.name) + '">' + inner + "</a>"
        : "<div>" + inner + "</div>";
    }
    host.innerHTML = PARTNER_GROUPS.map(function (g) {
      if (only.length && only.indexOf(g.id) < 0) return "";
      var items = SPONSORS.filter(function (x) { return x.group === g.id; });
      if (!items.length) return "";
      return '<div class="partner-group reveal">' +
        '<h2 class="partner-group__t">' + esc(pick(g.title)) + "</h2>" +
        '<div class="logos' + (g.size === "lg" ? " logos--lg" : "") + '">' + items.map(tile).join("") + "</div></div>";
    }).join("");
  }

  /* ---------------------------------------------------------------------
     HACKATHON (QUANTUM STEALTHSHIELD)
     ------------------------------------------------------------------ */
  function renderHackathon() {
    var host = $("#hackathon-root");
    if (!host) return;

    var revealTime = new Date(SITE.hackathonRevealISO).getTime();
    var now = Date.now();
    var isPreview = location.search.indexOf("preview") !== -1 || location.hash === "#preview";
    var isLive = now >= revealTime || isPreview;
    var ch = (typeof HACKATHON_CHALLENGE !== "undefined") ? HACKATHON_CHALLENGE : window.HACKATHON_CHALLENGE;
    if (!ch) return;

    var previewBadge = isPreview
      ? '<div class="callout" style="border-color:var(--accent);margin-bottom:var(--sp-5);background:color-mix(in srgb,var(--accent) 12%,transparent)"><strong>⚠️ ' +
        esc(window.I18n.lang === "fr" ? "Mode Prévisualisation Organisateur" : "Organizer Preview Mode") +
        '</strong> — ' + esc(window.I18n.lang === "fr" ? "Cet énoncé sera automatiquement débloqué le jeudi 26 nov à 9 h 00 HNE." : "This prompt will be automatically unlocked on Thursday, Nov 26 at 9:00 AM EST.") +
        '</div>'
      : '';

    var bannerHtml = '';
    if (!isLive) {
      bannerHtml = '<div class="hack-banner hack-banner--locked reveal">' +
        '<div>' +
          '<p style="font-size:var(--fs-lg);font-weight:700;margin-bottom:var(--sp-2)">🔒 ' + esc(t("hack.locked.banner")) + '</p>' +
          '<p style="color:var(--text-muted);font-size:var(--fs-sm)">' +
            esc(window.I18n.lang === "fr" ? "Les énoncés et jeux de données seront mis en ligne ici dès le début de l'épreuve. Rejoignez le serveur Discord pour trouver des coéquipiers dès maintenant !" : "Challenges and datasets will be released here as soon as the hackathon begins. Join our Discord server to form your team now!") +
          '</p>' +
        '</div>' +
        '<div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;align-items:center">' +
          '<a class="btn btn--primary" href="' + esc(SITE.discord) + '" target="_blank" rel="noopener noreferrer">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> ' +
            esc(t("hack.discord.cta")) +
          '</a>' +
        '</div>' +
      '</div>';
    } else {
      bannerHtml = previewBadge +
        '<div class="hack-banner hack-banner--live reveal">' +
        '<div>' +
          '<span class="chip" style="background:var(--accent);color:#fff;margin-bottom:var(--sp-2)">Quantum StealthShield · 8 Hours</span>' +
          '<p style="font-size:var(--fs-lg);font-weight:800;margin-bottom:var(--sp-2)">🎯 ' + esc(pick(ch.subtitle)) + '</p>' +
          '<p style="color:var(--text-muted);font-size:var(--fs-sm)">' + esc(pick(ch.mission)) + '</p>' +
        '</div>' +
        '<div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;margin-top:var(--sp-3)">' +
          '<a class="btn btn--primary btn--sm" href="' + esc(ch.links.submissionForm) + '" target="_blank" rel="noopener noreferrer">' +
            '🚀 ' + esc(window.I18n.lang === "fr" ? "Déposer la soumission" : "Submit project") +
          '</a>' +
          '<a class="btn btn--ghost btn--sm" href="' + esc(ch.links.datasetDownload) + '" target="_blank" rel="noopener noreferrer">' +
            '📥 ' + esc(window.I18n.lang === "fr" ? "Télécharger le sujet (PDF)" : "Download prompt (PDF)") +
          '</a>' +
          '<a class="btn btn--ghost btn--sm" href="' + esc(SITE.discord) + '" target="_blank" rel="noopener noreferrer">' +
            '💬 ' + esc(window.I18n.lang === "fr" ? "Salon Mentor Helpdesk" : "Mentor Helpdesk Discord") +
          '</a>' +
        '</div>' +
      '</div>';
    }

    var filesTable = '<table class="hack-table">' +
      '<thead><tr><th>' + esc(window.I18n.lang === "fr" ? "Fichier" : "File") + '</th><th>' + esc(window.I18n.lang === "fr" ? "Lignes" : "Rows") + '</th><th>' + esc(window.I18n.lang === "fr" ? "Labels" : "Labels") + '</th><th>' + esc(window.I18n.lang === "fr" ? "Rôle" : "Role") + '</th></tr></thead>' +
      '<tbody>' +
      ch.dataset.files.map(function(f) {
        return '<tr><td><code>' + esc(f.file) + '</code></td><td>' + esc(f.rows) + '</td><td>' + esc(pick(f.labels)) + '</td><td>' + esc(pick(f.role)) + '</td></tr>';
      }).join('') +
      '</tbody></table>';

    var scoringCards = ch.scoring.breakdown.map(function(b) {
      return '<div class="hack-stat"><div class="hack-stat__val">' + b.pts + ' <span style="font-size:var(--fs-xs)">pts</span></div><div class="hack-stat__lbl">' + esc(pick(b.title)) + '</div><p style="font-size:11px;color:var(--text-muted);margin-top:4px">' + esc(pick(b.desc)) + '</p></div>';
    }).join('');

    host.innerHTML = bannerHtml +
      '<div class="grid-2" style="margin-top:var(--sp-6)">' +
        '<div class="card reveal">' +
          '<h2 class="card__t">' + esc(t("hack.rules.title")) + '</h2>' +
          '<ul class="ticks">' +
            '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>' + esc(t("hack.r1")) + '</span></li>' +
            '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>' + esc(t("hack.r2")) + '</span></li>' +
            '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>' + esc(t("hack.r3")) + '</span></li>' +
            '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>' + esc(t("hack.r4")) + '</span></li>' +
          '</ul>' +
          '<div class="callout">' +
            '<strong>' + esc(t("hack.prep.title")) + '</strong><br>' +
            '<span>' + esc(t("hack.prep.d")) + '</span><br>' +
            '<span style="opacity:.85">' + esc(t("hack.prep.note")) + '</span>' +
          '</div>' +
        '</div>' +

        '<div class="card reveal">' +
          '<h2 class="card__t">' + esc(t("hack.judge.title")) + '</h2>' +
          '<div class="criteria">' +
            '<div class="crit"><p class="crit__t">' + esc(t("hack.j1.t")) + '</p><p class="crit__d">' + esc(t("hack.j1.d")) + '</p></div>' +
            '<div class="crit"><p class="crit__t">' + esc(t("hack.j2.t")) + '</p><p class="crit__d">' + esc(t("hack.j2.d")) + '</p></div>' +
            '<div class="crit"><p class="crit__t">' + esc(t("hack.j3.t")) + '</p><p class="crit__d">' + esc(t("hack.j3.d")) + '</p></div>' +
            '<div class="crit"><p class="crit__t">' + esc(t("hack.j4.t")) + '</p><p class="crit__d">' + esc(t("hack.j4.d")) + '</p></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      (isLive ? (
        '<div style="margin-top:var(--sp-8)">' +
          '<div class="card reveal">' +
            '<h2 class="card__t">📊 ' + esc(window.I18n.lang === "fr" ? "Structure des Données — 16 Métriques Réseau" : "Dataset Structure — 16 Network Features") + '</h2>' +
            '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:var(--sp-4)">' +
              esc(window.I18n.lang === "fr"
                ? "Chaque ligne résume une session réseau complète : volume, temporalité, répartition et direction. Labels cibles : 0 = Bénin, 1 = Attaque bruyante (loud), 2 = Attaque furtive (stealth)."
                : "Each row summarizes a single network session: size, timing, direction, and dispersion. Target labels: 0 = Benign, 1 = Loud attack, 2 = Stealth attack.") +
            '</p>' +
            '<div class="hack-table-wrap">' + filesTable + '</div>' +
            '<p style="font-size:var(--fs-xs);color:var(--text-muted);margin-top:var(--sp-3)"><code>' + ch.dataset.featuresList.join(' · ') + '</code></p>' +
          '</div>' +

          '<div class="card reveal" style="margin-top:var(--sp-6)">' +
            '<h2 class="card__t">🎯 ' + esc(window.I18n.lang === "fr" ? "Détail de la Notation Prédictive (70 Points)" : "Predictive Scoring Details (70 Points)") + '</h2>' +
            '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:var(--sp-3)"><code>' + ch.scoring.formula + '</code></p>' +
            '<div class="hack-stat-grid">' + scoringCards + '</div>' +
          '</div>' +

          '<div class="card reveal hack-bonus" style="margin-top:var(--sp-6)">' +
            '<h2 class="card__t" style="color:#ed1c24">⚡ ' + esc(window.I18n.lang === "fr" ? "+5 Points Bonus — Exécution Hardware Réel" : "+5 Bonus Points — Real Hardware Execution") + '</h2>' +
            '<p style="font-size:var(--fs-sm)">' +
              esc(window.I18n.lang === "fr"
                ? "Gagnez 5 points bonus en exécutant votre circuit ou algorithme sur un vrai ordinateur quantique (IBM Quantum via Qiskit Runtime ou Quandela Cloud). Joignez impérativement vos identifiants d'exécution (Job IDs) et captures d'écran dans votre rendu."
                : "Earn 5 bonus points by executing your circuit or model on real quantum processors (IBM Quantum via Qiskit Runtime or Quandela Cloud). Include job IDs and screenshots with your final submission folder.") +
            '</p>' +
          '</div>' +

          '<div class="card reveal" style="margin-top:var(--sp-6)">' +
            '<h2 class="card__t">📁 ' + esc(window.I18n.lang === "fr" ? "Modalités de Dépôt & Présentation" : "Submission Guidelines & Pitch") + '</h2>' +
            '<ul class="ticks">' +
              '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>' + esc(window.I18n.lang === "fr" ? "Générez les deux fichiers CSV de prédictions : submission_hidden_a.csv et submission_hidden_b.csv (colonnes: sample_id,predicted_label)." : "Generate two prediction CSVs: submission_hidden_a.csv and submission_hidden_b.csv (columns: sample_id,predicted_label).") + '</span></li>' +
              '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>' + esc(window.I18n.lang === "fr" ? "Déposez une archive ZIP au nom de votre équipe contenant le code, les notebooks, les prédictions et vos preuves hardware." : "Submit a ZIP folder named after your team containing your code, notebooks, prediction CSVs, and hardware proof.") + '</span></li>' +
              '<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>' + esc(window.I18n.lang === "fr" ? "Présentez 3 minutes chrono devant le jury suivies de 2 minutes de questions." : "Deliver a 3-minute pitch to the jury followed by 2 minutes of Q&A.") + '</span></li>' +
            '</ul>' +
          '</div>' +
        '</div>'
      ) : '');
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
    renderProgram();
    renderPeople();
    renderSponsors();
    renderHackathon();
    renderFaq();
    renderVenue();
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
