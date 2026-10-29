

const SITE = {
  // The registration form. Every "Register" button on the site points here.
  registrationUrl: "https://forms.cloud.microsoft/r/iCi62SmCpb",

  email:     "qiskitfallfest.montreal@gmail.com",
  linkedin:  "https://www.linkedin.com/feed/update/urn:li:activity:7490436894841974785/",
  instagram: "",
  github:    "",

  url: "https://qiskitfallfestmtl.github.io/qiskit-fall-fest-2026/",

  startISO: "2026-11-25T08:00:00-05:00",
  endISO:   "2026-11-26T17:45:00-05:00",

  venue: {
    name:   "Polytechnique Montréal",
    street: "2500, chemin de Polytechnique",
    city:   "Montréal",
    region: "QC",
    postal: "H3T 1J4",
    country: "CA",
    room:   "Galérie Rolland, B-600.16",
    mapsUrl: "https://maps.google.com/?q=Polytechnique+Montreal,+2500+chemin+de+Polytechnique,+Montreal,+QC+H3T+1J4"
  },

  capacity: 100 
};

/* -------------------------------------------------------------------------
   2. NAVIGATION — the shared header is built from this list.
      Add or remove a page here and every page's menu updates.
   ---------------------------------------------------------------------- */
const NAV = [
  { href: "index.html",     key: "nav.home" },
  { href: "program.html",   key: "nav.program" },
  { href: "hackathon.html", key: "nav.hackathon" },
  { href: "speakers.html",  key: "nav.speakers" },
  { href: "team.html",      key: "nav.team" },
  { href: "venue.html",     key: "nav.venue" },
  { href: "partners.html",  key: "nav.sponsors" },
  { href: "faq.html",       key: "nav.faq" }
];

/* -------------------------------------------------------------------------
   3. INTERFACE STRINGS
   ---------------------------------------------------------------------- */
