import type { Profession, Feature, PricingPlan, SetupStep, BenefitItem, DemoChat } from "@/types";

export const PROFESSIONS: Profession[] = [
  {
    id: "rechtsanwalt",
    label: "Rechtsanwalt",
    emoji: "⚖️",
    description: "Mandantenanfragen beantworten, Fristen verwalten, Schriftsätze vorbereiten",
    skills: ["Mandatsverwaltung", "Fristenmanagement", "Rechtsrecherche"],
  },
  {
    id: "steuerberater",
    label: "Steuerberater",
    emoji: "📊",
    description: "Steuererklärungen vorbereiten, Mandantenkommunikation, Buchhaltung",
    skills: ["Steuererklärung", "Buchhaltung", "Mandantenbetreuung"],
  },
  {
    id: "arzt",
    label: "Arzt / Ärztin",
    emoji: "🩺",
    description: "Patientenanfragen, Terminverwaltung, Dokumentation",
    skills: ["Patientenverwaltung", "Terminplanung", "Dokumentation"],
  },
  {
    id: "makler",
    label: "Immobilienmakler",
    emoji: "🏠",
    description: "Exposés erstellen, Besichtigungen planen, Kundenbetreuung",
    skills: ["Exposé-Erstellung", "Terminkoordination", "Kundenpflege"],
  },
  {
    id: "handwerker",
    label: "Handwerksbetrieb",
    emoji: "🔧",
    description: "Auftragsanfragen bearbeiten, Kostenvoranschläge, Terminplanung",
    skills: ["Auftragsverwaltung", "Angebotserstellung", "Einsatzplanung"],
  },
  {
    id: "gastronom",
    label: "Gastronom",
    emoji: "🍽️",
    description: "Reservierungen, Speisekarten, Lieferantenbestellungen",
    skills: ["Reservierungen", "Menüplanung", "Bestellmanagement"],
  },
  {
    id: "coach",
    label: "Coach / Berater",
    emoji: "💡",
    description: "Terminbuchung, Kundenanfragen, Kursplanung",
    skills: ["Terminbuchung", "Kundenkommunikation", "Kursplanung"],
  },
  {
    id: "versicherung",
    label: "Versicherungsmakler",
    emoji: "🛡️",
    description: "Angebotsvergleiche, Schadensmeldungen, Kundenberatung",
    skills: ["Angebotsvergleich", "Schadensbearbeitung", "Beratung"],
  },
  {
    id: "agentur",
    label: "Kreativagentur",
    emoji: "🎨",
    description: "Projektmanagement, Kundenbriefings, Social Media Planung",
    skills: ["Projektmanagement", "Content-Planung", "Kundenbriefings"],
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Kommunikation",
    description: "E-Mails beantworten, Nachrichten verfassen, Follow-ups automatisieren",
    icon: "💬",
  },
  {
    title: "Kalender",
    description: "Termine planen, Erinnerungen senden, Verfügbarkeiten prüfen",
    icon: "📅",
  },
  {
    title: "Dokumentation",
    description: "Protokolle erstellen, Berichte generieren, Vorlagen nutzen",
    icon: "📄",
  },
  {
    title: "Kundenverwaltung",
    description: "Kontakte pflegen, Kundenhistorie einsehen, Notizen hinzufügen",
    icon: "👥",
  },
  {
    title: "Aufgabenmanagement",
    description: "To-dos erstellen, Prioritäten setzen, Fortschritt tracken",
    icon: "✅",
  },
  {
    title: "Rechnungswesen",
    description: "Rechnungen erstellen, Zahlungserinnerungen, Ausgaben erfassen",
    icon: "💰",
  },
  {
    title: "Recherche",
    description: "Brancheninfos finden, Wettbewerber analysieren, Trends erkennen",
    icon: "🔍",
  },
  {
    title: "Social Media",
    description: "Beiträge planen, Texte erstellen, Engagement analysieren",
    icon: "📱",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: 49,
    period: "/ Monat",
    description: "Perfekt für Einzelunternehmer und kleine Büros",
    features: [
      "1 KI-Assistent",
      "500 Nachrichten / Monat",
      "E-Mail-Integration",
      "Kalender-Sync",
      "Standard Support",
    ],
    popular: false,
    slug: "starter",
  },
  {
    name: "Professional",
    price: 99,
    period: "/ Monat",
    description: "Für wachsende Teams und anspruchsvolle Kanzleien",
    features: [
      "3 KI-Assistenten",
      "Unbegrenzte Nachrichten",
      "Alle Integrationen",
      "Kundenverwaltung (CRM)",
      "Prioritäts-Support",
      "Eigene Vorlagen",
      "Analytics Dashboard",
    ],
    popular: true,
    slug: "popular",
  },
];

