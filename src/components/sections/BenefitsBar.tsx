import { BENEFITS } from "@/lib/constants";

export default function BenefitsBar() {
  return (
    <section className="py-12 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4 text-white">
              <span className="text-3xl flex-shrink-0">{benefit.icon}</span>
              <div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-navy-300 text-sm mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
