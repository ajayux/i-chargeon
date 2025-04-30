import { Suspense } from "react";
import { Heading } from "../../layout/Heading";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";

const steps = [
  {
    image: "img_6203322_3196531.svg",
    title: "Find a Station",
    description:
      "Our high-speed power banks ensure your device charges quickly.",
  },
  {
    image: "img_image_11.png",
    title: "Scan & Rent",
    description: "Scan the QR code on the station to unlock a power bank.",
  },
  {
    image: "img_27668546_techno.svg",
    title: "Charge & Return Anywhere",
    description:
      "Power up your device and return the power bank at any station.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full block 3xl:py-[70px_140px] 2xl:py-[50px_100px] lg:py-[40px_80px] py-[20px_40px]">
      <div className="container">
        <div className="mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
          <Heading
            size="heading1"
            as="h2"
            className="capitalize text-center text-black"
          >
            How it works?
          </Heading>
          <Text as="p" className="tracking-[3%] text-center">
            Charging in 3 Easy Steps!
          </Text>
        </div>
        <div
          className="flex flex-wrap justify-between"
          style={{
            "--icon-xy": "308px",
          }}
        >
          <Suspense fallback={<div>Loading feed...</div>}>
            {steps?.map((item, index) => (
              <div key={"specs" + index} className="group">
                <div className="w-(--icon-xy)">
                  <div className="w-(--icon-xy) h-auto aspect-square flex items-center justify-center rounded-full border border-solid border-[#d3d3d3] p-[10px] xl:p-[15px] 3xl:p-[20px] mb-[20px] lg:mb-[20] xl:mb-[40px] 3xl:mb-[60px] mx-auto relative z-0 transition-border duration-300 hover:border-base1 after:content-[''] after:absolute after:-z-1 after:inset-0 after:w-full after:h-full after:rounded-full after:scale-95 after:bg-base1/10 after:block after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
                    <Img
                      src={item.image}
                      alt={item.title}
                      width={212}
                      height={212}
                      className="w-[212px] h-[212px]"
                    />
                    <div className="w-[300px] h-[1px] absolute z-0 top-[calc((-icon-xy)/2)] left-[108%] group-[&:nth-child(3)]:hidden">
                      <div className="relative z-0">
                        <div className="w-full h-[1px] border-t-[1px] border-dashed border-[#4e4e4e]" />
                        <Img
                          src="img_arrow_right.svg"
                          alt="Arrowright"
                          width={10}
                          height={16}
                          className="absolute inset-0 m-auto h-[16px] group-hover:translate-x-[10px] group-hover:scale-x-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <Heading
                      size="heading3"
                      as="h3"
                      className="text-center mb-[4px] lg:mb-[6px]"
                    >
                      {item.title}
                    </Heading>
                    <Text as="p" className="text-center text-[#2D2929]">
                      {item.description}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
