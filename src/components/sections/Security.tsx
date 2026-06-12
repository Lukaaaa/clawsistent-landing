import SectionHeader from "@/components/ui/SectionHeader";

const PILLARS = [
  {
    icon: "🇪🇺",
    title: "DSGVO-konform",
    description: "Deine Daten bleiben in Europa, gehostet auf EU-Servern.",
  },
  {
    icon: "🔐",
    title: "Verschlüsselt",
    description: "Verschlüsselung bei Übertragung und Speicherung ist bei mir Standard.",
  },
  {
    icon: "✋",
    title: "Du gibst frei",
    description: "Wichtige Aktionen gehen nur mit deiner Freigabe raus.",
  },
  {
    icon: "🚫",
    title: "Kein Training mit deinen Daten",
    description: "Deine Daten werden nie verkauft oder zum Training von Modellen verwendet.",
  },
];

export default function Security() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-cream-100 border border-line px-6 py-14 md:px-14 md:py-16">
          <SectionHeader
            label="Sicherheit"
            heading="Persönliche KI mit Datenschutz, der in Europa zuhause ist"
            description="Clawsistent ist von Grund auf privacy-first gebaut. Du behältst die Kontrolle über deine Daten und über alles, was ich in deinem Namen tue."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white border border-line p-6">
                <span className="text-2xl" aria-hidden>
                  {p.icon}
                </span>
                <h3 className="mt-3 font-bold text-ink-900">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
