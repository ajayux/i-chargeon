import InnerHeroSection from "@/components/common/InnerHeroSection";
import FAQInfoSection from "@/components/features/faq/FAQInfoSection";

export const metadata = {
  title: "iChargeOn | FAQ",
  description: "Understand how iChargeOn collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="FAQ" />
      <FAQInfoSection />
    </>
  );
}
