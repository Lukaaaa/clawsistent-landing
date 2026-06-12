import SectionHeader from "@/components/ui/SectionHeader";

interface Quote {
  name: string;
  role: string;
  text: string;
}

const QUOTES: Quote[] = [
  {
    name: "Thomas K.",
    role: "Handwerksbetrieb, Graz",
    text: "Angebote, die früher einen Abend gekostet haben, gehen jetzt zwischen zwei Baustellen raus.",
  },
  {
    name: "Mag. Sabine H.",
    role: "Steuerberaterin, Linz",
    text: "Die Belege-Erinnerungen an Mandanten schreibe ich nicht mehr selbst. Keine einzige.",
  },
  {
    name: "Daniel R.",
    role: "Immobilienmakler, Wien",
    text: "23 Anfragen zu einem Objekt. Claw hatte die Besichtigungen koordiniert, bevor ich vom Termin zurück war.",
  },
  {
    name: "Dr. Petra M.",
    role: "Allgemeinmedizinerin, Salzburg",
    text: "Endlich kümmert sich jemand um die Terminverwaltung, ohne dass ich eine zweite Ordinationshilfe einstellen muss.",
  },
  {
    name: "Markus W.",
    role: "Versicherungsmakler, Innsbruck",
    text: "Schadensmeldung vorbereitet, Checkliste an den Kunden raus, bevor ich überhaupt zum Telefon gegriffen habe.",
  },
  {
    name: "Lisa B.",
    role: "Kreativagentur, Wien",
    text: "Mein Postfach ist zum ersten Mal seit Jahren leer. Ich dachte nicht, dass mich das emotional macht.",
  },
  {
    name: "Stefan G.",
    role: "Gastronom, Wels",
    text: "Bestellung beim Zulieferer, Sondermenü für 25 Gäste. Ein Satz von mir, der Rest war erledigt.",
  },
  {
    name: "Julia P.",
    role: "Sales Lead, München",
    text: "Follow-ups passieren jetzt einfach. Meine Pipeline war noch nie so sauber.",
  },
];

function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl bg-white border border-line p-6 flex flex-col gap-4 whitespace-normal">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-cream-200 border border-line flex items-center justify-center text-sm font-bold text-ink-600">
          {quote.name[0]}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold text-ink-900">{quote.name}</span>
          <span className="block text-xs text-ink-500">{quote.role}</span>
        </span>
      </div>
      <p className="text-[15px] text-ink-700 leading-relaxed">„{quote.text}&ldquo;</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Was Nutzer sagen"
          heading="Verlass dich nicht nur auf mein Wort"
        />
      </div>

      <div className="marquee-pause relative">
        <div className="flex w-max gap-4 animate-marquee-slow pr-4">
          {[...QUOTES, ...QUOTES].map((q, i) => (
            <QuoteCard key={`${q.name}-${i}`} quote={q} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-50 to-transparent" />
      </div>
    </section>
  );
}
