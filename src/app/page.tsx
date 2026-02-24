import Hero from "@/components/sections/Hero";
import DemoSection from "@/components/sections/DemoSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import SetupSteps from "@/components/sections/SetupSteps";
import UseCasesGrid from "@/components/sections/UseCasesGrid";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import BenefitsBar from "@/components/sections/BenefitsBar";
export default function Home() {
  return (
    <main>
      <Hero />
      <LogoMarquee />
      <DemoSection />
      <BenefitsBar />
      <SetupSteps />
      <UseCasesGrid />
      <FeaturesGrid />
    </main>
  );
}
