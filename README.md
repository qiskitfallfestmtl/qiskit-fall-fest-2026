# Qiskit Fall Fest 2026 — Polytechnique Montréal

The official event website. **25–26 November 2026**, Polytechnique Montréal.

A **multi-page** static site: HTML, CSS and vanilla JavaScript.

---

## 1. Local Preview

```bash
python -m http.server 8765
```

Then open <http://localhost:8765>.

---

## 2. Pages

| File | Page |
|---|---|
| `index.html` | Home: hero, countdown, key facts, about |
| `program.html` | Full two-day schedule + add-to-calendar |
| `hackathon.html` | Format, judging criteria, what to install |
| `speakers.html` | Speakers and judges (6 slots) |
| `team.html` | Organizing committee (4 slots) |
| `venue.html` | Address, transit, parking, accessibility, map |
| `partners.html` | Partners + how to support + email the team |
| `faq.html` | Frequently asked questions |
| `code-of-conduct.html` | Required for an IBM-affiliated event |
| `404.html` | Not-found page |

### The header and footer live in ONE file

`assets/js/layout.js` builds the shared header and footer and injects them into
every page. **Change the nav or footer there once and all ten pages update.**

To add or remove a page from the menu, edit the `NAV` array near the top of
`assets/js/content.js` — the header *and* the footer link list both read from it.

---

## 3. Edit the text — `assets/js/content.js`

**Nearly every word on the site lives in one file.** No need to touch HTML unless to change to website structure. Every entry is bilingual:

```js
"hero.cta": { fr: "S'inscrire gratuitement", en: "Register — it's free" },
```

### TODO Updates needed

`SITE` object at the top of `content.js`:

| Field | Status | What to do |
|---|---|---|
| `registrationUrl` | ⚠️ set | We have to design a proper registration form. |
| `email` | ✅ set | `qiskitfallfest.montreal@gmail.com` |
| `venue.room` | ✅ Gallerie Roland | Confirmed. |
| `url` | ⚠️ **placeholder** | We can buy a domain (CAD$20) or use github pages |

`SITE.linkedin`, `SITE.instagram` and `SITE.github` are empty. we fill any of them
in and the matching icon **appears automatically** in the footer; if left empty no broken icon shows.

### Speakers (6) and team (4)

`SPEAKERS` and `TEAM` in `content.js`. Each slot already has a role; fill in
`name`, and `photo` when you have a headshot:

```js
{ name: "Prénom Nom", photo: "assets/img/people/prenom-nom.jpg",
  role: { fr: "Chercheuse, IBM Quantum", en: "Researcher, IBM Quantum" },
  link: "https://www.linkedin.com/in/..." },
```

Leave `photo: ""` and the card shows `speaker.png` silhouette on a purple
gradient tile. Leave `name: ""` and it reads "Annonce à venir / To be announced".
Both look deliberate, not broken. Put headshots in `assets/img/people/`.

### Program

`PROGRAM.day1` and `PROGRAM.day2`. Durations compute automatically from `start`
and `end` — don't hand-write them. Set `tbc: true` on any row whose timing isn't
locked and it renders a visible "to be confirmed" tag.

### Partners

`SPONSORS` is an empty array — the page shows a placeholder until you add
entries. There are **no sponsorship tiers**; the page explains how to help and
gives one button that emails the team.

```js
const SPONSORS = [
  { name: "Nom", logo: "assets/img/sponsors/nom.svg", url: "https://..." },
];
```

---

## 4. ⚠️ Branding rules — read before publishing

- ✅ The **"IBM Quantum"** lockup may be used, **unmodified**.
- ✅ The **quantum globe pictogram** may be used, **unmodified**.
- ❌ The standalone **8-bar IBM logo must NOT be used.** It requires a contract.
- ⚠️ Logo use must be **approved by Fall Fest event staff before you publish.**

### About the IBM Quantum lockup on this site

