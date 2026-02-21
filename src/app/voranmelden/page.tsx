import type { Metadata } from "next";
import LeadForm from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Voranmelden — Clawsistent",
  description:
    "Melden Sie sich jetzt für den Early Access von Clawsistent an. Ihr KI-Assistent für den deutschsprachigen Mittelstand.",
};

export default async function VoranmeldenPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; beruf?: string; utm_source?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen pt-20 pb-12">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-900">
            Jetzt voranmelden
          </h1>
          <p className="mt-3 text-navy-500">
            Sichern Sie sich frühen Zugang zu Ihrem KI-Assistenten. Kostenlos und unverbindlich.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
          <LeadForm
            defaultPlan={params.plan}
            defaultBeruf={params.beruf}
            utmSource={params.utm_source}
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-navy-400">
          <div className="flex items-center gap-1">
            <span>🔒</span>
            <span>DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✉️</span>
            <span>Kein Spam</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🚀</span>
            <span>Kostenlos</span>
          </div>
        </div>
      </div>
    </main>
  );
}
