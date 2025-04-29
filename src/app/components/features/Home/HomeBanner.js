import Link from "next/link";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";

export default function HomeBanner() {
  return (
    <section className="w-full h-dvh flex items-center lg:pt-[100px] 2xl:pt-[120px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:bottom-0 before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-linear-to-r before:from-black before:via-60% before:via-black/50 before:to-transparent">
      <Img
        src="home-banner-1.jpg"
        alt="Image Eleven"
        fill
        sizes="100vw"
        className="-z-2 object-cover"
      />
      <div className="container">
        <div className="flex flex-col gap-[130px] lg:gap-[97px] md:gap-[97px] sm:gap-[65px]">
          <div className="w-full max-w-[520px]">
            <Heading
              size="heading1"
              as="h1"
              className="mb-[15px] 2xl:mb-[20px]"
            >
              <>
                Rent a Power bank <br />
                at your preferred time & location
              </>
            </Heading>
            <Text as="p" className="mb-[15px] lg:mb-[30px] 2xl:mb-[40px]">
              Experience lightning-fast charging with our new fast-charging
              powerbanks, capable of charging your device decently in 30 minutes
              and fully in 1 hour.
            </Text>
            <div className="flex gap-[6px]">
              <Link href="#">
                <Img
                  src="img_group_1000004927.png"
                  alt="Image Eleven"
                  width={212}
                  height={72}
                  className="w-[142px] 2xl:w-[212px] h-auto aspect-[140/48] rounded-[12px] object-contain"
                />
              </Link>
              <Link href="#">
                <Img
                  src="img_group_1000004928.png"
                  alt="Image"
                  width={212}
                  height={72}
                  className="w-[142px] 2xl:w-[212px] h-auto aspect-[140/48] rounded-[12px] object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
