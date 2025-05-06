import InnerHeroSection from "@/components/common/InnerHeroSection";
import InfoSection from "@/components/features/about/InfoSection";
import OperateSection from "@/components/features/about/OperateSection";

export default function page() {
  return (
    <>
      <InnerHeroSection title="about" />
      <InfoSection />
      <OperateSection />
    </>
  );
}
