import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    number: "1",
    emoji: "🧑‍💼",
    title: "Beruf wählen",
    description:
      "Sag mir, was du machst, und ich stelle mich auf deine Branche, deine Fachbegriffe und deine Abläufe ein.",
  },
  {
    number: "2",
    emoji: "🔌",
    title: "Tools verbinden",
    description:
      "E-Mail, Kalender und deine bestehenden Programme sind in unter 60 Sekunden verbunden. Kein Training nötig.",
  },
  {
    number: "3",
    emoji: "⏰",
    title: "Zeit zurückbekommen",
    description:
      "Postfach sortiert, Termine geplant, Follow-ups erledigt. Je länger wir zusammenarbeiten, desto besser werde ich.",
  },
];

export default function SetupSteps() {
  return (
    <section id="so-funktionierts" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="So funktioniert's"
          heading="In Minuten startklar"
          description="Ich sortiere dein Postfach, plane deine Termine und erledige die Routinearbeit, noch bevor du morgens den ersten Kaffee hast."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white border border-line p-7 shadow-[0_1px_2px_rgba(35,32,26,0.04)] hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cream-100 border border-line flex items-center justify-center text-2xl mb-6">
                {step.emoji}
              </div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-6 h-6 rounded-md bg-cream-200 text-ink-600 text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
              </div>
              <p className="text-ink-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
