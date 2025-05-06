import InnerHeroSection from "@/components/common/InnerHeroSection";
import PrivacyPolicy from "@/components/features/privacy-policy/PrivacyPolicy";

export const metadata = {
  title: "iChargeOn | Privacy policy",
  description: "Understand how iChargeOn collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
}
