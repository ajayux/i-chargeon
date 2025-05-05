import HeroSection from "../components/features/home/HeroSection";
import RentChargeSection from "../components/features/home/RentChargeSection";
import WhyChooseUsSection from "../components/features/home/WhyChooseUsSection";
import B2bChargingSection from "../components/features/home/B2bChargingSection";
import DownloadSection from "../components/features/home/DownloadSection";
import HowItWorksSection from "../components/features/home/HowWorksSection";
import PricingPlansSection from "../components/features/home/PricingPlansSection";
import FAQSection from "../components/features/home/FAQSection";

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
