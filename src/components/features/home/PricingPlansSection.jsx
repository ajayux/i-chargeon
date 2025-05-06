import { Suspense } from "react";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
import { Img } from "../../layout/Img";

const pricingPlansList = [
  {
    title: "Hourly Plan",
    description: "(Best for short-term use)",
    listing: ["₹5 per hour", "1 swap included", "Pay only for what you use"],
  },
  {
    title: "Weekly Plan",
    description: "(Ideal for travelers & regular users)",
    listing: ["₹10 per hour", "2 swap included", "Stay charged all week"],
  },
  {
    title: "Monthly Plan",
    description: "(Perfect for frequent users)",
    listing: [
      "₹50 per hour",
      "Unlimited included",
      "Includes Weekly Plan benefits",
      "Best value for long-term users!",
    ],
  },
];

export default function PricingPlansSection() {
  return (
    <section className="w-full block 3xl:py-[140px] 2xl:py-[110px] lg:py-[90px] py-[30px]">
      <div className="container">
        <div className="mb-[15px] lg:mb-[20px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px]">
          <Heading
            size="heading1"
            as="h2"
            className="capitalize text-center text-black"
          >
            Choose Your Charging Plan
          </Heading>
          <Text as="p" className="tracking-[3%] text-center">
            Flexible & Affordable Pricing for Every Need!
          </Text>
        </div>
        <div className="flex flex-wrap -mx-[5px] lg:-mx-[10px] xl:-mx-[15px] 3xl:-mx-[25px]">
          <Suspense fallback={<div>Loading feed...</div>}>
            {pricingPlansList.map((item, index) => (
              <div
                key={"pricingPlansList" + index}
                className="w-full sm:w-1/3 p-[5px] lg:p-[10px] xl:p-[15px] 3xl:p-[25px]"
              >
                <div className="group w-full h-full block border-[1px] border-solid border-base2 rounded-[12px] p-[15px_10px] lg:p-[30px_20px] xl:p-[40px_30px] 2xl:p-[50px_30px] 3xl:p-[60px_40px] transition-all duration-300 hover:bg-base1">
                  <div className="border-b-[1px] border-solid border-black/20">
                    <Heading
                      as="h3"
                      size="heading3"
                      className="lg:mb-[5px] group-hover:text-white"
                    >
                      {item.title}
                    </Heading>
                    <Text
                      as="p"
                      className="tracking-[3%] mb-[15px] lg:mb-[20px] 3xl:mb-[30px] group-hover:text-white"
                    >
                      {item.description}
                    </Text>
                  </div>
                  <ul className="my-[10px] lg:my-[15px] xl:my-[25px] 3xl:my-[35px] group-hover:text-white">
                    {item.listing?.map((listingItem, listingIndex) => (
                      <li
                        key={"pricingPlansListListing" + listingIndex}
                        className="text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-black relative z-0 pl-[15px] xl:pl-[20px] 3xl:pl-[30px] my-[5px] xl:my-[15px] 3xl:my-[20px] block group-hover:text-white cursor-pointer"
                      >
                        <Img
                          src={"img_settings.svg"}
                          alt="Included"
                          width={18}
                          height={18}
                          className="w-[10px] xl:w-[14px] 3xl:w-[18px] absolute z-0 top-[3px] lg:top-[1px] 2xl:top-[5px] left-0 filter transition duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(96%)_sepia(0%)_saturate(0%)_hue-rotate(85deg)_brightness(104%)_contrast(104%)]"
                        />
                        {listingItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
