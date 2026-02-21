import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="preise" className="py-20 bg-navy-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Preise"
          heading="Einfach & transparent"
          description="Keine versteckten Kosten. Jederzeit kündbar. Starten Sie mit dem Plan, der zu Ihnen passt."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-primary-500 shadow-xl shadow-primary-500/10"
                  : "border border-navy-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="orange">Beliebt</Badge>
                </div>
              )}

              <h3 className="text-xl font-bold text-navy-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-navy-500">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-navy-900">€{plan.price}</span>
                <span className="text-navy-400 ml-1">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-navy-600">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href={`/voranmelden?plan=${plan.slug}`}
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Jetzt voranmelden
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
