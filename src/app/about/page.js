import InnerHeroSection from "@/components/common/InnerHeroSection";
import InfoSection from "@/components/features/about/InfoSection";
import OperateSection from "@/components/features/about/OperateSection";

export const metadata = {
  title: "iChargeOn | About",
  description:
    "Understand how iChargeOn collects.",
};

export default function page() {
  return (
    <>
      <InnerHeroSection title="about" />
      <InfoSection />
      <OperateSection />
    </>
  );
}
