import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";

function DownloadButton({ href, image }) {
  return (
    <a href={href} target="_blank" aria-label="app">
      <Img
        src={image}
        alt="download"
        width={212}
        height={72}
        className="w-[120px] xl:w-[142px] 3xl:w-[212px] h-auto aspect-[140/48] object-contain hover:scale-105 transition-transform duration-300"
      />
    </a>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] flex items-center pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] 3xl:pt-[120px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:bottom-0 before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-linear-to-r before:from-black before:via-80% before:via-black/50 before:to-transparent before:pointer-events-none">
      <Img
        src="home-banner-1.jpg"
        alt="Image Eleven"
        fill
        sizes="100vw"
        className="-z-2 object-cover"
      />
      <div className="container">
        <div className="flex flex-col gap-[130px] lg:gap-[97px] md:gap-[97px] sm:gap-[65px]">
          <div className="w-full lg:max-w-[540px] 2xl:max-w-[620px] 3xl:max-w-[690px]">
            <Heading
              size="heading1"
              as="h1"
              className="uppercase text-white mb-[15px] 2xl:mb-[20px]"
            >
              Pick Your Power Bank and Stay Charged, Anytime, Anywhere
            </Heading>
            <Text
              as="p"
              className="text-white font-medium w-full max-w-[80%] mb-[20px] xl:mb-[40px] 3xl:mb-[60px]"
            >
              Experience fast-charging freedom on the move. Rent a power bank,
              charge your device and drop it off at any iChargeON location.
            </Text>
            <div className="flex gap-[4px] 3xl:gap-[6px]">
              <DownloadButton href="#" image="img_group_1000004927.png" />
              <DownloadButton href="#" image="img_group_1000004928.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
