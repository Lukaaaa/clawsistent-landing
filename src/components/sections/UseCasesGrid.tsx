import SectionHeader from "@/components/ui/SectionHeader";
import { PROFESSIONS } from "@/lib/constants";

export default function UseCasesGrid() {
  return (
    <section id="anwendungen" className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Anwendungen"
          heading="Für jede Branche der richtige Assistent"
          description="Clawsistent passt sich an Ihren Beruf an — mit branchenspezifischem Wissen und Workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONS.map((profession) => (
            <div
              key={profession.id}
              className="bg-white rounded-xl p-6 border border-navy-100 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-3xl">{profession.emoji}</span>
              <h3 className="mt-3 text-lg font-semibold text-navy-900">
                {profession.label}
              </h3>
              <p className="mt-2 text-sm text-navy-500">{profession.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profession.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-navy-50 text-navy-600 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-navy-100">
                <p className="text-xs font-medium text-navy-400 mb-2">Integrationen</p>
                <div className="flex flex-wrap gap-1.5">
                  {profession.integrations.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-xs bg-primary-50 text-primary-700 rounded-full border border-primary-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
