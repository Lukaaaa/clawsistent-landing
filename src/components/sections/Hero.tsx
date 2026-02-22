import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="green" className="mb-6">
          🚀 Jetzt in der Early-Access-Phase
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-navy-900 leading-tight max-w-4xl mx-auto">
          Ihr KI-Assistent für den{" "}
          <span className="text-primary-500">deutschsprachigen Mittelstand</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-navy-500 max-w-2xl mx-auto">
          Clawsistent automatisiert Ihre Büroarbeit. Von E-Mails über Terminplanung
          bis zur Kundenverwaltung. Branchenspezifisch, DSGVO-konform und sofort einsatzbereit.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/voranmelden" size="lg">
            Jetzt voranmelden
          </Button>
          <Button href="#demo" variant="outline" size="lg">
            Demo ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
