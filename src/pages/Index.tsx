
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContrastSection from "@/components/ContrastSection";
import ProblemSection from "@/components/ProblemSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
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
      <ContrastSection />
      <ProblemSection />
      <WhyItWorksSection />
      <ForYouSection />
      <TestimonialSection />
      <HowItWorksSection />
      <FinalCTASection />
      <StickyActionBar />
    </div>
  );
};

export default Index;
