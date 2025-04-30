import { Suspense } from "react";
import { Heading } from "../../layout/Heading";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";

const specs = [
  {
    image: "img_fi_10018202.svg",
    title: "Fast Charging",
    description:
      "Our high-speed power banks ensure your device charges quickly.",
  },
  {
    image: "img_fi_10104619.svg",
    title: "Eco-Friendly",
    description:
      "We promote sustainable charging solutions by reducing e-waste.",
  },
  {
    image: "img_vector.svg",
    title: "Affordable Pricing",
    description: "Pay per use or choose a flexible subscription plan.",
  },
  {
    image: "img_fi_15374900.svg",
    title: "Travel Light",
    description:
      "Our high-speed power banks ensure your device charges quickly.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full block 3xl:py-[100px] 2xl:py-[80px] lg:py-[60px] py-[40px] bg-base1/10">
      <div className="container">
        <div className="mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
          <Heading
            size="heading1"
            as="h2"
            className="capitalize text-center text-black"
          >
            Why Choose Us
          </Heading>
          <Text as="p" className="tracking-[3%] text-center">
            Find power banks at multiple locations, available 24/7.
          </Text>
        </div>
        <div className="w-full h-auto block relative z-0 py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[60px] 3xl:py-[80px]">
          <div className="absolute z-0 inset-0 flex items-center justify-center">
            <Img
              src="img_powerbank_3.png"
              alt="Powerbankthree"
              width={260}
              height={496}
              className="w-[260px] h-[496px] max-w-full max-h-full object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-[15px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[40px] 3xl:gap-[60px] justify-between">
            <Suspense fallback={<div>Loading feed...</div>}>
              {specs?.map((item, index) => (
                <div
                  key={"specs" + index}
                  className="lg:max-w-[420px] xl:max-w-[468px] 2xl:max-w-[500px] 3xl:max-w-[540px]"
                >
                  <div className="w-full h-auto flex items-center self-stretch gap-[25px] bg-white shadow-[0_0_40px_0_rgba(0,0,0,0.08)] rounded-[16px] p-[15px] sm:p-[20px] xl:p-[25px] 3xl:p-[30px] transition-all duration-300 hover:bg-base2">
                    <div className="w-[90px] h-auto aspect-square rounded-[10px] bg-base1 p-[10px] flex items-center justify-center">
                      <Img
                        src={item.image}
                        alt={item.title}
                        width={45}
                        height={45}
                        className="aspect-square object-contain"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start gap-1 sm:gap-1 sm:self-stretch">
                      <Heading
                        size="heading5"
                        as="h5"
                        className="mb-[4px] 2xl:mb-[6px]"
                      >
                        {item.title}
                      </Heading>
                      <Text as="p" className="leading-[1.2]!">
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
