import Image from "next/image";

/* ------------------------------------------------------------------ */
/* CSS-built visuals (no external images needed)                       */
/* ------------------------------------------------------------------ */

function VisualPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-cream-200/70 border border-line p-5 sm:p-8 md:p-10">
      <div className="rounded-2xl bg-white border border-line shadow-soft overflow-hidden">{children}</div>
    </div>
  );
}

function InboxVisual() {
  const rows = [
    { from: "Fr. Berger", subject: "Rückfrage zum Angebot", tag: "Entwurf bereit", tone: "bg-primary-50 text-primary-700 border-primary-200" },
    { from: "Hr. Maier", subject: "Termin nächste Woche?", tag: "Wichtig", tone: "bg-[#fdeeee] text-[#c0392b] border-[#f3c9c4]" },
    { from: "Newsletter Weekly", subject: "10 Tipps für…", tag: "Archiviert", tone: "bg-cream-100 text-ink-500 border-line" },
    { from: "Buchhaltung", subject: "Beleg fehlt noch", tag: "Entwurf bereit", tone: "bg-primary-50 text-primary-700 border-primary-200" },
  ];
  return (
    <VisualPanel>
      <div className="px-4 py-3 border-b border-line flex items-center justify-between">
        <span className="text-sm font-bold text-ink-900">Posteingang</span>
        <span className="text-xs font-semibold text-success">4 von 14 brauchen dich</span>
      </div>
      <ul>
        {rows.map((r, i) => (
          <li key={i} className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-line/70" : ""}`}>
            <span className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-xs font-bold text-ink-600 shrink-0">
              {r.from[0]}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-ink-900 truncate">{r.from}</span>
              <span className="block text-xs text-ink-500 truncate">{r.subject}</span>
            </span>
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0 ${r.tone}`}>{r.tag}</span>
          </li>
        ))}
      </ul>
    </VisualPanel>
  );
}

function CalendarVisual() {
  return (
    <VisualPanel>
      <div className="px-4 py-3 border-b border-line flex items-center justify-between">
        <span className="text-sm font-bold text-ink-900">Donnerstag</span>
        <span className="text-xs font-semibold text-ink-500">3 Termine · 1 verschoben</span>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="rounded-xl border border-primary-200 bg-primary-50 px-3.5 py-2.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-ink-900">Hr. Maier · Erstgespräch</span>
            <span className="text-[11px] font-bold text-primary-700">9:00</span>
          </div>
          <span className="text-xs text-primary-700 font-semibold">↺ von 10:00 verschoben · bestätigt</span>
        </div>
        <div className="rounded-xl border border-line bg-cream-50 px-3.5 py-2.5 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-700">Objektbesichtigung Lindengasse</span>
          <span className="text-[11px] font-bold text-ink-500">13:00</span>
        </div>
        <div className="rounded-xl border border-line bg-cream-50 px-3.5 py-2.5 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-700">Steuerberater · Quartalscheck</span>
          <span className="text-[11px] font-bold text-ink-500">16:00</span>
        </div>
        <div className="rounded-xl border border-dashed border-line-strong px-3.5 py-2.5 flex items-center gap-2 text-xs font-semibold text-ink-500">
          <span className="w-4 h-4 rounded-full bg-success/15 text-success flex items-center justify-center text-[10px]">✓</span>
          Fokuszeit geblockt · Einladungen werden automatisch abgelehnt
        </div>
      </div>
    </VisualPanel>
  );
}

function DocumentVisual() {
  return (
    <VisualPanel>
      <div className="px-4 py-3 border-b border-line flex items-center justify-between">
        <span className="text-sm font-bold text-ink-900">Angebot_Berger_2026-117.pdf</span>
        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-success/10 text-success border border-success/20">
          Fertig zur Freigabe
        </span>
      </div>
      <div className="p-5 space-y-3">
        <div className="h-2.5 w-2/5 rounded bg-ink-900/80" />
        <div className="space-y-2">
          <div className="h-2 w-full rounded bg-cream-300/80" />
          <div className="h-2 w-11/12 rounded bg-cream-300/80" />
          <div className="h-2 w-4/5 rounded bg-cream-300/80" />
        </div>
        <div className="rounded-xl border border-line bg-cream-50 p-3 space-y-2">
          <div className="flex justify-between text-xs font-semibold text-ink-600">
            <span>Küchenmontage inkl. Anschluss</span><span>€ 260,—</span>
          </div>
          <div className="flex justify-between text-xs font-semibold text-ink-600">
            <span>Anfahrt</span><span>€ 35,—</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-ink-900 border-t border-line pt-2">
            <span>Gesamt netto</span><span>€ 295,—</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-ink-500">
          <Image src="/logo.svg" alt="" width={16} height={16} aria-hidden />
          In deinem Ton geschrieben, aus deinen Vorlagen
        </div>
      </div>
    </VisualPanel>
  );
}

function FollowUpVisual() {
  const todos = [
    { text: "Fr. Berger an Rechnung erinnern", done: true, meta: "erledigt · 9:02" },
    { text: "Follow-up TechVision GmbH", done: true, meta: "E-Mail gesendet · 9:15" },
    { text: "Unterlagen für UStVA anfordern", done: false, meta: "fällig Freitag" },
    { text: "Wiedervorlage: Angebot Hr. Klein", done: false, meta: "in 7 Tagen" },
  ];
  return (
    <VisualPanel>
      <div className="px-4 py-3 border-b border-line flex items-center justify-between">
        <span className="text-sm font-bold text-ink-900">Deine Follow-ups</span>
        <span className="text-xs font-semibold text-ink-500">Nichts rutscht durch</span>
      </div>
      <ul className="p-2">
        {todos.map((t, i) => (
          <li key={i} className="flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-cream-50">
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] shrink-0 ${
                t.done ? "bg-success border-success text-white" : "border-line-strong text-transparent"
              }`}
            >
              ✓
            </span>
            <span className="min-w-0 flex-1">
              <span className={`block text-sm font-semibold truncate ${t.done ? "text-ink-400 line-through" : "text-ink-900"}`}>
                {t.text}
              </span>
              <span className="block text-[11px] text-ink-400">{t.meta}</span>
            </span>
          </li>
        ))}
      </ul>
    </VisualPanel>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const BLOCKS = [
  {
    eyebrow: "E-Mail-Triage & Entwürfe",
    heading: "Ich sortiere dein Postfach und entwerfe deine Antworten.",
    body: [
      "Ich markiere jede E-Mail und schreibe Antwortentwürfe in deinem Ton. Du liest kurz drüber, passt an, sendest ab.",
      "Bei wichtigen Mails melde ich mich sofort, damit dir nie etwas durchrutscht.",
    ],
    visual: <InboxVisual />,
  },
  {
    eyebrow: "Terminplanung",
    heading: "Ich plane deine Termine und halte deinen Kalender sauber.",
    body: [
      "Ich finde freie Slots, verschicke Einladungen und verschiebe automatisch, wenn sich Pläne ändern. Kein Hin und Her mehr.",
    ],
    visual: <CalendarVisual />,
  },
  {
    eyebrow: "Angebote & Dokumente",
    heading: "Ich erstelle Angebote, Protokolle und Berichte in deinem Ton.",
    body: [
      "Aus einem kurzen Zuruf wird ein fertiges Dokument: Angebot, Exposé, Schriftsatz-Entwurf oder Meeting-Protokoll. Du gibst nur noch frei.",
    ],
    visual: <DocumentVisual />,
  },
  {
    eyebrow: "Erinnerungen & Follow-ups",
    heading: "Ich behalte deine To-dos im Blick und fasse nach.",
    body: [
      "Ich ziehe Aufgaben aus E-Mails und Terminen, erinnere dich an Fristen und fasse bei Kunden automatisch nach, damit nichts liegen bleibt.",
    ],
    visual: <FollowUpVisual />,
  },
];

export default function FeatureShowcase() {
  return (
    <section id="funktionen" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
        {BLOCKS.map((block, i) => (
          <div
            key={block.eyebrow}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="inline-block mb-4 text-xs font-bold tracking-[0.18em] uppercase text-primary-600">
                {block.eyebrow}
              </span>
              <div className="flex items-start gap-3">
                <Image src="/logo.svg" alt="" width={36} height={36} aria-hidden className="mt-1 shrink-0 hidden sm:block" />
                <h3 className="text-2xl md:text-[2.1rem] md:leading-[1.18] font-bold tracking-tight text-ink-900 text-balance">
                  {block.heading}
                </h3>
              </div>
              <div className="mt-5 space-y-3 text-lg text-ink-600 sm:pl-[3rem]">
                {block.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>{block.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
