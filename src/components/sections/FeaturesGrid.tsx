import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURES } from "@/lib/constants";

export default function FeaturesGrid() {
  return (
    <section id="funktionen" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Funktionen"
          heading="Alles, was Ihr Backoffice braucht"
          description="Von Kommunikation bis Buchhaltung — Clawsistent deckt alle wichtigen Büroaufgaben ab."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-navy-100 hover:border-primary-300 hover:shadow-md transition-all duration-200"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-3 font-semibold text-navy-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-navy-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
