const SITE = {
  registrationUrl: "https://forms.cloud.microsoft/r/iCi62SmCpb",

  email:     "qiskitfallfest.montreal@gmail.com",
  linkedin:  "https://www.linkedin.com/feed/update/urn:li:activity:7490436894841974785/",
  instagram: "",
  github:    "",
  discord:   "", //"https://discord.gg/G8FBKTcWGh",

  url: "https://qiskitfallfestmtl.github.io/qiskit-fall-fest-2026/",

  startISO: "2026-11-25T08:00:00-05:00",
  endISO:   "2026-11-26T17:45:00-05:00",
  hackathonRevealISO: "2026-11-26T09:00:00-05:00",
  registrationClosed: true,

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

const NAV = [
  { href: "program.html",   key: "nav.program" },
  { href: "hackathon.html", key: "nav.hackathon" },
  { href: "speakers.html",  key: "nav.speakers" },
  { href: "partners.html",  key: "nav.sponsors" }
];

const NAV_FOOTER = [
  { href: "index.html",     key: "nav.home" },
  { href: "program.html",   key: "nav.program" },
  { href: "hackathon.html", key: "nav.hackathon" },
  { href: "speakers.html",  key: "nav.speakers" },
  { href: "partners.html",  key: "nav.sponsors" },
  { href: "venue.html",     key: "nav.venue" },
  { href: "team.html",      key: "nav.team" },
  { href: "faq.html",       key: "nav.faq" }
];


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
  "nav.register":  { fr: "Rejoindre le Discord", en: "Join Discord" },
  "nav.menu":      { fr: "Menu",          en: "Menu" },
  "nav.skip":      { fr: "Aller au contenu principal", en: "Skip to main content" },
  "nav.theme":     { fr: "Changer de thème", en: "Toggle theme" },
  "nav.lang":      { fr: "Switch to English", en: "Passer au français" },

  /* ---- Hero ---- */
  "hero.kicker":   { fr: "25 - 26 novembre 2026 · Polytechnique Montréal",
                     en: "25 - 26 November 2026 · Polytechnique Montréal" },
  "hero.title1":   { fr: "Qiskit Fall Fest", en: "Qiskit Fall Fest" },
  "hero.title2":   { fr: "2026", en: "2026" },
  "hero.lede":     {
    fr: "Deux jours d'informatique quantique à Montréal : conférences, ateliers Qiskit & Quandela, et un hackathon. Aucune expérience quantique requise.",
    en: "Two days of quantum computing in Montréal: talks, hands-on Qiskit & Quandela workshops, and a hackathon. No quantum experience required."
  },
  "hero.cta":      { fr: "Rejoindre le Discord", en: "Join Discord" },
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
  "facts.cost.l":  { fr: "Café et dîners inclus", en: "Coffee and lunches included" },
  "facts.level.v": { fr: "Débutants bienvenus", en: "Beginners welcome" },
  "facts.level.l": { fr: "Aucun prérequis quantique", en: "No quantum background needed" },
  "facts.place.v": { fr: "En personne", en: "In person" },
  "facts.place.l": { fr: "Galerie Rolland · Polytechnique", en: "Rolland Gallery · Polytechnique" },

  /* ---- About (home) ---- */
  "about.eyebrow": { fr: "L'événement", en: "About" },
  "about.title":   { fr: "Une célébration du quantique à Montréal",
                     en: "A global quantum event hosted in Montréal" },
  "about.p1": {
    fr: "Le Qiskit Fall Fest est une série mondiale d'événements en informatique quantique organisés par des communautés étudiantes avec le soutien d'IBM Quantum.",
    en: "Qiskit Fall Fest is a worldwide series of quantum computing events run by student communities with the support of IBM Quantum."
  },
  "about.p2": {
    fr: "Pendant deux jours à Polytechnique Montréal, nous réunissons experts industriels, chercheurs et étudiants pour explorer le futur du calcul quantique, des algorithmes variationnels aux technologies photoniques, avant de vous mettre au défi lors du hackathon Quantum StealthShield.",
    en: "Over two days at Polytechnique Montréal we bring together industry experts, researchers and students to explore quantum computing, from variational algorithms to photonic hardware, culminating in the Quantum StealthShield hackathon challenge."
  },
  "about.outcomes.title": { fr: "Ce que vous gagnerez", en: "What you'll walk away with" },
  "about.o1.t": { fr: "Coder vos premiers circuits quantiques", en: "Write your first quantum circuits" },
  "about.o1.d": { fr: "Deux ateliers guidés en Python : Qiskit (IBM) et MerLin (Quandela).",
                  en: "Two guided workshops in Python: Qiskit (IBM) and MerLin (Quandela)." },
  "about.o2.t": { fr: "Résoudre un vrai défi en équipe", en: "Solve a real challenge as a team" },
  "about.o2.d": { fr: "Un hackathon de 8 heures axé sur la cybersécurité et l'apprentissage automatique quantique.",
                  en: "An 8-hour hackathon focused on cybersecurity and quantum machine learning." },
  "about.o3.t": { fr: "Rencontrer l'écosystème quantique", en: "Meet the quantum ecosystem" },
  "about.o3.d": { fr: "Échangez avec des experts de Polytechnique Montréal, IBM, Quandela, Quantacet, Hydro-Québec, Calcul Québec et de l'AMF.",
                  en: "Connect with experts from Polytechnique Montréal, IBM, Quandela, Quantacet, Hydro-Québec, Calcul Québec and the AMF." },
  "about.o4.t": { fr: "Des prix et une reconnaissance", en: "Prizes and recognition" },
  "about.o4.d": { fr: "Prix pour les meilleures équipes, attestations de participation et autocollants officiels.",
                  en: "Awards for top teams, certificates of participation, and official stickers." },

  /* ---- Program page ---- */
  "prog.eyebrow": { fr: "Programme", en: "Program" },
  "prog.title":   { fr: "Deux jours, de l'introduction à la démonstration",
                    en: "Two days, from introduction to demo" },
  "prog.note":    { fr: "Horaire officiel. Toutes les heures sont en heure de l'Est. Lieu : Galerie Rolland (B-600.16).",
                    en: "Official schedule. All times are Eastern. Location: Rolland Gallery (B-600.16)." },
  "prog.day1":    { fr: "Jour 1 — mercredi 25 novembre", en: "Day 1 — Wednesday 25 November" },
  "prog.day2":    { fr: "Jour 2 — jeudi 26 novembre (Hackathon)", en: "Day 2 — Thursday 26 November" },
  "prog.tbc":     { fr: "à confirmer", en: "to be confirmed" },

  /* ---- Add to calendar ---- */
  "cal.btn":     { fr: "Ajouter à mon calendrier", en: "Add to my calendar" },
  "cal.google":  { fr: "Google Agenda", en: "Google Calendar" },
  "cal.outlook": { fr: "Outlook", en: "Outlook" },
  "cal.ics":     { fr: "Apple Calendrier", en: "Apple Calendar" },
  "cal.aria":    { fr: "Choisir un calendrier", en: "Choose a calendar" },

  /* ---- Hackathon page ---- */
  "hack.eyebrow": { fr: "Le Hackathon", en: "The Hackathon" },
  "hack.title":   { fr: "Quantum StealthShield", en: "Quantum StealthShield" },
  "hack.lede": {
    fr: "Détecter les cyberattaques furtives qui se dissimulent dans le trafic réseau normal grâce au Machine Learning Quantique.",
    en: "Detecting stealth cyberattacks hiding inside normal network traffic, with quantum machine learning."
  },
  "hack.countdown.t": { fr: "Dévoilement des défis dans", en: "Prompts reveal in" },
  "hack.rules.title": { fr: "Modalités", en: "Rules" },
  "hack.r1": { fr: "Équipes de 3 à 4  personnes, formées dès le Jour 1 ou via Discord.", en: "Teams of 3-4, formed on Day 1 or via Discord." },
  "hack.r2": { fr: "8 heures d'épreuve avec mentorat continu sur place.", en: "8 hours of competition with hands-on mentoring on site." },
  "hack.r3": { fr: "Technologies : Python, Qiskit et MerLin.", en: "Frameworks: Python, Qiskit, and MerLin." },
  "hack.r4": { fr: "Présentation finale de 3 minutes devant jury + 2 minutes de questions.", en: "Final 3-minute pitch followed by 2-minute jury Q&A." },
  "hack.judge.title": { fr: "Barème officiel d'évaluation", en: "Official Scoring Breakdown" },
  "hack.j1.t": { fr: "70 pts — Prédictions", en: "70 pts — Predictions" },
  "hack.j1.d": { fr: "Score combiné : 0.6 x Hidden B + 0.4 x Hidden A.", en: "Combined score: 0.6 x Hidden B + 0.4 x Hidden A." },
  "hack.j2.t": { fr: "30 pts — Délibération du Jury", en: "30 pts — Jury Pitch & Q&A" },
  "hack.j2.d": { fr: "Clarté de l'explication, rigueur de l'approche algorithmique et réponse aux questions.", en: "Clarity of presentation, algorithmic rigor, and handling of jury questions." },
  "hack.j3.t": { fr: "+5 pts BONUS — Hardware Quantique Réel", en: "+5 pts BONUS — Real Quantum Hardware" },
  "hack.j3.d": { fr: "Exécution réussie sur processeur IBM Quantum ou Quandela.", en: "Successful execution on real IBM Quantum or Quandela QPU." },
  "hack.j4.t": { fr: "2 solutions par équipe", en: "2 solutions per team" },
  "hack.j4.d": { fr: "Chaque équipe peut soumettre une solution Qiskit et une solution MerLin ; la meilleure note est retenue.", en: "Teams can submit both a Qiskit and a MerLin solution; the higher score is used for ranking." },

  "hack.locked.banner": {
    fr: "Le défi sera révelé le jeudi 26 novembre 2026 à 09 h 00 HNE.",
    en: "The prompt will go live on Thursday, November 26, 2026 at 9:00 AM EST."
  },
  "hack.discord.cta": {
    fr: "Rejoindre le Discord pour trouver une équipe",
    en: "Join Discord to find a team"
  },
  "hack.preview.btn": {
    fr: "Prévisualiser l'énoncé complet",
    en: "Preview the full prompt"
  },
    /* ---- Hackathon page - Prérequis ---- */
  "hack.prep.title": { 
    fr: "À installer avant le Jour 2", 
    en: "Install before Day 2" 
  },

  "hack.prep.d": { 
    fr: "Apportez un ordinateur portable et son chargeur. Nous réservons du temps le Jour 1 pour l'installation, mais venir prêt vous fera gagner du temps.", 
    en: "Bring a laptop and charger. We set aside time on Day 1 for setup, but arriving ready saves you time." 
  },
  "hack.prep.note": { 
    fr: "Un compte IBM Quantum gratuit est requis pour exécuter du code sur du matériel réel.", 
    en: "A free IBM Quantum account is required to run code on real hardware." 
  },

  /* ---- Speakers page ---- */
  "spk.eyebrow": { fr: "Programmation", en: "Line-up" },
  "spk.title":   { fr: "Conférenciers, Panel & Jury", en: "Speakers, Panel & Judges" },
  "spk.lede":    { fr: "Découvrez les experts de l'industrie, universitaires, mentors et membres du jury du Qiskit Fall Fest 2026.",
                   en: "Meet the industry leaders, academics, mentors, and judges of Qiskit Fall Fest 2026." },
  "spk.tba":     { fr: "Annonce à venir", en: "To be announced" },
  "spk.group.talks":   { fr: "Conférences & Ateliers", en: "Keynotes & Workshops" },
  "spk.group.panel":   { fr: "Table Ronde", en: "Panel Discussion" },
  "spk.group.judges":  { fr: "Jury du Hackathon", en: "Hackathon Judges" },
  "spk.group.mentors": { fr: "Mentors du Hackathon", en: "Hackathon Mentors" },
  "spk.linkedin":      { fr: "Voir le profil LinkedIn", en: "View LinkedIn profile" },

  /* ---- Team page ---- */
  "team.eyebrow": { fr: "Qui sommes-nous", en: "Who we are" },
  "team.title":   { fr: "Le comité organisateur", en: "The organizing committee" },
  "team.lede":    { fr: "Un événement organisé par des étudiants et chercheurs de Polytechnique Montréal.",
                    en: "An event built by students and researchers at Polytechnique Montréal." },
  "team.join":    { fr: "Envie de donner un coup de main ? Écrivez-nous :", en: "Want to help out? Get in touch:" },

  /* ---- Venue page ---- */
  "venue.eyebrow": { fr: "Le lieu", en: "The venue" },
  "venue.title":   { fr: "Polytechnique Montréal", en: "Polytechnique Montréal" },
  "venue.lede":    { fr: "Campus de l'Université de Montréal.",
                     en: "Université de Montréal Campus." },
  "venue.getting": { fr: "S'y rendre", en: "Getting there" },
  "venue.metro.t": { fr: "Métro", en: "Metro" },
  "venue.metro.d": { fr: "Station Université-de-Montréal, puis environ 10 minutes de marche.",
                     en: "Université-de-Montréal station, then about a 10-minute walk." },
  "venue.bus.t":   { fr: "Autobus", en: "Bus" },
  "venue.bus.d":   { fr: "Les lignes 51, 119 et 129 desservent le campus.", en: "Routes 51, 119 and 129 serve the campus." },
  "venue.car.t":   { fr: "Voiture", en: "Car" },
  "venue.car.d":   { fr: "Stationnement payant sur le campus. Places limitées en semaine — le métro est privilégié.",
                     en: "Paid parking on campus. Limited weekday availability — public transit is recommended." },
  "venue.access.t":{ fr: "Accessibilité", en: "Accessibility" },
  "venue.access.d":{ fr: "Les pavillons sont accessibles en fauteuil roulant. Signalez tout besoin particulier dans le formulaire d'inscription.",
                     en: "The buildings are wheelchair accessible. Let us know of any specific needs in the registration form." },
  "venue.map":     { fr: "Ouvrir dans Google Maps", en: "Open in Google Maps" },

  /* ---- Homepage partners band ---- */
  "home.partners.more.p":   { fr: "Polytechnique GIGL dep., Quantacet, AÉCSP, IBM Quantum, LINCS Lab, Quandela, PINQ2, Hydro-Québec, Calcul Québec, AMF soutiennent l'événement.",
                              en: "Polytechnique GIGL dep., Quantacet, AÉCSP, IBM Quantum, LINCS Lab, Quandela, PINQ2, Hydro-Québec, Calcul Québec, AMF support this event." },
  "home.partners.more.cta": { fr: "Voir tous nos partenaires", en: "See all our partners" },

  /* ---- Partners page ---- */
  "spon.eyebrow": { fr: "Partenaires", en: "Partners" },
  "spon.title":   { fr: "Rendu possible par", en: "Made possible by" },
  "spon.lede":    { fr: "Le Qiskit Fall Fest est 100 % gratuit pour tous les participants grâce au généreux soutien de nos partenaires.",
                    en: "Qiskit Fall Fest is 100% free for all attendees thanks to our generous partners." },
  "spon.why.t":   { fr: "Pourquoi s'associer à nous", en: "Why partner with us" },
  "spon.why.p":   {
    fr: "Le Qiskit Fall Fest attire l'élite étudiante en informatique, génie et physique quantique de la région de Montréal. Vous rencontrez les talents au moment où ils choisissent leur trajectoire de recherche et de carrière.",
    en: "Qiskit Fall Fest attracts top student talent across computing, engineering and physics in the Montréal area. You meet passionate innovators at the key moment of their career path."
  },
  "spon.how.t": { fr: "Comment nous soutenir", en: "How you can help" },
  "spon.h1": { fr: "Fournir des mentors pour la journée de hackathon.", en: "Provide mentors for the hackathon day." },
  "spon.h2": { fr: "Offrir un prix — matériel, crédits infonuagiques, ou opportunités de stage.", en: "Offer a prize — hardware, cloud credits, or internship opportunities." },
  "spon.h3": { fr: "Commanditer les repas ou le café de l'événement.", en: "Sponsor meals or coffee for the event." },
  "spon.h4": { fr: "Déléguer un conférencier ou un membre du jury.", en: "Send a speaker or a judge." },
  "spon.h5": { fr: "Contribuer financièrement pour maintenir la gratuité.", en: "Contribute financially to keep the event accessible to all." },
  "spon.contact.t": { fr: "Parlons-en", en: "Let's talk" },
  "spon.contact.p": {
    fr: "Écrivez-nous en indiquant le type de partenariat envisagé. Nous vous répondrons rapidement pour construire une collaboration fructueuse.",
    en: "Email us with the kind of support you have in mind. We will reply promptly to shape the partnership with you."
  },
  "spon.email": { fr: "Écrire à l'équipe", en: "Email the team" },

  /* ---- FAQ page ---- */
  "faq.eyebrow": { fr: "Questions", en: "Questions" },
  "faq.title":   { fr: "Foire aux questions", en: "Frequently asked questions" },
  "faq.more":    { fr: "Une autre question ? Écrivez-nous à", en: "Another question? Email us at" },

  /* ---- Final CTA ---- */
  "cta.title": { fr: "Inscriptions complètes !", en: "Registration is now closed!" },
  "cta.lede":  { fr: "Toutes les places sont comblées. Rejoignez notre communauté sur Discord pour suivre les annonces et le hackathon !",
                 en: "We have reached full capacity. Join our Discord community to follow announcements and connect with participants!" },
  "cta.btn":   { fr: "Rejoindre le Discord", en: "Join Discord" },

  /* ---- Footer ---- */
  "foot.tag":     { fr: "Deux jours d'informatique quantique à Polytechnique Montréal, les 25 et 26 novembre 2026.",
                    en: "Two days of quantum computing at Polytechnique Montréal, 25–26 November 2026." },
  "foot.explore": { fr: "Explorer", en: "Explore" },
  "foot.support": { fr: "Avec le soutien de", en: "With the support of" },
  "foot.coc":     { fr: "Code de conduite", en: "Code of conduct" },
  "foot.contact": { fr: "Nous joindre", en: "Contact" },
  "foot.credit":  { fr: "Illustrations officielles du Qiskit Fall Fest 2026, sous licence MIT.",
                    en: "Official Qiskit Fall Fest 2026 artwork, MIT licensed." },
  "foot.disclaim":{ fr: "Événement communautaire organisé par le LINCS Lab de Polytechnique Montréal dans le cadre mondial du Qiskit Fall Fest 2026.",
                    en: "Community event organized by the LINCS Lab at Polytechnique Montréal as part of Qiskit Fall Fest 2026." },
  "coc.back":     { fr: "Retour à l'accueil", en: "Back to home" }
};