const I18N = {
  "nav.home":      { fr: "Accueil",       en: "Home" },
  "nav.about":     { fr: "L'événement",   en: "About" },
  "nav.program":   { fr: "Programme",     en: "Program" },
  "nav.hackathon": { fr: "Hackathon",     en: "Hackathon" },
  "nav.speakers":  { fr: "Conférenciers", en: "Speakers" },
  "nav.team":      { fr: "Équipe",        en: "Team" },
  "nav.venue":     { fr: "Lieu",          en: "Venue" },
  "nav.sponsors":  { fr: "Partenaires",   en: "Partners" },
  "nav.faq":       { fr: "FAQ",           en: "FAQ" },
  "nav.register":  { fr: "S'inscrire",    en: "Register" },
  "nav.menu":      { fr: "Menu",          en: "Menu" },
  "nav.skip":      { fr: "Aller au contenu principal", en: "Skip to main content" },
  "nav.theme":     { fr: "Changer de thème", en: "Toggle theme" },
  "nav.lang":      { fr: "Switch to English", en: "Passer au français" },

  /* ---- Hero ---- */
  "hero.kicker":   { fr: "25 – 26 novembre 2026 · Polytechnique Montréal",
                     en: "25 – 26 November 2026 · Polytechnique Montréal" },
  "hero.title1":   { fr: "Qiskit Fall Fest", en: "Qiskit Fall Fest" },
  "hero.title2":   { fr: "2026", en: "2026" },
  "hero.lede":     {
    fr: "Deux jours d'informatique quantique à Montréal : conférences, atelier pratique Qiskit et un hackathon. Aucune expérience quantique requise.",
    en: "Two days of quantum computing in Montréal: talks, a hands-on Qiskit workshop, and a hackathon. No quantum experience required."
  },
  "hero.cta":      { fr: "S'inscrire gratuitement", en: "Register — it's free" },
  "hero.cta2":     { fr: "Voir le programme", en: "See the program" },

  /* ---- Countdown ---- */
  "cd.title":  { fr: "Commence dans", en: "Starts in" },
  "cd.days":   { fr: "jours",    en: "days" },
  "cd.hours":  { fr: "heures",   en: "hours" },
  "cd.mins":   { fr: "minutes",  en: "minutes" },
  "cd.secs":   { fr: "secondes", en: "seconds" },
  "cd.live":   { fr: "C'est aujourd'hui !", en: "Happening now!" },
  "cd.over":   { fr: "Merci d'avoir participé !", en: "Thanks for joining us!" },

  /* ---- Facts strip ---- */
  "facts.days.v":  { fr: "2 jours",  en: "2 days" },
  "facts.days.l":  { fr: "25 – 26 novembre", en: "25 – 26 November" },
  "facts.cost.v":  { fr: "Gratuit", en: "Free" },
  "facts.cost.l":  { fr: "Café inclus", en: "Coffee included" },
  "facts.level.v": { fr: "Débutants bienvenus", en: "Beginners welcome" },
  "facts.level.l": { fr: "Aucun prérequis quantique", en: "No quantum background needed" },
  "facts.place.v": { fr: "En personne", en: "In person" },
  "facts.place.l": { fr: "Campus de Polytechnique", en: "Polytechnique campus" },

  /* ---- About (home) ---- */
  "about.eyebrow": { fr: "L'événement", en: "About" },
  "about.title":   { fr: "Une célébration du quantique à Montréal",
                     en: "A global quantum event hosted in Montréal" },
  "about.p1": {
    fr: "Le Qiskit Fall Fest est une série mondiale d'événements en informatique quantique organisés par des communautés étudiantes avec le soutien d'IBM Quantum.",
    en: "Qiskit Fall Fest is a worldwide series of quantum computing events run by student communities with the support of IBM Quantum."
  },
  "about.p2": {
    fr: "L'édition 2026 souligne dix ans d'informatique quantique dans le nuage : une décennie depuis qu'IBM a rendu un ordinateur quantique accessible à tous en ligne. Pendant deux jours à Polytechnique Montréal, nous retraçons ce chemin — des premières démonstrations aux charges de travail de plus de 100 qubits d'aujourd'hui — puis nous vous mettrons au clavier.",
    en: "The 2026 edition marks ten years of quantum on the cloud: a decade since IBM put a quantum computer within reach of anyone with a browser. Over two days at Polytechnique Montréal we trace that arc — from the earliest demonstrations to today's 100+ qubit workloads — and then put you at the keyboard."
  },
  "about.outcomes.title": { fr: "Ce que vous en retirerez", en: "What you'll walk away with" },
  "about.o1.t": { fr: "Écrire votre premier circuit quantique", en: "Write your first quantum circuit" },
  "about.o1.d": { fr: "Un atelier guidé de 90 minutes en Python et Qiskit",
                  en: "A guided 90-minute workshop in Python and Qiskit" },
  "about.o2.t": { fr: "Résoudre un vrai défi en équipe", en: "Solve a real challenge as a team" },
  "about.o2.d": { fr: "Un hackathon d'une journée complète avec du mentorat sur place.",
                  en: "A full-day hackathon on prompts with mentors on the floor." },
  "about.o3.t": { fr: "Rencontrer la communauté quantique d'ici", en: "Meet the quantum community here" },
  "about.o3.d": { fr: "Chercheurs, personnel d'IBM Quantum, étudiants, dans la même salle.",
                  en: "Researchers, IBM Quantum staff, students, all in one room." },
  "about.o4.t": { fr: "Repartir avec quelque chose à montrer", en: "Leave with something to show" },
  "about.o4.d": { fr: "Un projet, une attestation de participation et les autocollants officiels.",
                  en: "A project, a certificate of participation, and the official stickers." },

  /* ---- Program page ---- */
  "prog.eyebrow": { fr: "Programme", en: "Program" },
  "prog.title":   { fr: "Deux jours, de l'introduction à la démonstration",
                    en: "Two days, from introduction to demo" },
  "prog.note":    { fr: "Horaire préliminaire — susceptible d'être ajusté. Toutes les heures sont en heure de l'Est (HNE, UTC−5).",
                    en: "Preliminary schedule — subject to adjustment. All times are Eastern (EST, UTC−5)." },
  "prog.day1":    { fr: "Jour 1 — mercredi 25 novembre", en: "Day 1 — Wednesday 25 November" },
  "prog.day2":    { fr: "Jour 2 — jeudi 26 novembre",    en: "Day 2 — Thursday 26 November" },
  "prog.tbc":     { fr: "à confirmer", en: "to be confirmed" },

  /* ---- Add to calendar ---- */
  "cal.btn":     { fr: "Ajouter à mon calendrier", en: "Add to my calendar" },
  "cal.google":  { fr: "Google Agenda", en: "Google Calendar" },
  "cal.outlook": { fr: "Outlook / Microsoft 365", en: "Outlook / Microsoft 365" },
  "cal.ics":     { fr: "Apple Calendrier (fichier .ics)", en: "Apple Calendar (.ics file)" },
  "cal.aria":    { fr: "Choisir un calendrier", en: "Choose a calendar" },

  /* ---- Hackathon page ---- */
  "hack.eyebrow": { fr: "Le hackathon", en: "The hackathon" },
  "hack.title":   { fr: "Une journée. Un énoncé. Votre équipe.",
                    en: "One day. One prompt. Your team." },
  "hack.lede": {
    fr: "Les défis sont dévoilés le jeudi matin à 9 h. Vous formez votre équipe le mercredi après-midi, vous codez toute la journée du jeudi, et vous présentez devant jury à 16 h.",
    en: "Challenges are revealed at 9:00 on Thursday morning. You form your team on Wednesday afternoon, code all day Thursday, and pitch to the judges at 4pm."
  },
  "hack.rules.title": { fr: "Le format", en: "The format" },
  "hack.r1": { fr: "Équipes de 3 à 5 personnes, formées sur place le jour 1.", en: "Teams of 3–5, formed on site on Day 1." },
  "hack.r2": { fr: "Environ 5 h 30 de temps de codage, réparties de part et d'autre du dîner.", en: "Roughly 5.5 hours of coding time, split across lunch." },
  "hack.r3": { fr: "Python et Qiskit. Des mentors circulent toute la journée.", en: "Python and Qiskit. Mentors circulate all day." },
  "hack.r4": { fr: "Présentation finale de 5 minutes suivie de questions du jury.", en: "A final 5-minute pitch followed by questions from the judges." },
  "hack.judge.title": { fr: "Critères d'évaluation", en: "Judging criteria" },
  "hack.j1.t": { fr: "Justesse technique", en: "Technical soundness" },
  "hack.j1.d": { fr: "Le circuit fait-il ce que l'équipe affirme ?", en: "Does the circuit do what the team claims?" },
  "hack.j2.t": { fr: "Originalité", en: "Originality" },
  "hack.j2.d": { fr: "L'approche apporte-t-elle un angle inattendu ?", en: "Does the approach bring an unexpected angle?" },
  "hack.j3.t": { fr: "Portée", en: "Impact" },
  "hack.j3.d": { fr: "Le problème choisi vaut-il la peine d'être résolu ?", en: "Is the chosen problem worth solving?" },
  "hack.j4.t": { fr: "Présentation", en: "Presentation" },
  "hack.j4.d": { fr: "L'équipe sait-elle expliquer clairement son travail ?", en: "Can the team explain their work clearly?" },
  "hack.prep.title": { fr: "À installer avant le jour 2", en: "Install before Day 2" },
  "hack.prep.d": { fr: "Apportez un ordinateur portable. Nous réservons la fin du jour 1 pour l'installation, mais venir prêt vous fait gagner du temps.",
                   en: "Bring a laptop. We set aside the end of Day 1 for setup, but arriving ready saves you time." },
  "hack.prep.note": { fr: "Un compte IBM Quantum gratuit est requis pour exécuter du code sur du matériel réel.",
                      en: "A free IBM Quantum account is required to run code on real hardware." },

  /* ---- Speakers page ---- */
  "spk.eyebrow": { fr: "Programmation", en: "Line-up" },
  "spk.title":   { fr: "Conférenciers et jury", en: "Speakers and judges" },
  "spk.lede":    { fr: "La programmation se précise. Les noms seront annoncés à mesure qu'ils se confirment — inscrivez-vous pour être informé en premier.",
                   en: "The line-up is coming together. Names are announced as they confirm — register to hear about it first." },
  "spk.tba":     { fr: "Annonce à venir", en: "To be announced" },
  "spk.slot":    { fr: "Conférencier·ère", en: "Speaker" },

  /* ---- Team page ---- */
  "team.eyebrow": { fr: "Qui sommes-nous", en: "Who we are" },
  "team.title":   { fr: "Le comité organisateur", en: "The organizing committee" },
  "team.lede":    { fr: "Un événement monté par des étudiants et chercheurs de Polytechnique Montréal, bénévolement.",
                    en: "An event built by students and researchers at Polytechnique Montréal, on volunteer time." },
  "team.join":    { fr: "Envie de donner un coup de main ? Écrivez-nous :", en: "Want to help out? Get in touch:" },

  /* ---- Venue page ---- */
  "venue.eyebrow": { fr: "Le lieu", en: "The venue" },
  "venue.title":   { fr: "Polytechnique Montréal", en: "Polytechnique Montréal" },
  "venue.lede":    { fr: "Sur le flanc du mont Royal, sur le campus de l'Université de Montréal.",
                     en: "On the slope of Mount Royal, on the Université de Montréal campus." },
  "venue.getting": { fr: "S'y rendre", en: "Getting there" },
  "venue.metro.t": { fr: "Métro", en: "Metro" },
  "venue.metro.d": { fr: "Station Université-de-Montréal (ligne bleue), puis environ 10 minutes de marche en montant.",
                     en: "Université-de-Montréal station (blue line), then about a 10-minute walk uphill." },
  "venue.bus.t":   { fr: "Autobus", en: "Bus" },
  "venue.bus.d":   { fr: "Les lignes 51, 119 et 129 desservent le campus.", en: "Routes 51, 119 and 129 serve the campus." },
  "venue.car.t":   { fr: "Voiture", en: "Car" },
  "venue.car.d":   { fr: "Stationnement payant sur le campus. Places limitées en semaine — le métro est plus sûr.",
                     en: "Paid parking on campus. Limited weekday availability — the metro is a safer bet." },
  "venue.access.t":{ fr: "Accessibilité", en: "Accessibility" },
  "venue.access.d":{ fr: "Les pavillons sont accessibles en fauteuil roulant. Signalez-nous tout besoin particulier dans le formulaire d'inscription et nous nous organiserons.",
                     en: "The buildings are wheelchair accessible. Tell us about any specific needs in the registration form and we will make arrangements." },
  "venue.map":     { fr: "Ouvrir dans Google Maps", en: "Open in Google Maps" },

  /* ---- Homepage partners band ---- */
  "home.partners.more.p":   { fr: "IBM Quantum, Lincs Lab, Quandela, l'AMF et d'autres contribuent aussi à l'événement.",
                              en: "IBM Quantum, Lincs Lab, Quandela, the AMF and others also make this event possible." },
  "home.partners.more.cta": { fr: "Voir tous nos partenaires", en: "See all our partners" },

  /* ---- Partners page ---- */
  "spon.eyebrow": { fr: "Partenaires", en: "Partners" },
  "spon.title":   { fr: "Rendu possible par", en: "Made possible by" },
  "spon.lede":    { fr: "Le Qiskit Fall Fest est gratuit pour les participants grâce à nos partenaires.",
                    en: "Qiskit Fall Fest is free for attendees thanks to our partners." },
  "spon.why.t":   { fr: "Pourquoi s'associer à nous", en: "Why partner with us" },
  "spon.why.p":   {
    fr: "Le Qiskit Fall Fest attire exactement le profil que les organisations en quantique, en logiciel et en recherche cherchent à recruter : des étudiants en génie et en sciences, motivés au point de consacrer deux jours à apprendre une technologie difficile. Vous les rencontrez au moment où ils choisissent leur domaine — pas trois ans plus tard sur un site d'emploi.",
    en: "Qiskit Fall Fest attracts exactly the profile that quantum, software and research organizations want to hire: engineering and science students motivated enough to spend two days learning a hard technology. You meet them while they are choosing their field — not three years later on a job board."
  },
  "spon.how.t": { fr: "Comment vous pouvez aider", en: "How you can help" },
  "spon.h1": { fr: "Fournir des mentors pour la journée de hackathon.", en: "Provide mentors for the hackathon day." },
  "spon.h2": { fr: "Offrir un prix — matériel, crédits infonuagiques, ou un stage.", en: "Offer a prize — hardware, cloud credits, or an internship." },
  "spon.h3": { fr: "Commanditer les repas ou le café d'une journée.", en: "Sponsor meals or coffee for one day." },
  "spon.h4": { fr: "Déléguer un conférencier ou un membre du jury.", en: "Send a speaker or a judge." },
  "spon.h5": { fr: "Contribuer financièrement pour garder l'événement gratuit.", en: "Contribute financially to keep the event free." },
  "spon.contact.t": { fr: "Parlons-en", en: "Let's talk" },
  "spon.contact.p": {
    fr: "Écrivez-nous en indiquant le type de soutien que vous envisagez. Nous répondons sous quelques jours et bâtirons l'entente avec vous.",
    en: "Email us with the kind of support you have in mind. We reply within a few days and will shape the arrangement with you."
  },
  "spon.email": { fr: "Écrire à l'équipe", en: "Email the team" },

  /* ---- FAQ page ---- */
  "faq.eyebrow": { fr: "Questions", en: "Questions" },
  "faq.title":   { fr: "Foire aux questions", en: "Frequently asked questions" },
  "faq.more":    { fr: "Une autre question ? Écrivez-nous à", en: "Another question? Email us at" },

  /* ---- Final CTA ---- */
  "cta.title": { fr: "Les places sont limitées.", en: "Places are limited." },
  "cta.lede":  { fr: "L'inscription est gratuite et prend deux minutes. Nous confirmons par courriel.",
                 en: "Registration is free and takes two minutes. We confirm by email." },
  "cta.btn":   { fr: "Réserver ma place", en: "Claim my place" },

  /* ---- Footer ---- */
  "foot.tag":     { fr: "Deux jours d'informatique quantique à Polytechnique Montréal, les 25 et 26 novembre 2026.",
                    en: "Two days of quantum computing at Polytechnique Montréal, 25–26 November 2026." },
  "foot.explore": { fr: "Explorer", en: "Explore" },
  "foot.support": { fr: "Avec le soutien de", en: "With the support of" },
  "foot.coc":     { fr: "Code de conduite", en: "Code of conduct" },
  "foot.contact": { fr: "Nous joindre", en: "Contact" },
  "foot.credit":  { fr: "Illustrations officielles du Qiskit Fall Fest 2026, sous licence MIT.",
                    en: "Official Qiskit Fall Fest 2026 artwork, MIT licensed." },
  "foot.disclaim":{ fr: "Événement communautaire organisé de façon indépendante dans le cadre du Qiskit Fall Fest 2026.",
                    en: "A community event organized independently as part of Qiskit Fall Fest 2026." },
  "coc.back":     { fr: "Retour à l'accueil", en: "Back to home" }
};

