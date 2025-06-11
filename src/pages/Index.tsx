
import BeaconHeroSection from "@/components/BeaconHeroSection";
import OracleSection from "@/components/OracleSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BeaconPricingSection from "@/components/BeaconPricingSection";
import BeaconLogo from "@/components/BeaconLogo";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground">
      {/* Logo fixo no topo */}
      <div className="fixed top-6 left-6 z-50">
        <BeaconLogo size="default" />
      </div>

      <BeaconHeroSection />
      <OracleSection />
      <BeforeAfterSection />
      <BeaconPricingSection />
    </div>
  );
};

export default Index;
