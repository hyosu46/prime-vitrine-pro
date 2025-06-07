
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ForYouSection from "@/components/ForYouSection";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyActionBar from "@/components/StickyActionBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <BenefitsSection />
      <ForYouSection />
      <TestimonialSection />
      <HowItWorksSection />
      <FinalCTASection />
      <StickyActionBar />
    </div>
  );
};

export default Index;
