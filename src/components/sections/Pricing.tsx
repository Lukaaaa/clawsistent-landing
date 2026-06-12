import Image from "next/image";
import Button from "@/components/ui/Button";
import { PRICING_PLANS } from "@/lib/constants";

const HUMAN_DOWNSIDES = [
  "Braucht Urlaub, Schlaf und Wochenenden",
  "Kündigt im ungünstigsten Moment",
  "Manchmal einfach nicht erreichbar",
  "Macht Fehler (ist ja nur ein Mensch)",
];

function CheckIcon({ className = "text-success" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 shrink-0 mt-0.5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 12.2l2.4 2.3 4.6-5" />
    </svg>
  );
}

export default function Pricing() {
  const [starter, professional] = PRICING_PLANS;

  return (
    <section id="preise" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="swoosh text-3xl md:text-[2.6rem] md:leading-[1.15] font-bold tracking-tight text-ink-900 text-balance max-w-3xl mx-auto">
            10 Stunden pro Woche zurück. Für weniger als einen <em>Kaffee am Tag.</em>
          </h2>
          <p className="mt-5 text-lg text-ink-600">
            Faire Preise. Jederzeit kündbar, keine versteckten Kosten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {/* Joke card: human assistant */}
          <div className="rounded-3xl bg-cream-100/60 border border-line p-7 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-cream-200 border border-line flex items-center justify-center text-2xl">
                🧑‍💼
              </span>
              <span>
                <h3 className="text-lg font-bold text-ink-900">Büro-Assistenz (Mensch)</h3>
                <span className="text-sm text-ink-500">Klassisch.</span>
              </span>
            </div>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-ink-900">€3.500</span>
              <span className="text-ink-500 ml-1">/ Monat</span>
            </div>
            <ul className="mt-7 space-y-3 flex-1">
              {HUMAN_DOWNSIDES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-ink-600">
                  <CheckIcon className="text-ink-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Starter — highlighted */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-primary-400 via-primary-200 to-line">
            <div className="rounded-[calc(1.5rem-2px)] bg-white p-7 flex flex-col h-full shadow-soft">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-primary-50 border border-primary-200/60 flex items-center justify-center overflow-hidden">
                  <Image src="/logo.svg" alt="" width={34} height={34} aria-hidden />
                </span>
                <span>
                  <h3 className="text-lg font-bold text-ink-900">{starter.name}</h3>
                  <span className="text-sm text-ink-500">Dein persönlicher KI-Assistent.</span>
                </span>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-ink-900">€{starter.price}</span>
                <span className="text-ink-500 ml-1">{starter.period}</span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {starter.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm font-semibold text-ink-700">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`/start?plan=${starter.slug}`} className="w-full">
                  Jetzt starten
                </Button>
              </div>
            </div>
          </div>

          {/* Professional */}
          <div className="rounded-3xl bg-white border border-line p-7 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-cream-100 border border-line flex items-center justify-center overflow-hidden">
                <Image src="/logo.svg" alt="" width={34} height={34} aria-hidden className="opacity-80" />
              </span>
              <span>
                <h3 className="text-lg font-bold text-ink-900">{professional.name}</h3>
                <span className="text-sm text-ink-500">Für Teams mit mehr Bedarf.</span>
              </span>
            </div>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-ink-900">€{professional.price}</span>
              <span className="text-ink-500 ml-1">{professional.period}</span>
            </div>
            <ul className="mt-7 space-y-3 flex-1">
              {professional.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm font-semibold text-ink-700">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={`/start?plan=${professional.slug}`} variant="secondary" className="w-full">
                Jetzt starten
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
