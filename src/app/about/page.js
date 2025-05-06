import InnerHeroSection from "@/components/common/InnerHeroSection";
import InfoSection from "@/components/features/about/InfoSection";
import WhereWeOperate from "@/components/features/about/WhereWeOperate";

export default function page() {
  return (
    <>
      <InnerHeroSection title="about" />
      <InfoSection />
      <WhereWeOperate />
    </>
  );
}
