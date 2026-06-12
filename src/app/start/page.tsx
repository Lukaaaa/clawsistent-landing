import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Jetzt starten | Clawsistent",
  description:
    "Starten Sie jetzt mit Clawsistent, Ihrem KI-Assistenten für den deutschsprachigen Mittelstand. In 60 Sekunden eingerichtet.",
};

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; beruf?: string; utm_source?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 flex flex-col items-center">
          <Image src="/logo.svg" alt="" width={64} height={64} aria-hidden className="animate-float mb-5" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
            Lass uns loslegen.
          </h1>
          <p className="mt-3 text-ink-600">
            Erstelle deinen Zugang. Dein KI-Assistent ist gleich startklar.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-line p-6 sm:p-8 shadow-soft">
          <LeadForm
            defaultPlan={params.plan}
            defaultBeruf={params.beruf}
            utmSource={params.utm_source}
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm font-semibold text-ink-500">
          <div className="flex items-center gap-1.5">
            <span>🔒</span>
            <span>DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>🤝</span>
            <span>Persönliche Einrichtung</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>⚡</span>
            <span>In 60 Sekunden</span>
          </div>
        </div>
      </div>
    </main>
  );
}
