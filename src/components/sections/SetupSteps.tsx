"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SETUP_STEPS } from "@/lib/constants";

export default function SetupSteps() {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="So funktioniert's"
          heading="In 5 Schritten startklar"
          description="Von der Anmeldung bis zum produktiven Einsatz. In wenigen Minuten startklar."
        />

        <div className="space-y-3">
          {SETUP_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="border border-navy-100 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-navy-50 transition-colors cursor-pointer"
                onClick={() => setOpenStep(openStep === index ? -1 : index)}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold flex-shrink-0">
                  {step.number}
                </span>
                <span className="font-semibold text-navy-900">{step.title}</span>
                <svg
                  className={`w-5 h-5 ml-auto text-navy-400 transition-transform ${
                    openStep === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openStep === index && (
                <div className="px-6 pb-4 pl-18 text-navy-500">
                  {step.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
