import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURES } from "@/lib/constants";

export default function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Und vieles mehr"
          heading="Was ich sonst noch für dich erledige"
          description="Von Kommunikation bis Buchhaltung: Ich decke die Büroaufgaben ab, die dich jeden Tag Zeit kosten."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-3xl bg-white border border-line hover:border-line-strong hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="inline-flex w-11 h-11 rounded-xl bg-cream-100 border border-line items-center justify-center text-xl">
                {feature.icon}
              </span>
              <h3 className="mt-4 font-bold text-ink-900">{feature.title}</h3>
              <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