/* -------------------------------------------------------------------------
   4. PROGRAM
   `type` drives the colour coding: welcome | ceremony | talk | workshop |
   break | networking | panel | hackathon | judging
   Set `tbc: true` on any row whose timing is not yet locked.
   ---------------------------------------------------------------------- */
const PROGRAM = {
  day1: [
    { start: "08:00", end: "08:45", type: "welcome",
      t: { fr: "Accueil et café", en: "Registration & coffee" },
      d: { fr: "Inscription sur place et mot de bienvenue.", en: "Check-in and welcome." } },
    { start: "08:45", end: "09:15", type: "ceremony",
      t: { fr: "Cérémonie d'ouverture", en: "Opening ceremony" },
      d: { fr: "Pr Soumaya Cherkaoui.", en: "Prof. Soumaya Cherkaoui." } },
    { start: "09:15", end: "09:45", type: "talk",
      t: { fr: "Conférence 1 — IBM", en: "Talk 1 — IBM" },
      d: { fr: "Conférencier à confirmer.", en: "Speaker to be confirmed." } },
    { start: "09:45", end: "10:45", type: "workshop",
      t: { fr: "Atelier Qiskit", en: "Qiskit workshop" },
      d: { fr: "Animateur à confirmer.", en: "Speaker to be confirmed." } },
    { start: "10:45", end: "11:15", type: "talk",
      t: { fr: "Conférence 2 — Quandela", en: "Talk 2 — Quandela" },
      d: { fr: "Présentée par l'équipe Quandela. L’informatique quantique : applications et perspectives prometteuses (à confirmer).", en: "Delivered by the Quandela team. Potential Applications and Advantages of Quantum Computing (to be confirmed)." } },
    { start: "11:15", end: "12:15", type: "workshop",
      t: { fr: "Atelier Merlin", en: "Merlin workshop" },
      d: { fr: "Animé par l'équipe Quandela.", en: "Led by the Quandela team." } },
    { start: "12:15", end: "13:15", type: "break",
      t: { fr: "Pause dîner", en: "Lunch break" },
      d: { fr: "Dîner fourni à confirmer — prévoyez votre lunch au cas où.", en: "Lunch provided — to be confirmed. Bring your own just in case." } },
    { start: "13:15", end: "13:45", type: "talk",
      t: { fr: "Conférence 3 — Quantacet", en: "Talk 3 — Quantacet" },
      d: { fr: "Conférencier : Equipe Quantacet. Sujet à confirmer.", en: "Speaker: Quantacet Team. Topic to be confirmed." } },
    { start: "13:45", end: "14:15", type: "talk",
      t: { fr: "Ma recherche quantique en 3 minutes", en: "My quantum research in 3 minutes" },
      d: { fr: "Étudiants des cycles supérieurs et chercheurs présentent leur sujet, chronomètre en main.",
           en: "Graduate students and researchers pitch their topic against the clock." } },
    { start: "14:15", end: "15:30", type: "panel",
      t: { fr: "Table ronde", en: "Panel discussion" },
      d: { fr: "Une discussion modérée réunissant des experts de l'industrie et des universitaires.", en: "A moderated discussion with industry experts and academics." } },
    { start: "15:30", end: "16:30", type: "networking",
      t: { fr: "Formation des équipes et réseautage", en: "Team formation & networking" },
      d: { fr: "Trouvez vos coéquipiers pour le hackathon du lendemain.", en: "Find your teammates for tomorrow's hackathon." } }
  ],
  day2: [
    { start: "08:00", end: "08:45", type: "welcome",
      t: { fr: "Accueil et café", en: "Registration & coffee" }, d: { fr: "", en: "" } },
    { start: "08:45", end: "09:15", type: "ceremony",
      t: { fr: "Dévoilement des énoncés et des règles", en: "Prompts reveal & rules" },
      d: { fr: "Les défis et les critères d'évaluation sont rendus publics. Le chronomètre démarre.",
           en: "The challenges and evaluation criteria go public. The clock starts." } },
    { start: "09:15", end: "11:45", type: "hackathon",
      t: { fr: "Hackathon — première manche", en: "Hackathon — first stretch" },
      d: { fr: "Mentors sur place.", en: "Mentors on the floor." } },
    { start: "11:45", end: "12:45", type: "break",
      t: { fr: "Pause dîner", en: "Lunch break" },
      d: { fr: "Dîner fourni à confirmer — prévoyez votre lunch au cas où.", en: "Lunch provided — to be confirmed. Bring your own just in case." } },
    { start: "12:45", end: "15:45", type: "hackathon",
      t: { fr: "Hackathon — dernière ligne droite", en: "Hackathon — final stretch" },
      d: { fr: "Trois heures pour finir et préparer la présentation.", en: "Three hours to finish and prepare the pitch." } },
    { start: "15:45", end: "17:15", type: "judging",
      t: { fr: "Présentations et évaluation", en: "Pitching & judging" },
      d: { fr: "Chaque équipe présente devant le jury. Jury : Pr Soumaya Cherkaoui et autres membres à confirmer.",
           en: "Each team pitches to the judges. Jury: Prof. Soumaya Cherkaoui, other members to be confirmed." } },
    { start: "17:15", end: "17:45", type: "ceremony",
      t: { fr: "Cérémonie de clôture et remise des prix", en: "Closing ceremony & awards" }, d: { fr: "", en: "" } }
  ]
};

