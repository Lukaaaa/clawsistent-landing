import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Clawsistent" width={36} height={36} />
              <span className="text-xl font-bold text-white">Clawsistent</span>
            </Link>
            <p className="text-navy-400 text-sm">
              Ihr KI-Assistent für den deutschsprachigen Mittelstand.
              Automatisieren Sie Ihre Büroarbeit mit künstlicher Intelligenz.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#demo" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="/#anwendungen" className="hover:text-white transition-colors">Anwendungen</a></li>
              <li><a href="/#preise" className="hover:text-white transition-colors">Preise</a></li>
              <li><Link href="/voranmelden" className="hover:text-white transition-colors">Voranmelden</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:kontakt@clawsistent.com" className="hover:text-white transition-colors">
                  kontakt@clawsistent.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 text-center text-sm text-navy-500">
          &copy; {new Date().getFullYear()} Clawsistent. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
