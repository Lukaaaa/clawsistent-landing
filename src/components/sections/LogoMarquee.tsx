import Image from "next/image";
import { PROFESSIONS } from "@/lib/constants";

const TOOLS = Array.from(
  new Set(["Gmail", "Outlook", "Google Kalender", ...PROFESSIONS.flatMap((p) => p.integrations)])
);

export default function LogoMarquee() {
  const half = Math.ceil(TOOLS.length / 2);
  const rows = [TOOLS.slice(0, half), TOOLS.slice(half)];

  return (
    <section className="py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-center gap-3">
          <Image src="/logo.svg" alt="" width={32} height={32} aria-hidden />
          <h2 className="text-lg md:text-xl font-bold text-ink-900 text-center">
            Ich verbinde mich mit den Tools, die du schon nutzt
          </h2>
        </div>
      </div>

      <div className="marquee-pause relative space-y-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-hidden">
            <div
              className={`flex w-max whitespace-nowrap ${
                rowIndex === 0 ? "animate-marquee" : "animate-marquee-slow"
              }`}
            >
              {[...row, ...row].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="mx-2.5 flex items-center justify-center px-5 py-2.5 bg-white rounded-full border border-line shadow-[0_1px_2px_rgba(35,32,26,0.04)]"
                >
                  <span className="text-ink-600 font-bold text-sm whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream-50 to-transparent" />
      </div>
    </section>
  );
}