const TYPE_LABEL = {
  welcome:    { fr: "Arrivée",    en: "Welcome" },
  ceremony:   { fr: "Cérémonie",  en: "Ceremony" },
  talk:       { fr: "Conférence", en: "Talk" },
  workshop:   { fr: "Atelier",    en: "Workshop" },
  break:      { fr: "Pause",      en: "Break" },
  networking: { fr: "Réseautage", en: "Networking" },
  panel:      { fr: "Table ronde",en: "Panel" },
  hackathon:  { fr: "Hackathon",  en: "Hackathon" },
  judging:    { fr: "Évaluation", en: "Judging" }
};

/* -------------------------------------------------------------------------
   5. SPEAKERS & JUDGES  — 6 slots
   Replace `name`, `role` and `photo` as each speaker confirms.
   `photo: ""` falls back to the silhouette placeholder automatically.
   ---------------------------------------------------------------------- */
const SPEAKERS = [
  { name: "", photo: "", role: { fr: "Conférence d'ouverture", en: "Opening talk" },       link: "" },
  { name: "", photo: "", role: { fr: "Conférence — applications", en: "Talk — applications" }, link: "" },
  { name: "", photo: "", role: { fr: "Animation de l'atelier", en: "Workshop facilitator" }, link: "" },
  { name: "", photo: "", role: { fr: "Table ronde", en: "Panellist" },                      link: "" },
  { name: "", photo: "", role: { fr: "Table ronde", en: "Panellist" },                      link: "" },
  { name: "", photo: "", role: { fr: "Jury du hackathon", en: "Hackathon judge" },          link: "" }
];

