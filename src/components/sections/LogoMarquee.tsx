import { COMPANY_LOGOS } from "@/lib/constants";

export default function LogoMarquee() {
  return (
    <section className="py-12 bg-navy-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm text-navy-400 font-medium uppercase tracking-wider">
          Vertraut von Unternehmen im DACH-Raum
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((name, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-sm border border-navy-100"
            >
              <span className="text-navy-400 font-semibold text-sm whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
