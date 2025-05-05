import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";

export default function InnerHeroSection({title}) {
  return (
    <section className="w-full h-[240px] xl:h-[330px] 3xl:h-[500px] flex items-end py-[70px_15px] lg:py-[80px_25px] xl:py-[90px_35px] 3xl:py-[120px_60px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-linear-to-r before:from-black before:to-transparent before:pointer-events-none">
      <Img
        src="about-banner-1.jpg"
        alt="about"
        fill
        sizes="100vw"
        className="-z-2 object-cover"
      />
      <div className="container">
        <div className="flex flex-col">
          <Heading
            size="heading1"
            as="h1"
            className="uppercase text-center text-white"
          >
            {title}
          </Heading>
        </div>
      </div>
    </section>
  );
}
