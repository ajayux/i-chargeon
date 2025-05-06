import { Suspense } from "react";
import { Heading } from "../../layout/Heading";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";

const specs = [
  {
    image: "img_fi_10018202.svg",
    title: "Fast Charging",
    description:
      "Stay powered up with iChargeON's high-speed charging system whenever you need it.",
  },
  {
    image: "img_fi_10104619.svg",
    title: "Eco-Friendly",
    description:
      "With every battery swap, iChargeON reduces the unnecessary production of disposable electronic components",
  },
  {
    image: "img_vector.svg",
    title: "Affordable Pricing",
    description: "Enjoy the freedom of having fully charged devices without spending a hefty amount.",
  },
  {
    image: "img_fi_15374900.svg",
    title: "Travel Light",
    description:
      "Travel freely knowing you can grab a fully charged power bank whenever you need it.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full block 3xl:py-[100px] 2xl:py-[80px] lg:py-[60px] py-[30px] bg-[#f6fbf5]">
      <div className="container">
        <div className="mb-[15px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
          <Heading
            size="heading1"
            as="h2"
            className="capitalize text-center text-black"
          >
            Find us where you need us the most
          </Heading>
          <Text as="p" className="tracking-[3%] text-center">
            Designed for endless power and convenience.
          </Text>
        </div>
        <div className="w-full h-auto block relative z-0 lg:py-[30px] xl:py-[40px] 2xl:py-[60px] 3xl:py-[80px]">
          <div className="sm:absolute -z-1 inset-0 flex items-center justify-center max-sm:mb-[10px]">
            <Img
              src="img_powerbank_3.png"
              alt="Powerbankthree"
              width={260}
              height={496}
              className="w-[100px] lg:w-[140px] xl:w-[180px] 3xl:w-[260px] aspect-[210/400] max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-[15px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[40px] 3xl:gap-[60px] justify-between">
            <Suspense fallback={<div>Loading feed...</div>}>
              {specs?.map((item, index) => (
                <div
                  key={"specs" + index}
                  className="w-full max-w-[calc(50%-15px)] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px] xl:max-w-[376px] 2xl:max-w-[468px] 3xl:max-w-[540px]"
                >
                  <div className="w-full h-auto flex flex-wrap items-center self-stretch gap-[10px] xl:gap-[15px] 3xl:gap-[20px] bg-white shadow-[0_0_40px_0_rgba(0,0,0,0.08)] rounded-[16px] p-[10px] lg:p-[15px] xl:p-[20px] 3xl:p-[30px] transition-all duration-300 hover:bg-base1/20 hover:scale-95 max-sm:flex-col">
                    <div className="w-[40px] lg:w-[50px] xl:w-[60px] 2xl:w-[70px] 3xl:w-[90px] h-auto aspect-square rounded-[10px] bg-base1 p-[10px] flex items-center justify-center">
                      <Img
                        src={item.image}
                        alt={item.title}
                        width={45}
                        height={45}
                        className="aspect-square object-contain"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start max-sm:items-center">
                      <Heading
                        size="heading5"
                        as="h5"
                        className="mb-[2px] xl:mb-[4px] 3xl:mb-[6px] max-sm:text-center"
                      >
                        {item.title}
                      </Heading>
                      <Text
                        as="p"
                        className="leading-[1.2]! max-sm:text-center"
                      >
                        {item.description}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