/* -------------------------------------------------------------------------
   4. PROGRAM
   ---------------------------------------------------------------------- */
const PROGRAM = {
  day1: [
    { start: "08:00", end: "08:45", type: "welcome",
      t: { fr: "Accueil et café", en: "Registration & coffee" },
      d: { fr: "Inscription sur place, remise des badges et mot de bienvenue.", en: "Check-in, badge pickup and welcome." } },
    { start: "08:45", end: "09:15", type: "ceremony",
      t: { fr: "Cérémonie d'ouverture", en: "Opening ceremony" },
      d: { fr: "Pr Soumaya Cherkaoui (Directrice LINCS)", en: "Prof. Soumaya Cherkaoui (LINCS Director)" } },
    { start: "09:15", end: "09:45", type: "talk",
      t: { fr: "Conférence 1 — IBM Quantique", en: "Talk 1 — IBM Quantum" },
      d: { fr: "Camille Brun-Jolicoeur (IBM Quantum).", en: "Camille Brun-Jolicoeur (IBM Quantum)." } },
    { start: "09:45", end: "10:45", type: "workshop",
      t: { fr: "Atelier 1 — Qiskit pratique", en: "Workshop 1 — Hands-on Qiskit" },
      d: { fr: "Animé par Philippe Karan (Institut Quantique, Université de Sherbrooke). Premiers circuits et algorithmes en Python.", en: "Led by Philippe Karan (Institut Quantique, Université de Sherbrooke). First circuits and quantum algorithms in Python." } },
    { start: "10:45", end: "11:15", type: "talk",
      t: { fr: "Conférence 2 — Quandela", en: "Talk 2 — Quandela" },
      d: { fr: "Ning Ma (Quandela). L'informatique quantique photonique : applications et perspectives industrielles.", en: "Ning Ma (Quandela). Photonic quantum computing: industrial applications and perspectives." } },
    { start: "11:15", end: "12:15", type: "workshop",
      t: { fr: "Atelier 2 — MerLin (Quandela)", en: "Workshop 2 — MerLin (Quandela)" },
      d: { fr: "Animé par Rémi Bonnet (Quandela) [En ligne]. Découverte pratique du framework quantique MerLin.", en: "Led by Rémi Bonnet (Quandela) [Online]. Hands-on discovery of the MerLin quantum framework." } },
    { start: "12:15", end: "13:15", type: "break",
      t: { fr: "Pause dîner", en: "Lunch break" },
      d: { fr: "Dîner fourni et réseautage entre participants, chercheurs et conférenciers.", en: "Provided lunch and networking with participants, researchers, and speakers." } },
    { start: "13:15", end: "13:45", type: "talk",
      t: { fr: "Conférence 3 — Quantacet", en: "Talk 3 — Quantacet" },
      d: { fr: "Martin Laforest (Quantacet). Investissement et écosystème des startups quantiques.", en: "Martin Laforest (Quantacet). Venture capital and the quantum startup ecosystem." } },
    { start: "13:45", end: "14:15", type: "talk",
      t: { fr: "Ma recherche quantique en 3 minutes", en: "My quantum research in 3 minutes" },
      d: { fr: "Étudiants des cycles supérieurs et chercheurs présentent leurs travaux innovants, chronomètre en main.",
           en: "Graduate students and researchers pitch their innovative research against the clock." } },
    { start: "14:15", end: "15:30", type: "panel",
      t: { fr: "Table ronde d'experts", en: "Expert Panel Discussion" },
      d: { fr: "Modérée avec Pr Soumaya Cherkaoui, Maxim Tremblay (Hydro-Québec), Juliette Geoffrion (Calcul Québec) et Pr Gabriela Nicolescu (Directrice GIGL, Polytechnique Montréal).",
           en: "Moderated panel with Prof. Soumaya Cherkaoui, Maxim Tremblay (Hydro-Québec), Juliette Geoffrion (Calcul Québec), and Prof. Gabriela Nicolescu (GIGL Director, Polytechnique Montréal)." } },
    { start: "15:30", end: "16:30", type: "networking",
      t: { fr: "Formation des équipes et réseautage", en: "Team formation & networking" },
      d: { fr: "Trouvez vos coéquipiers pour le hackathon sur le serveur Discord.", en: "Find your teammates for tomorrow's hackathon on Discord." } }
  ],
  day2: [
    { start: "08:00", end: "08:45", type: "welcome",
      t: { fr: "Accueil et café", en: "Registration & coffee" },
      d: { fr: "Café d'accueil, installation.", en: "Morning coffee, team seating and setup." } },
    { start: "08:45", end: "09:15", type: "ceremony",
      t: { fr: "Dévoilement du défi: Quantum StealthShield", en: "Prompt reveal: Quantum StealthShield" },
      d: { fr: "Publication de l'énoncé, distribution des jeux de données, explication du barème.",
           en: "Challenge prompt release, distribution of datasets, scoring briefing." } },
    { start: "09:15", end: "11:45", type: "hackathon",
      t: { fr: "Hackathon — Première manche", en: "Hackathon — First stretch" },
      d: { fr: "Exploration des données et modélisation QML avec des mentors sur place", en: "Data exploration and QML modeling with on-floor mentors." } },
    { start: "11:45", end: "12:45", type: "break",
      t: { fr: "Pause dîner", en: "Lunch break" },
      d: { fr: "Dîner fourni sur place. Les mentors restent disponibles pour répondre aux questions.", en: "Lunch provided on-site. Mentors remain available for guidance." } },
    { start: "12:45", end: "15:45", type: "hackathon",
      t: { fr: "Hackathon — Dernière ligne droite", en: "Hackathon — Final stretch" },
      d: { fr: "Génération des fichiers de prédiction, exécutions hardware quantique et préparation des diapositives.", en: "Generating predictions, executing real hardware runs, and slide prep." } },
    { start: "15:45", end: "17:15", type: "judging",
      t: { fr: "Présentations orales et délibération du jury", en: "Pitching & jury deliberation" },
      d: { fr: "Présentations de 3 min + 2 min de questions devant le jury : Pr Soumaya Cherkaoui, Emmanuel Hamel (AMF), Dr Deemah Tashman (LINCS).",
           en: "3-minute pitches + 2 min Q&A before judges: Prof. Soumaya Cherkaoui, Emmanuel Hamel (AMF), Dr. Deemah Tashman (LINCS)." } },
    { start: "17:15", end: "17:45", type: "ceremony",
      t: { fr: "Cérémonie de clôture et remise des prix", en: "Closing ceremony & awards" },
      d: { fr: "Annonce des équipes gagnantes, remise des prix officiels et attestations.", en: "Announcement of winning teams, award presentations and certificates." } }
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
   5. SPEAKERS, PANEL, MENTORS & JUDGES
   ---------------------------------------------------------------------- */
const SPEAKER_GROUPS = [
  { id: "talks",   title: { fr: "Conférenciers", en: "Speakers" } },
  { id: "panel",   title: { fr: "Table ronde", en: "Panel Discussion" } },
  { id: "judges",  title: { fr: "Jury du hackathon", en: "Hackathon Judges" } },
  { id: "mentors", title: { fr: "Mentors du hackathon", en: "Hackathon Mentors" } }
];

const SPEAKERS = [
  // --- Conférenciers & Formateurs (Talks & Workshops) ---
  {
    name: "Camille Brun-Jolicoeur",
    group: "talks",
    photo: "assets/img/speakers/camille-jolicoeur.jpg",
    role: { fr: "Conférence 1 — Responsable des partenariats stratégiques quantiques, IBM Quantum", en: "Talk 1 — Quantum Partnership Delivery Lead, IBM Quantum" },
    link: "https://www.linkedin.com/in/camille-brun/"
  },
  {
    name: "Ning Ma",
    group: "talks",
    photo: "assets/img/speakers/ning-ma.png",
    role: { fr: "Conférence 2 — PhD Candidate, Quandela", en: "Talk 2 — PhD Candidate, Quandela" },
    link: "https://www.linkedin.com/in/ning-ma-1a2003b2/"
  },
  {
    name: "Martin Laforest",
    group: "talks",
    photo: "assets/img/speakers/martin-laforest.jpg",
    role: { fr: "Conférence 3 — Associé directeur, Quantacet", en: "Talk 3 — Managing Partner, Quantacet" },
    link: "https://www.linkedin.com/in/martin-laforest-phd/"
  },
  {
    name: "Philippe Karan",
    group: "talks",
    photo: "assets/img/speakers/philippe-karan.jpg",
    role: { fr: "Atelier 1 — Développeur quantique, Institut Quantique", en: "Workshop 1 — Quantum computing developer, Institut Quantique" },
    link: "https://www.linkedin.com/in/philippe-karan/"
  },
  {
    name: "Rémi Bonnet",
    group: "talks",
    photo: "assets/img/speakers/remi-bonnet.jpg",
    role: { fr: "Atelier 2 — Spécialiste en développement de partenariat, Quandela [En ligne]", en: "Workshop 2 —  Partner Development Specialist, Quandela [Online]" },
    link: "https://www.linkedin.com/in/remidbonnet/"
  },

  // --- Table ronde (Panel) ---
  {
    name: "Pr Soumaya Cherkaoui",
    group: "panel",
    photo: "assets/img/speakers/soumaya-cherkaoui.jpg",
    role: { fr: "Panéliste — Directrice du LINCS Lab, Polytechnique Montréal", en: "Panelist — Director of LINCS Lab, Polytechnique Montréal" },
    link: "https://www.linkedin.com/in/soumaya-cherkaoui-b0522821/"
  },
  {
    name: "Maxim Tremblay",
    group: "panel",
    photo: "", // No photo: displays circular avatar with human icon
    role: { fr: "Panéliste — Hydro-Québec", en: "Panelist — Hydro-Québec" },
    link: "https://www.hydroquebec.com/"
  },
  {
    name: "Juliette Geoffrion",
    group: "panel",
    photo: "assets/img/speakers/Stagiaire2018_Geoffrion_Juliette_Photo-profil-300x450-1.webp",
    role: { fr: "Panéliste — Calcul Québec", en: "Panelist — Calcul Québec" },
    link: "https://www.linkedin.com/in/juliette-geoffrion/"
  },
  {
    name: "Pr Gabriela Nicolescu",
    group: "panel",
    photo: "assets/img/speakers/gabriela-nicolescu.jpg",
    role: { fr: "Panéliste — Directrice du GIGL, Polytechnique Montréal", en: "Panelist — Director of GIGL, Polytechnique Montréal" },
    link: "https://www.linkedin.com/in/gabriela-nicolescu-154a41/"
  },

  // --- Jury du hackathon ---
  {
    name: "Pr Soumaya Cherkaoui",
    group: "judges",
    photo: "assets/img/speakers/soumaya-cherkaoui.jpg",
    role: { fr: "Juge — Directrice LINCS Lab, Polytechnique Montréal", en: "Judge — Director LINCS Lab, Polytechnique Montréal" },
    link: "https://www.linkedin.com/in/soumaya-cherkaoui-0b55502/"
  },
  {
    name: "Emmanuel Hamel",
    group: "judges",
    photo: "assets/img/speakers/emmanuel-hamel.jpg",
    role: { fr: "Juge — Autorité des marchés financiers", en: "Judge — Autorité des marchés financiers" },
    link: "https://www.linkedin.com/in/emmanuel-hamel-b8989926/"
  },
  {
    name: "Dr Deemah Tashman",
    group: "judges",
    photo: "assets/img/speakers/deemah-tashman.jpg",
    role: { fr: "Juge — Chercheuse postdoctorale", en: "Judge — Postdoctoral Researcher" },
    link: "https://www.linkedin.com/in/deematashman/"
  },

  // --- Mentors du hackathon ---
  {
    name: "Wissal Hamhoum",
    group: "mentors",
    photo: "assets/img/organizers/wissal.jpg",
    role: { fr: "Mentor — Chercheuse au LINCS Lab", en: "Mentor — Researcher at LINCS Lab" },
    link: "https://www.linkedin.com/in/wissal-hamhoum-3b7aa7197/"
  },
  {
    name: "Patatchona Keyela",
    group: "mentors",
    photo: "assets/img/organizers/keyela.jpg",
    role: { fr: "Mentor — Chercheur au LINCS Lab", en: "Mentor — Researcher at LINCS Lab" },
    link: "https://www.linkedin.com/in/pkeyela/"
  },
  {
    name: "Samar Abdelghani",
    group: "mentors",
    photo: "assets/img/organizers/samar.jpg",
    role: { fr: "Mentor — Chercheuse au LINCS Lab", en: "Mentor — Researcher at LINCS Lab" },
    link: "https://www.linkedin.com/in/samar-abdelghani-1954a0133/"
  },
  {
    name: "Melek Krichen",
    group: "mentors",
    photo: "assets/img/organizers/melek.jpg",
    role: { fr: "Mentor — Chercheur au LINCS Lab", en: "Mentor — Researcher at LINCS Lab" },
    link: "https://www.linkedin.com/in/melek-krichen-8856521b9/"
  },
  {
    name: "Kim Renaud",
    group: "mentors",
    photo: "assets/img/speakers/kim-renauld.jpg",
    role: { fr: "Mentor (à confirmer)", en: "Mentor (to be confirmed)" },
    link: "https://www.linkedin.com/in/kim-renaud-985096135/"
  }
];

/* -------------------------------------------------------------------------
   6. ORGANIZING TEAM
   ---------------------------------------------------------------------- */
const TEAM = [
  { name: "Wissal Hamhoum", photo: "assets/img/organizers/wissal.jpg", role: { fr: "Chef d'équipe", en: "Lead Organizer" }, link: "https://www.linkedin.com/in/wissal-hamhoum-3b7aa7197/" },
  { name: "Melek Krichen", photo: "assets/img/organizers/melek.jpg", role: { fr: "Co-Organisateur", en: "Co-Organizer" }, link: "https://www.linkedin.com/in/melek-krichen-8856521b9/" },
  { name: "Patatchona Keyela", photo: "assets/img/organizers/keyela.jpg", role: { fr: "Co-Organisateur", en: "Co-Organizer" }, link: "https://www.linkedin.com/in/pkeyela/" },
  { name: "Samar Abdelghani", photo: "assets/img/organizers/samar.jpg", role: { fr: "Co-Organisatrice", en: "Co-Organizer" }, link: "https://www.linkedin.com/in/samar-abdelghani-1954a0133/" }
];

/* Shown when a person has no name yet. */
const PERSON_PLACEHOLDER = { fr: "Annonce à venir", en: "To be announced" };
const PERSON_FALLBACK_IMG = "assets/img/speaker.png";

/* -------------------------------------------------------------------------
   7. PARTNERS
   ---------------------------------------------------------------------- */
const PARTNER_GROUPS = [
  { id: "supporters", size: "lg", title: { fr: "Partenaires officiels",                en: "Official Partners" } },
  { id: "mbp",                    title: { fr: "Avec le soutien de",                   en: "With Support From" } },
  { id: "tech",                   title: { fr: "Partenaire technologique et scientifique", en: "Technology & Knowledge Partner" } },
  { id: "program",                title: { fr: "Contributeurs au programme",            en: "Program Contributors" } }
];

const SPONSORS = [
  // Partenaires officiels (supporters)
  { name: "AÉCSP", group: "supporters", logo: "assets/img/partners/Event_Suporters/aecso.png", url: "https://aecsp.qc.ca/" },
  { name: "Quantacet", group: "supporters", logo: "assets/img/partners/Event_Suporters/Quantacet-logo-vertical.png", url: "https://quantacet.com/" },
  { name: "GIGL (Département Génie Informatique Génie Logiciel Polytechnique Montréal)", group: "supporters", logo: "assets/img/partners/Event_Suporters/gigl-polymtl.svg", url: "https://www.polymtl.ca/gigl/" },

  // Avec le soutien de (mbp)
  { name: "IBM Quantum", group: "mbp", logo: "assets/img/IBM_Quantum_logotype_pos_RGB.png", url: "https://www.ibm.com/quantum" },
  { name: "LINCS Lab", group: "mbp", logo: "assets/img/partners/MPb/lincs_lab.png", url: "https://lincslab.ca/" },

  // Partenaire technologique et scientifique (tech)
  { name: "Quandela", group: "tech", logo: "assets/img/partners/Technology%20%26%20Knowledge%20Partner/Quandela.webp", url: "https://www.quandela.com" },
  { name: "PINQ2", group: "tech", logo: "assets/img/partners/Technology%20%26%20Knowledge%20Partner/pinq2-750x417.png", url: "https://pinq2.com/" },

  // Contributeurs au programme (program)
  { name: "Hydro-Québec", group: "program", logo: "assets/img/partners/Program%20Contributors/Hydro-Québec_logo.svg", url: "https://www.hydroquebec.com" },
  { name: "Calcul Québec", group: "program", logo: "assets/img/partners/Program%20Contributors/CalculQuebec_logo_medium.jpg", url: "https://www.calculquebec.ca" },
  { name: "Autorité des marchés financiers", group: "program", logo: "assets/img/partners/Program%20Contributors/AMF.webp", url: "https://lautorite.qc.ca" }
];

/* -------------------------------------------------------------------------
   8. HACKATHON CHALLENGE — QUANTUM STEALTHSHIELD
   ---------------------------------------------------------------------- */
const HACKATHON_CHALLENGE = {
  title: "Quantum StealthShield",
  subtitle: {
    fr: "Détecter les cyberattaques furtives dans le trafic réseau normal",
    en: "Detecting attacks that hide inside normal network traffic"
  },
  duration: "8 heures / 8 hours",
  mission: {
    fr: "Construire un classifieur quantique ou hybride capable de :\n(1) détecter les attaques furtives,\n(2) déclencher un minimum de fausses alertes sur le trafic bénin, et \n(3) maintenir ses performances face aux dérives de distribution et variations du réseau.",
    en: "Build a quantum or hybrid classifier that:\n(1) catches stealth attacks, \n(2) raises few false alarms on legitimate traffic, and \n(3) keeps working when the network changes."
  },
  dataset: {
    featuresCount: 16,
    featuresList: [
      "duration_s", "packet_count", "mean_packet_bytes", "std_packet_bytes",
      "mean_interarrival_ms", "cv_interarrival", "out_in_byte_ratio", "connections_per_min",
      "unique_destinations", "port_diversity", "failure_ratio", "burstiness",
      "packet_size_entropy", "periodicity", "historical_deviation", "temporal_correlation"
    ],
    labels: [
      { id: 0, text: { fr: "0 = Trafic bénin", en: "0 = Benign traffic" } },
      { id: 1, text: { fr: "1 = Attaque bruyante", en: "1 = Loud attack" } },
      { id: 2, text: { fr: "2 = Attaque furtive", en: "2 = Stealth attack" } }
    ],
    files: [
      { file: "train.csv", rows: "8 000", labels: { fr: "Oui", en: "Yes" }, role: { fr: "Entraîner votre modèle", en: "Learn your model" } },
      { file: "validation.csv", rows: "1 000", labels: { fr: "Oui", en: "Yes" }, role: { fr: "Ajuster et valider sur de nouveaux environnements", en: "Tune and check, on new environments" } },
      { file: "test_hidden_a.csv", rows: "1 000", labels: { fr: "Non", en: "No" }, role: { fr: "Évalué comme Caché A : nouveaux environnements", en: "Scored as Hidden A: new environments" } },
      { file: "test_hidden_b.csv", rows: "1 000", labels: { fr: "Non", en: "No" }, role: { fr: "Évalué comme Caché B : conditions sévères, dérive de distribution", en: "Scored as Hidden B: harsher conditions, distribution shift" } }
    ]
  },
  scoring: {
    predictionsPts: 70,
    formula: "Score Final = 0.6 × Hidden_B + 0.4 × Hidden_A",
    breakdown: [
      { pts: 25, title: { fr: "Classification globale", en: "Overall classification" }, desc: { fr: "Macro-F1 sur les classes bénigne, bruyante et furtive", en: "Macro-F1 over benign, loud and stealth" } },
      { pts: 10, title: { fr: "F1 Furtif", en: "Stealth F1" }, desc: { fr: "Score F1 spécifique de la classe furtive", en: "F1 score of the stealth class" } },
      { pts: 10, title: { fr: "Précision Furtif", en: "Stealth Precision" }, desc: { fr: "Sessions prédites comme furtives qui le sont réellement", en: "Sessions predicted as stealth that really are stealth" } },
      { pts: 15, title: { fr: "Détection sans omission", en: "Catches stealth" }, desc: { fr: "Furtifs non manqués × bénins non marqués comme attaque", en: "Stealth not missed × benign not flagged as attack" } },
      { pts: 10, title: { fr: "Dénomination exacte", en: "Names stealth" }, desc: { fr: "Furtifs étiquetés 2 × bénins non étiquetés 2", en: "Stealth labelled 2 × benign not labelled 2" } }
    ],
    juryPts: 30,
    hardwareBonusPts: 5,
    maxSolutions: 2 // 1 Qiskit, 1 MerLin
  },
  handIn: {
    files: ["submission_hidden_a.csv", "submission_hidden_b.csv"],
    format: "sample_id,predicted_label",
    pitch: "3 minutes de présentation + 2 minutes de questions du jury",
    teamFolder: "Dossier zippé au nom de votre équipe"
  },
  links: {
    datasetDownload: "Quantum StealthShield.pdf", // Link to documentation/dataset package
    submissionForm: "https://forms.cloud.microsoft/",
    discord: "https://discord.gg/V7nZqX6D"
  }
};

/* -------------------------------------------------------------------------
   9. FAQ
   ---------------------------------------------------------------------- */
const FAQ = [
  {
    q: { fr: "Dois-je connaître l'informatique quantique ?", en: "Do I need to know quantum computing?" },
    a: { fr: "Non. Le jour 1 est bâti pour des débutants complets : deux conférences d'introduction et deux ateliers guidés (Qiskit et MerLin). Si vous savez lire un peu de Python, vous avez tout ce qu'il faut.",
         en: "No. Day 1 is built for complete beginners: introductory talks and hands-on workshops (Qiskit and MerLin). If you can read a little Python, you have everything you need." }
  },
  {
    q: { fr: "Faut-il participer aux deux jours ?", en: "Do I have to attend both days?" },
    a: { fr: "Le jour 1 se tient seul si vous voulez seulement les conférences et les ateliers. Par contre, le hackathon du jour 2 suppose les compétences du jour 1 et la formation des équipes — venez aux deux si vous voulez concourir.",
         en: "Day 1 stands on its own if you only want the talks and workshops. The Day 2 hackathon, however, assumes the Day 1 material and team formation — come to both if you want to compete." }
  },
  {
    q: { fr: "Comment former une équipe pour le hackathon ?", en: "How do I form a hackathon team?" },
    a: { fr: "Les équipes sont composées de 3 à 5 personnes. Vous pouvez venir avec vos coéquipiers, ou trouver une équipe facilement soit sur notre serveur Discord (salon #cherche-équipe), soit lors de la session de formation d'équipes du mercredi après-midi.",
         en: "Teams consist of 3 to 5 people. You can join with friends, or find teammates easily either on our Discord server (#cherche-équipe channel) or during Wednesday afternoon's networking session." }
  },
  {
    q: { fr: "Qui peut s'inscrire ?", en: "Who can register?" },
    a: { fr: "L'événement est ouvert aux étudiants universitaires, collégiaux et aux passionnés de technologies de la région de Montréal. L'événement se tenant en personne, vous devez pouvoir vous rendre sur le campus de Polytechnique Montréal les 25 et 26 novembre.",
         en: "The event is open to university and college students and tech enthusiasts in the Montréal area. Because this is an in-person event, you must be able to attend on campus at Polytechnique Montréal on 25–26 November." }
  },
  {
    q: { fr: "Combien ça coûte ?", en: "How much does it cost?" },
    a: { fr: "C'est 100 % gratuit ! L'inscription, le café, les collations et les dîners sont offerts grâce au généreux soutien de nos partenaires.",
         en: "It is 100% free! Registration, coffee, snacks and lunches are covered thanks to our generous partners." }
  },
  {
    q: { fr: "Qu'est-ce que j'apporte ?", en: "What should I bring?" },
    a: { fr: "Un ordinateur portable et son chargeur. Nous vous recommandons d'installer Python (>=3.9) et de créer un compte IBM Quantum gratuit avant le hackathon.",
         en: "A laptop and charger. We recommend installing Python (>=3.9) and creating a free IBM Quantum account prior to the hackathon." }
  },
  {
    q: { fr: "L'événement se déroule-t-il en français ou en anglais ?", en: "Is the event in French or English?" },
    a: { fr: "Les deux. L'accueil, la logistique et l'animation se font en français et en anglais ; certaines conférences invitées ou interventions seront données en anglais.",
         en: "Both. Welcoming, logistics and support are in both French and English; some invited talks and workshops may be delivered in English." }
  },
  {
    q: { fr: "Y a-t-il des prix ?", en: "Are there prizes?" },
    a: { fr: "Oui ! Des prix d'excellence récompenseront les meilleures équipes du hackathon. De plus, chaque participant recevra une attestation officielle et les autocollants officiels du Qiskit Fall Fest 2026.",
         en: "Yes! Top teams in the hackathon will be awarded prizes. Every participant also receives an official certificate and exclusive Qiskit Fall Fest 2026 stickers." }
  }
];

window.SPEAKER_GROUPS = SPEAKER_GROUPS;
window.HACKATHON_CHALLENGE = HACKATHON_CHALLENGE;
