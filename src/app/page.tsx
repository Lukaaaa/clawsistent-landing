import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import DemoSection from "@/components/sections/DemoSection";
import SetupSteps from "@/components/sections/SetupSteps";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoMarquee />
      <FeatureShowcase />
      <DemoSection />
      <SetupSteps />
      <FeaturesGrid />
      <Security />
      <Pricing />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
