import type { Profession, Feature, PricingPlan, SetupStep, BenefitItem, DemoChat } from "@/types";

export const PROFESSIONS: Profession[] = [
  {
    id: "sales",
    label: "Sales",
    emoji: "💰",
    description: "Leads qualifizieren, Pipeline verwalten, Abschlüsse nachverfolgen",
    skills: ["Lead-Qualifizierung", "Pipeline-Management", "Follow-ups"],
    integrations: ["HubSpot", "Salesforce", "Pipedrive", "Dealfront"],
  },
  {
    id: "makler",
    label: "Immobilienmakler",
    emoji: "🏠",
    description: "Exposés erstellen, Besichtigungen planen, Kundenbetreuung",
    skills: ["Exposé-Erstellung", "Terminkoordination", "Kundenpflege"],
    integrations: ["onOffice", "FLOWFACT", "Propstack", "ImmoScout24"],
  },
  {
    id: "agentur",
    label: "Kreativagentur",
    emoji: "🎨",
    description: "Projektmanagement, Kundenbriefings, Social Media Planung",
    skills: ["Projektmanagement", "Content-Planung", "Kundenbriefings"],
    integrations: ["Adobe CC", "Figma", "Asana", "awork"],
  },
  {
    id: "gastronom",
    label: "Gastronom",
    emoji: "🍽️",
    description: "Reservierungen, Speisekarten, Lieferantenbestellungen",
    skills: ["Reservierungen", "Menüplanung", "Bestellmanagement"],
    integrations: ["orderbird", "ready2order", "Lightspeed", "gastronovi"],
  },
  {
    id: "handwerker",
    label: "Handwerksbetrieb",
    emoji: "🔧",
    description: "Auftragsanfragen bearbeiten, Kostenvoranschläge, Terminplanung",
    skills: ["Auftragsverwaltung", "Angebotserstellung", "Einsatzplanung"],
    integrations: ["HERO", "openHandwerk", "Craftnote", "STREIT"],
  },
  {
    id: "versicherung",
    label: "Versicherungsmakler",
    emoji: "🛡️",
    description: "Angebotsvergleiche, Schadensmeldungen, Kundenberatung",
    skills: ["Angebotsvergleich", "Schadensbearbeitung", "Beratung"],
    integrations: ["VERA", "aB-Agenta", "Insurgo", "ProClient"],
  },
  {
    id: "steuerberater",
    label: "Steuerberater",
    emoji: "📊",
    description: "Steuererklärungen vorbereiten, Mandantenkommunikation, Buchhaltung",
    skills: ["Steuererklärung", "Buchhaltung", "Mandantenbetreuung"],
    integrations: ["BMD", "DATEV", "RZL", "Lexware"],
  },
  {
    id: "arzt",
    label: "Arzt / Ärztin",
    emoji: "🩺",
    description: "Patientenanfragen, Terminverwaltung, Dokumentation",
    skills: ["Patientenverwaltung", "Terminplanung", "Dokumentation"],
    integrations: ["INNOMED", "Latido", "tomedo", "Medistar"],
  },
  {
    id: "rechtsanwalt",
    label: "Rechtsanwalt",
    emoji: "⚖️",
    description: "Mandantenanfragen beantworten, Fristen verwalten, Schriftsätze vorbereiten",
    skills: ["Mandatsverwaltung", "Fristenmanagement", "Rechtsrecherche"],
    integrations: ["RA-MICRO", "ACTAPORT", "Advokat", "timeSensor LEGAL"],
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
    title: "Integrationen",
    description: "Verbindet sich mit Ihrem CRM, ERP und den Tools, die Sie bereits nutzen",
    icon: "🔗",
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
    description: "Für wachsende Teams mit höheren Ansprüchen",
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
    description: "Wählen Sie Ihren Beruf aus und Clawsistent passt sich automatisch an Ihre Branche an.",
  },
  {
    number: 2,
    title: "Tools verbinden",
    description: "Verbinden Sie Ihre E-Mail, Ihren Kalender und Ihre bestehenden Tools mit wenigen Klicks.",
  },
  {
    number: 3,
    title: "Los geht's",
    description: "Ihr KI-Assistent ist sofort einsatzbereit. Keine Einrichtung, kein Training nötig.",
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
      { role: "user", content: "Wann läuft die Berufungsfrist im Fall Schneider ab?" },
      { role: "assistant", content: "Die Berufungsfrist im Fall Schneider (Az. 12 O 345/25) läuft am Freitag, 28.02. ab. Das Urteil wurde am 31.01. zugestellt. Soll ich den Schriftsatz-Entwurf zur Prüfung vorbereiten?" },
      { role: "user", content: "Ja, und schick Frau Schneider ein Update zum Verfahrensstand." },
      { role: "assistant", content: "Erledigt! Berufungsschriftsatz-Entwurf liegt in Ihrer Akte bereit. Frau Schneider hat eine E-Mail mit dem aktuellen Verfahrensstand und den nächsten Schritten erhalten. ✅" },
    ],
  },
  {
    professionId: "steuerberater",
    messages: [
      { role: "user", content: "Welche Mandanten haben ihre Belege für die UStVA Februar noch nicht eingereicht?" },
      { role: "assistant", content: "4 Mandanten haben noch offene Belege: Müller GmbH (Eingangsrechnungen), Weber KG (Reisekosten), Praxis Dr. Horn (Kassenbuch), Schmidt Consulting (Bankbelege). Frist ist der 10.03." },
      { role: "user", content: "Schicke allen eine Erinnerung mit den fehlenden Unterlagen." },
      { role: "assistant", content: "Ich habe 4 personalisierte Erinnerungen versendet, jeweils mit der konkreten Liste der fehlenden Belege und dem Fristhinweis 10.03. ✅" },
    ],
  },
  {
    professionId: "arzt",
    messages: [
      { role: "user", content: "Hat Frau Bergmann ihre Blutwerte schon zurückbekommen?" },
      { role: "assistant", content: "Ja, das Labor hat die Ergebnisse heute um 9:15 übermittelt. Auffällig: HbA1c liegt bei 7,2% (Vorwert 6,8%). Soll ich Frau Bergmann für eine Nachbesprechung einladen?" },
      { role: "user", content: "Ja, möglichst diese Woche noch. Und bereite die Werte als Verlaufskurve vor." },
      { role: "assistant", content: "Termin bei Frau Bergmann angefragt für Donnerstag 15:30. Die HbA1c-Verlaufskurve der letzten 12 Monate liegt als Übersicht in der Patientenakte bereit. ✅" },
    ],
  },
  {
    professionId: "makler",
    messages: [
      { role: "user", content: "Wie viele Anfragen gab es zur Dachgeschosswohnung in der Lindenstraße?" },
      { role: "assistant", content: "Seit Veröffentlichung vor 3 Tagen: 23 Anfragen, davon 14 mit Bonitätsnachweis. Top-Kandidaten: Familie Krause (Doppelverdiener, sofort verfügbar), Herr Demir (Bestandskunde). Soll ich Besichtigungstermine koordinieren?" },
      { role: "user", content: "Ja, plane Samstag Einzelbesichtigungen mit den 5 besten Kandidaten." },
      { role: "assistant", content: "5 Einzelbesichtigungen am Samstag geplant: 10:00, 10:45, 11:30, 12:15 und 13:00 Uhr. Bestätigungen mit Anfahrtsbeschreibung wurden an alle Interessenten gesendet. ✅" },
    ],
  },
  {
    professionId: "handwerker",
    messages: [
      { role: "user", content: "Wie sieht die Auftragslage für nächste Woche aus?" },
      { role: "assistant", content: "Nächste Woche: 3 Badsanierungen (Mo–Mi im Projekt Hofgasse), Donnerstag Heizungswartung bei Familie Pohl, Freitag Notdienst-Reserve. Offene Anfrage: Herr Klein möchte ein Angebot für eine Küchenmontage." },
      { role: "user", content: "Erstelle Herrn Klein ein Angebot. Standardküche, ca. 4 Stunden Montage." },
      { role: "assistant", content: "Angebot für Herrn Klein erstellt: Küchenmontage inkl. Anschluss Wasser/Elektro, 4h à €65 = €260 netto zzgl. Anfahrt €35. Als PDF per E-Mail zugestellt. ✅" },
    ],
  },
  {
    professionId: "gastronom",
    messages: [
      { role: "user", content: "Wir haben Samstagabend eine Reservierung für 25 Personen. Ist genug Ware da?" },
      { role: "assistant", content: "Für 25 Personen reicht der aktuelle Bestand nicht: Es fehlen ca. 3kg Rinderfilet, 2kg Lachs und 5 Flaschen Grüner Veltliner. Außerdem ist die Nachspeise ‚Topfenknödel' nur für 15 Portionen vorrätig." },
      { role: "user", content: "Bestell das Fehlende beim Zulieferer und setz ein Sondermenü auf für die Gruppe." },
      { role: "assistant", content: "Bestellung an Transgourmet raus: 3kg Rinderfilet, 2kg Lachs, 5× Grüner Veltliner, Topfenmasse für 15 Portionen. Lieferung Freitag bis 14:00. Sondermenü-Vorschlag: Gruß aus der Küche → Lachs-Tatar → Rinderfilet mit Rösti → Topfenknödel. Soll ich das Menü als PDF an den Gast senden? ✅" },
    ],
  },
  {
    professionId: "sales",
    messages: [
      { role: "user", content: "Wie sieht unsere Pipeline diese Woche aus? Welche Deals stehen kurz vor dem Abschluss?" },
      { role: "assistant", content: "3 Deals in der Abschlussphase: TechVision GmbH (€24.000, Angebot unterschriftsreif), Retail Plus AG (€18.500, Demo lief gut — Entscheider will Freitag Feedback geben), LogiPart KG (€9.200, wartet auf Freigabe vom Einkauf). Gesamte Pipeline diese Woche: €127.400." },
      { role: "user", content: "Schick TechVision das finale Angebot und erinner Retail Plus am Freitag. Bei LogiPart frag nach dem Status." },
      { role: "assistant", content: "Erledigt! TechVision GmbH hat das finale Angebot als PDF per E-Mail erhalten. Für Retail Plus AG ist eine Follow-up-Mail am Freitag um 10:00 eingeplant. LogiPart KG habe ich gerade eine freundliche Status-Anfrage gesendet. Alle Aktivitäten in HubSpot protokolliert. ✅" },
    ],
  },
  {
    professionId: "versicherung",
    messages: [
      { role: "user", content: "Herr Bauer hat einen Wasserschaden gemeldet. Wie ist er versichert?" },
      { role: "assistant", content: "Herr Bauer hat eine Haushaltsversicherung bei der Wiener Städtischen (Polizze HH-2024-8891): Deckung Leitungswasser bis €50.000, Selbstbehalt €150. Letzte Prämie bezahlt am 01.02. Soll ich die Schadensmeldung vorbereiten?" },
      { role: "user", content: "Ja, und schick ihm die Checkliste, welche Fotos und Belege er braucht." },
      { role: "assistant", content: "Schadensmeldung als Entwurf vorbereitet mit allen Polizze-Daten. Herr Bauer hat per E-Mail die Checkliste erhalten: Fotos vom Schaden, Kostenvoranschlag Installateur, Rechnung der Trocknung. ✅" },
    ],
  },
  {
    professionId: "agentur",
    messages: [
      { role: "user", content: "Was steht im Content-Plan für den Kunden ‚BioAlm' diese Woche an?" },
      { role: "assistant", content: "BioAlm diese Woche: Montag Instagram-Reel (Hofbesuch-Behind-the-Scenes), Mittwoch Blog-Artikel (‚5 Gründe für Bio-Heumilch'), Freitag Newsletter-Versand (Frühlings-Aktion -15%). Reel-Skript ist noch offen, Blogartikel ist im Entwurf." },
      { role: "user", content: "Schreib das Reel-Skript und schick den Blogartikel zur Freigabe an den Kunden." },
      { role: "assistant", content: "Reel-Skript erstellt: 30 Sek., Hook → Hofführung → Produktshot → CTA. Blogartikel ‚5 Gründe für Bio-Heumilch' (820 Wörter, SEO-optimiert) an Frau Hofer von BioAlm zur Freigabe gesendet. ✅" },
    ],
  },
];

export const COMPANY_LOGOS = [
  "ImmobilienScout24",
  "AutoScout24",
  "Engel & Völkers",
  "RE/MAX Austria",
  "DATEV",
  "Finanzonline",
  "Doctolib",
  "CHECK24",
  "WKO",
  "Haufe Group",
  "Stihl",
  "Würth",
];

export const PROFESSION_OPTIONS = PROFESSIONS.map((p) => ({
  value: p.id,
  label: p.label,
}));