export const SETUP_STEPS: SetupStep[] = [
  {
    number: 1,
    title: "Beruf wählen",
    description: "Wählen Sie Ihren Beruf aus und Clawsistent passt sich automatisch an Ihre branchenspezifischen Anforderungen an.",
  },
  {
    number: 2,
    title: "Wissen bereitstellen",
    description: "Laden Sie Ihre Dokumente, FAQs und Vorlagen hoch. Clawsistent lernt Ihr Unternehmen kennen.",
  },
  {
    number: 3,
    title: "Integrationen verbinden",
    description: "Verbinden Sie Ihre E-Mail, Ihren Kalender und andere Tools, die Sie täglich nutzen.",
  },
  {
    number: 4,
    title: "Assistenten trainieren",
    description: "Passen Sie den Tonfall, die Antworten und die Workflows an Ihre Bedürfnisse an.",
  },
  {
    number: 5,
    title: "Live schalten",
    description: "Ihr KI-Assistent ist bereit. Beginnen Sie, Zeit zu sparen und Kunden besser zu betreuen.",
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    icon: "⚡",
    title: "10x schneller",
    description: "Antworten Sie auf Kundenanfragen in Sekunden statt Stunden",
  },
  {
    icon: "🧠",
    title: "Branchenwissen",
    description: "Trainiert auf Ihre Fachbegriffe, Prozesse und Vorlagen",
  },
  {
    icon: "🔒",
    title: "DSGVO-konform",
    description: "Ihre Daten bleiben in Europa. 100% datenschutzkonform",
  },
];

export const DEMO_CHATS: DemoChat[] = [
  {
    professionId: "rechtsanwalt",
    messages: [
      { role: "user", content: "Hat Herr Müller morgen einen Termin?" },
      { role: "assistant", content: "Herr Müller hat morgen um 14:00 Uhr einen Beratungstermin zum Thema Mietrecht. Soll ich ihm eine Erinnerung senden?" },
      { role: "user", content: "Ja, bitte mit Hinweis auf die mitzubringenden Unterlagen." },
      { role: "assistant", content: "Erledigt! Ich habe Herrn Müller eine Erinnerung mit der Dokumentenliste gesendet. ✅" },
    ],
  },
  {
    professionId: "steuerberater",
    messages: [
      { role: "user", content: "Wie viele Steuererklärungen sind diese Woche fällig?" },
      { role: "assistant", content: "Diese Woche sind 12 Steuererklärungen fällig. 8 sind bereits fertig, 4 warten noch auf Unterlagen der Mandanten." },
      { role: "user", content: "Schicke den 4 Mandanten eine freundliche Erinnerung." },
      { role: "assistant", content: "Ich habe personalisierte Erinnerungen an alle 4 Mandanten versendet mit der Liste der fehlenden Dokumente. ✅" },
    ],
  },
  {
    professionId: "arzt",
    messages: [
      { role: "user", content: "Welche Patienten haben heute noch Termine?" },
      { role: "assistant", content: "Heute stehen noch 5 Termine an: 14:00 Frau Schmidt (Nachkontrolle), 14:30 Herr Weber (Erstberatung), 15:00 Frau Klein (Blutbild), 15:30 Herr Lang (Impfung), 16:00 Frau Bach (Rezept)." },
    ],
  },
  {
    professionId: "makler",
    messages: [
      { role: "user", content: "Erstelle ein Exposé für die 3-Zimmer-Wohnung in der Hauptstraße 15." },
      { role: "assistant", content: "Ich erstelle das Exposé mit den hinterlegten Daten: 3 Zimmer, 78m², Baujahr 2005, Balkon, Tiefgarage. Kaltmiete €950. Soll ich es als PDF generieren und an die Interessentenliste senden?" },
    ],
  },
];

export const COMPANY_LOGOS = [
  "Raiffeisen",
  "Wirtschaftskammer",
  "Erste Bank",
  "Siemens Austria",
  "A1 Telekom",
  "Verbund AG",
  "OMV",
  "BAWAG",
  "Porr AG",
  "Strabag",
  "voestalpine",
  "Red Bull",
];

export const PROFESSION_OPTIONS = PROFESSIONS.map((p) => ({
  value: p.id,
  label: p.label,
}));
