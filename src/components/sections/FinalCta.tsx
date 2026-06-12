import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-cream-200/80 border border-line px-6 py-20 md:py-28 text-center">
          {/* Decorative blob */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary-200/40 blur-3xl"
            aria-hidden
          />

          <div className="relative flex flex-col items-center">
            <Image src="/logo.svg" alt="" width={72} height={72} aria-hidden className="animate-float mb-7" />

            <h2 className="swoosh text-4xl md:text-[3.4rem] md:leading-[1.1] font-bold tracking-tight text-ink-900 text-balance max-w-3xl">
              Wach morgen auf und sei <em>schon einen Schritt voraus.</em>
            </h2>

            <p className="mt-6 text-lg md:text-xl text-ink-600 max-w-2xl">
              Starte jetzt mit deinem KI-Assistenten. In 60 Sekunden eingerichtet.
              Ab morgen bekommst du jeden Tag Stunden zurück.
            </p>

            <div className="mt-9">
              <Button href="/start" size="lg">
                Jetzt starten
              </Button>
            </div>

            <p className="mt-5 text-sm font-semibold text-ink-500">
              Kostenlos starten · DSGVO-konform · jederzeit kündbar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