/* -------------------------------------------------------------------------
   6. ORGANIZING TEAM  — 4 slots
   ---------------------------------------------------------------------- */
const TEAM = [
  { name: "Wissal Hamhoum", photo: "assets/img/organizers/wissal.jpg", role: { fr: "Chef d'équipe", en: "Lead Organizer" }, link: "https://www.linkedin.com/in/wissal-hamhoum-3b7aa7197/" },
  { name: "Melek Krichen", photo: "assets/img/organizers/melek.jpg", role: { fr: "Co-Organisateur", en: "Co-Organizer" }, link: "https://www.linkedin.com/in/melek-krichen-8856521b9/" },
  { name: "Patatchona Keyela", photo: "assets/img/organizers/keyela.jpg", role: { fr: "Co-Organisateur", en: "Co-Organizer" }, link: "https://www.linkedin.com/in/pkeyela/" },
  { name: "Samar Abdelghani", photo: "assets/img/organizers/samar.jpg", role: { fr: "Co-Organisateur", en: "Co-Organizer" }, link: "https://www.linkedin.com/in/samar-abdelghani-1954a0133/" }
];

/* Shown when a person has no name yet. */
const PERSON_PLACEHOLDER = { fr: "Annonce à venir", en: "To be announced" };
const PERSON_FALLBACK_IMG = "assets/img/speaker.png";

