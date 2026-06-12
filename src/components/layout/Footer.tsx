import Image from "next/image";
import Link from "next/link";

const COMPLIANCE = [
  { label: "DSGVO", sub: "konform" },
  { label: "EU-Hosting", sub: "Daten in Europa" },
  { label: "SSL", sub: "verschlüsselt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Clawsistent" width={36} height={36} />
              <span className="text-xl font-bold text-ink-900">Clawsistent</span>
            </Link>
            <p className="text-ink-600 text-sm max-w-xs">
              Ich nehme dir die Büroarbeit ab. Branchenspezifisch, DSGVO-konform und gebaut für den
              deutschsprachigen Mittelstand.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {COMPLIANCE.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-line"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-success" aria-hidden />
                  <span className="text-xs font-bold text-ink-900">{c.label}</span>
                  <span className="text-xs text-ink-500">{c.sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-ink-900 text-sm font-bold mb-4">Produkt</h3>
            <ul className="space-y-2.5 text-sm text-ink-600">
              <li><Link href="/#funktionen" className="hover:text-ink-900 transition-colors">Funktionen</Link></li>
              <li><Link href="/#demo" className="hover:text-ink-900 transition-colors">Demo</Link></li>
              <li><Link href="/start" className="hover:text-ink-900 transition-colors">Jetzt starten</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-ink-900 text-sm font-bold mb-4">Unternehmen</h3>
            <ul className="space-y-2.5 text-sm text-ink-600">
              <li><Link href="/impressum" className="hover:text-ink-900 transition-colors">Impressum</Link></li>
              <li>
                <a href="mailto:kontakt@clawsistent.com" className="hover:text-ink-900 transition-colors">
                  kontakt@clawsistent.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-500">
          <span>&copy; {new Date().getFullYear()} Clawsistent. Alle Rechte vorbehalten.</span>
          <span>Made with 🦀 in Österreich</span>
        </div>
      </div>
    </footer>
  );
}
