import InnerHeroSection from "@/components/common/InnerHeroSection";
import TermsConditions from "@/components/features/terms-conditions/TermsConditions";

export const metadata = {
  title: "iChargeOn | Terms and conditions",
  description: "Understand how iChargeOn collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="Terms & conditions" />
      <TermsConditions />
    </>
  );
}