/* -------------------------------------------------------------------------
   7. PARTNERS
   ---------------------------------------------------------------------- */
/* Categories, in display order. A category with no partners is hidden.
   size: "lg" shows that category's logos in bigger tiles. */
const PARTNER_GROUPS = [
  { id: "supporters", size: "lg", title: { fr: "Partenaires officiels",     en: "Official Partners" } },
  { id: "mbp",     title: { fr: "Avec le soutien ",                   en: "With Support From" } },
  { id: "tech",       title: { fr: "Partenaire technologique et Scientific", en: "Technology & Knowledge Partner" } },
  { id: "program",    title: { fr: "Contributeurs au programme",            en: "Program Contributors" } }
];

/* group: an id from PARTNER_GROUPS.  logo: optional — without it the name is shown.
   Tiles are white in both themes, so use the dark-on-light version of each logo.
   Encode spaces as %20 and "&" as %26 in folder names. */
const SPONSORS = [
  { name: "AÉCSP",        group: "supporters", logo: "assets/img/partners/Event_Suporters/aecso.png", url: "" },
  { name: "Quantacet",    group: "supporters", logo: "assets/img/partners/Event_Suporters/Quantacet-logo-vertical.png", url: "" },
  { name: "IBM Quantum",  group: "mbp",     logo: "assets/img/IBM_Quantum_logotype_pos_RGB.png", url: "https://www.ibm.com/quantum" },
  { name: "Lincs Lab",    group: "mbp",     logo: "assets/img/partners/MPb/lincs_lab.png", url: "https://lincslab.ca/en/" },

  { name: "Quandela",     group: "tech",       logo: "assets/img/partners/Technology%20%26%20Knowledge%20Partner/Quandela.webp", url: "https://www.quandela.com" },
  // { name: "Hydro-Québec", group: "program",    logo: "", url: "https://www.hydroquebec.com" },
  { name: "Autorité des marchés financiers", group: "program", logo: "assets/img/partners/Program%20Contributors/AMF.webp", url: "https://lautorite.qc.ca" }
];

