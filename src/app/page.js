import B2bChargingSection from "../components/features/Home/B2bChargingSection";
import DownloadSection from "../components/features/Home/DownloadSection";
import FAQSection from "../components/features/Home/FAQSection";
import HeroSection from "../components/features/Home/HeroSection";
import HowItWorksSection from "../components/features/Home/HowWorksSection";
import PricingPlansSection from "../components/features/Home/PricingPlansSection";
import RentChargeSection from "../components/features/Home/RentChargeSection";
import WhyChooseUsSection from "../components/features/Home/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RentChargeSection />
      <WhyChooseUsSection />
      <B2bChargingSection />
      <HowItWorksSection />
      <DownloadSection />
      <PricingPlansSection />
      <FAQSection />
    </>
  );
}
