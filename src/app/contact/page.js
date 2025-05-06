import InnerHeroSection from "@/components/common/InnerHeroSection";
import ContactSection from "@/components/features/contact/ContactSection";

export const metadata = {
  title: "iChargeOn | Contact",
  description: "Understand how iChargeOn collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="contact" />
      <ContactSection />
    </>
  );
}