/* -------------------------------------------------------------------------
   8. FAQ
   ---------------------------------------------------------------------- */
const FAQ = [
  {
    q: { fr: "Dois-je connaître l'informatique quantique ?", en: "Do I need to know quantum computing?" },
    a: { fr: "Non. Le jour 1 est bâti pour des débutants complets : deux conférences d'introduction et un atelier guidé. Si vous savez lire un peu de Python, vous avez tout ce qu'il faut.",
         en: "No. Day 1 is built for complete beginners: two introductory talks and a guided workshop. If you can read a little Python, you have everything you need." }
  },
  {
    q: { fr: "Faut-il participer aux deux jours ?", en: "Do I have to attend both days?" },
    a: { fr: "Le jour 1 se tient seul si vous voulez seulement les conférences et l'atelier. Par contre, le hackathon du jour 2 suppose l'atelier et la formation des équipes du jour 1 — venez aux deux si vous voulez concourir.",
         en: "Day 1 stands on its own if you only want the talks and workshop. The Day 2 hackathon, however, assumes the Day 1 workshop and team formation — come to both if you want to compete." }
  },
  {
    q: { fr: "Qui peut s'inscrire ?", en: "Who can register?" },
    a: { fr: "L'événement est ouvert aux étudiants et aux passionnés de la région de Montréal, tous établissements confondus. Comme il s'agit d'un événement en présentiel, vous devez pouvoir vous rendre sur le campus les 25 et 26 novembre.",
         en: "The event is open to students and enthusiasts in the Montréal area, from any institution. Because this is an in-person event, you must be able to get to campus on 25–26 November." }
  },
  {
    q: { fr: "Combien ça coûte ?", en: "How much does it cost?" },
    a: { fr: "Rien. L'inscription et le café sont offerts grâce à nos partenaires. Le dîner reste à confirmer ; nous l'annoncerons avant l'événement.",
         en: "Nothing. Registration and coffee are covered by our partners. Lunch is still to be confirmed; we'll announce it before the event." }
  },
  {
    q: { fr: "Qu'est-ce que j'apporte ?", en: "What should I bring?" },
    a: { fr: "Un ordinateur portable et son chargeur. Nous réservons du temps le jour 1 pour installer Python et Qiskit, et un compte IBM Quantum gratuit vous permettra d'exécuter du code sur du vrai matériel.",
         en: "A laptop and its charger. We set aside time on Day 1 to install Python and Qiskit, and a free IBM Quantum account will let you run code on real hardware." }
  },
  {
    q: { fr: "Puis-je venir sans équipe ?", en: "Can I come without a team?" },
    a: { fr: "Oui, et c'est le cas de la plupart des gens. La séance de formation des équipes du mercredi après-midi existe exactement pour ça.",
         en: "Yes, and most people do. Wednesday afternoon's team formation session exists for precisely that reason." }
  },
  {
    q: { fr: "L'événement se déroule-t-il en français ou en anglais ?", en: "Is the event in French or English?" },
    a: { fr: "Les deux. L'accueil, la logistique et le soutien se font en français comme en anglais ; certaines conférences invitées seront en anglais.",
         en: "Both. Welcome, logistics and support are handled in French and English; some invited talks will be in English." }
  },
  {
    q: { fr: "Y a-t-il des prix ?", en: "Are there prizes?" },
    a: { fr: "Oui — les détails seront annoncés avec le dévoilement des défis. Tous les participants reçoivent une attestation et les autocollants officiels du Fall Fest.",
         en: "Yes — details land with the challenge reveal. Every participant receives a certificate and the official Fall Fest stickers." }
  }
];