The official asset file was not provided, so I asked AI to do 
**typographic reconstruction** of the footer lockup: "IBM" and "Quantum" set in IBM Plex Sans
(IBM's own typeface) via CSS, in `layout.js` + the `.ibmq` rules in `main.css`. It has a
transparent background, follows dark mode, and links to
<https://quantum.cloud.ibm.com/> in a new tab.

We will update this once we get the logo

```js
var IBM_QUANTUM_LOCKUP =
  '<a class="ibmq-link" href="https://quantum.cloud.ibm.com/" target="_blank" rel="noopener noreferrer">' +
    '<img src="assets/img/ibm-quantum.svg" alt="IBM Quantum" style="max-height:34px">' +
  '</a>';
```

---

## 5. ⚠️ Required questions in your registration form (from the kickoff session presentation)

IBM's instructions for a **public, in-person** event require two things in the
registration form itself.

**1. Area / in-person confirmation (required)**

> **FR** — Confirmez-vous résider dans la région de Montréal et pouvoir vous
> présenter en personne à Polytechnique Montréal les 25 et 26 novembre 2026 ?
> ☐ Oui ☐ Non
>
> **EN** — Do you confirm that you live in the Montréal area and can attend in
> person at Polytechnique Montréal on 25–26 November 2026?
> ☐ Yes ☐ No

**2. Photo release (required)**

> **FR** — J'autorise les organisateurs, Polytechnique Montréal et IBM Quantum à
> me photographier ou à me filmer pendant l'événement, et à utiliser ces images à
> des fins de promotion de l'événement et de ses éditions futures.
> ☐ J'accepte ☐ Je refuse
>
> **EN** — I authorize the organizers, Polytechnique Montréal and IBM Quantum to
> photograph or film me during the event, and to use those images to promote the
> event and its future editions.
> ☐ I agree ☐ I decline

Maybe it may also worth adding: dietary restrictions, accessibility needs, and a link to the
[code of conduct](code-of-conduct.html) with an acknowledgement checkbox.

---

## 6. Add to calendar

The button on `program.html` opens a menu with three options:

- **Google Agenda** — opens Google Calendar in a new tab, event pre-filled
- **Outlook / Microsoft 365** — opens the Outlook web compose deeplink
- **Apple Calendrier** — downloads a `.ics` file (the only option that downloads)

All three are generated in the browser from `SITE.startISO` / `SITE.endISO`, so
changing the dates in `content.js` updates every calendar link automatically.

---

## 7. Deploy

### GitHub Pages

```bash
git init && git add . && git commit -m "Qiskit Fall Fest 2026 site"
```

```bash
git branch -M main && git remote add origin <your-repo-url> && git push -u origin main
```

Then: **Settings → Pages → Source: `main` / root**.

### Custom Domain

Replace `https://pkeyela.github.io/qiskit-fall-fest-2026/` everywhere:

- every `.html` file (canonical link + Open Graph tags; `index.html` also has JSON-LD)
- `sitemap.xml`
- `robots.txt`
- `assets/js/content.js` (`SITE.url`)

This controls the preview card shown when IBM Quantum shares the link on LinkedIn.

---

## 8. Launch checklist

- [ ] Real contact email in `content.js`
- [ ] Room / pavillon confirmed and added
- [ ] `PROGRAM.day1`, last entry, `tbc: true`. Remove that flag once decided.
- [ ] Registration form contains the required questions
- [ ] IBM Quantum lockup approved by event staff
- [ ] Speakers and judges filled in (6 slots)
- [ ] Organizing committee filled in (4 slots)
- [ ] Partner logos added, or the placeholder left deliberately
- [ ] Social links added to `SITE` if you have them
- [ ] Final URL replaced everywhere
- [ ] Social card checked at <https://www.opengraph.xyz/>
- [ ] Tested on a real phone

---

## 9. File map

```
index.html  program.html  hackathon.html  speakers.html  team.html
venue.html  partners.html faq.html  code-of-conduct.html  404.html

assets/css/tokens.css   Colours, type scale, spacing. Light + dark.
assets/css/main.css     All component styles.
assets/js/content.js    ★ ALL TEXT AND DATA — the file you edit.
assets/js/layout.js     ★ Shared header + footer (edit once, applies to all).
assets/js/i18n.js       FR/EN switching engine.
assets/js/main.js       Countdown, program, people, calendar, nav.

assets/img/             Web-optimized artwork.
assets/img/speaker.png  Silhouette placeholder for people without headshots.

```

---

## 10. Notes on how it's built

- **Hero legibility.** The illustration sits at **30% opacity** under a radial
  wash, so it reads as texture rather than competing with the type. Measured
  contrast: title 11.98:1, body 13.54:1, date pill 15.16:1 — WCAG AAA needs 7:1.
- **Bilingual.** French loads first; the EN toggle persists in `localStorage`.
  A visitor whose browser is set to English gets English on first visit.
- **Dark mode** follows the OS and can be overridden with the toggle.
- **Accessibility:** semantic landmarks, keyboard-operable menus, visible focus
  rings, skip link, `prefers-reduced-motion` respected.
- **SEO:** every page has its own title, description, canonical and OG tags;
  the home page carries JSON-LD `Event` schema.
- **Fonts:** IBM Plex from Google Fonts, with a system fallback that looks fine
  if blocked. To self-host (better under Quebec's Law 25), put WOFF2 files in
  `assets/fonts/` and swap the `<link>` for an `@font-face` block.
- **Artwork licence:** the official Qiskit Fall Fest 2026 illustrations are
  MIT-licensed. Attribution is in the footer.
