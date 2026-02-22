import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Clawsistent",
  description:
    "Impressum und rechtliche Informationen der KLDigital OG, Betreiberin von Clawsistent.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-navy-900 mb-8">Impressum</h1>

        <div className="space-y-10 text-navy-700 text-[15px] leading-relaxed">
          {/* Angaben gemäß § 5 ECG */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Angaben gemäß § 5 ECG und § 25 MedienG
            </h2>
            <p className="font-semibold text-navy-900">KLDigital OG</p>
            <p>Selzergasse 21</p>
            <p>1150 Wien, Österreich</p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:kontakt@clawsistent.com"
                className="text-primary-600 hover:underline"
              >
                kontakt@clawsistent.com
              </a>
            </p>
          </section>

          {/* Firmenbuchdaten */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Firmenbuchdaten
            </h2>
            <ul className="space-y-1">
              <li>
                <span className="text-navy-500">Firmenbuchnummer:</span>{" "}
                489056a
              </li>
              <li>
                <span className="text-navy-500">Firmenbuchgericht:</span>{" "}
                Handelsgericht Wien
              </li>
              <li>
                <span className="text-navy-500">Firmensitz:</span> Wien
              </li>
              <li>
                <span className="text-navy-500">UID-Nummer:</span>{" "}
                ATU73179259
              </li>
              <li>
                <span className="text-navy-500">Rechtsform:</span> Offene
                Gesellschaft (OG)
              </li>
            </ul>
          </section>

          {/* Gegenstand des Unternehmens */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Unternehmensgegenstand
            </h2>
            <p>
              Entwicklung und Betrieb von Software-as-a-Service-Lösungen im
              Bereich künstlicher Intelligenz, insbesondere KI-gestützter
              Assistenzsysteme für kleine und mittlere Unternehmen.
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Haftungsausschluss (Disclaimer)
            </h2>

            <h3 className="font-semibold text-navy-900 mt-4 mb-1">
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Gemäß §§ 8
              bis 10 ECG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="font-semibold text-navy-900 mt-4 mb-1">
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem österreichischen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Streitbeilegung */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Online-Streitbeilegung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
              nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Bildernachweis */}
          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-3">
              Bildernachweis
            </h2>
            <p>
              Sofern nicht anders angegeben, stammen alle auf dieser Website
              verwendeten Bilder und Grafiken von der KLDigital OG oder wurden
              unter entsprechender Lizenz erworben.
            </p>
          </section>

          {/* Kontaktaufnahme */}
          <section className="bg-navy-50 rounded-xl p-6 border border-navy-100">
            <h2 className="text-lg font-semibold text-navy-900 mb-2">
              Fragen?
            </h2>
            <p>
              Bei Fragen zu diesem Impressum oder unseren rechtlichen
              Informationen erreichen Sie uns unter{" "}
              <a
                href="mailto:kontakt@clawsistent.com"
                className="text-primary-600 hover:underline"
              >
                kontakt@clawsistent.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
