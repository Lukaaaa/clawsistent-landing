import Image from "next/image";
import Button from "@/components/ui/Button";
import PhoneDemo from "@/components/sections/PhoneDemo";

const FLOW_TASKS =
  "Postfach aufräumen · Termin mit Hr. Maier verschieben · Angebot an Fr. Berger · Zahlungserinnerung senden · Protokoll vom Meeting · Was steht morgen an? · Mandanten erinnern · Besichtigung planen · ";

const FLOW_DONE = "✓ Erledigt · ✓ Gesendet · ✓ Geplant · ✓ Erstellt · ";

function HeroFlow() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-hidden" aria-hidden>
      {/* Fixed-size stage centered on the hero content, so the curve keeps
          its shape on every viewport width instead of being stretched. */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2400px] h-[800px]">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 2400 800">
          <defs>
            {/* Sweeps from bottom-left up and into the phone (right column) */}
            <path id="clawFlowIn" d="M -100 820 C 520 280, 950 170, 1470 470" />
            {/* Exits from the phone toward the top-right */}
            <path id="clawFlowOut" d="M 1530 430 C 1720 290, 1950 160, 2520 -140" />
          </defs>
          <text className="flow-text-in" x="-4300">
            <textPath href="#clawFlowIn">{FLOW_TASKS.repeat(10)}</textPath>
            <animate attributeName="x" dur="60s" values="-4300;-2150" repeatCount="indefinite" />
          </text>
          <text className="flow-text-out" x="-1200">
            <textPath href="#clawFlowOut">{FLOW_DONE.repeat(14)}</textPath>
            <animate attributeName="x" dur="30s" values="-1200;-440" repeatCount="indefinite" />
          </text>
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      <HeroFlow />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <Image
              src="/logo.svg"
              alt="Claw, dein KI-Assistent"
              width={96}
              height={96}
              priority
              className="animate-float fade-up mb-6 w-20 h-20 md:w-24 md:h-24"
            />

            <h1 className="fade-up fade-up-1 text-[2.75rem] leading-[1.05] md:text-6xl font-bold tracking-tight text-ink-900">
              Hey, ich bin <span className="text-primary-500">Claw</span>.
            </h1>

            <p className="fade-up fade-up-2 mt-5 text-xl md:text-2xl text-ink-600 max-w-md">
              Ich nehme dir die Büroarbeit ab. Branchenspezifisch und DSGVO-konform.
            </p>

            <div className="fade-up fade-up-3 mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button href="/start" size="md">
                Jetzt starten
              </Button>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-ink-600">
                <span className="flex text-primary-500" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </span>
                In 60 Sekunden startklar
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="fade-up fade-up-2 relative">
            <PhoneDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
