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

function PricingPlan({
  planTitle,
  planSubtitle,
  planIcon,
  planPrice,
  swapIcon,
  swapText,
  p1swapincluded,
  p1swapincluded1,
  p1swapincluded2,
  usageText,
}) {
  return (
    <div
      className={`flex flex-col w-[484px] px-[42px] py-[66px] lg:py-8 md:p-5 sm:p-4 border border-solid rounded-[12px]`}
    >
      <div className="flex flex-col items-start self-stretch">
        {!!planTitle ? (
          <Heading
            size="heading6xl"
            as="h4"
            className="text-[30px] font-semibold"
          >
            {planTitle}
          </Heading>
        ) : null}
        {!!planSubtitle ? (
          <Heading
            as="p"
            className="text-[20px] font-normal tracking-[0.60px] !text-gray-900_01"
          >
            {planSubtitle}
          </Heading>
        ) : null}
      </div>
      <div className="mt-[26px] h-px self-stretch bg-black-900_2d" />
      <div className="mb-[72px] mt-[50px] flex flex-col gap-[30px] self-stretch">
        <div className="flex items-center gap-[18px]">
          {!!planIcon ? (
            <Img
              src={planIcon}
              width={26}
              height={28}
              alt="5 Per Hour"
              className="h-[28px] w-[26px]"
            />
          ) : null}
          {!!planPrice ? (
            <Heading
              size="text5xl"
              as="p"
              className="text-[22px] font-medium capitalize tracking-[0.66px]"
            >
              <span className="font-semibold">₹5</span>
              <span>&nbsp;</span>
              <span className="font-normal">per hour</span>
            </Heading>
          ) : null}
        </div>
        <div className="flex items-center gap-[18px]">
          {!!swapIcon ? (
            <Img
              src={swapIcon}
              width={26}
              height={28}
              alt="1 Swap Included"
              className="h-[28px] w-[26px]"
            />
          ) : null}
          {!!swapText ? (
            <Heading
              size="text5xl"
              as="p"
              className="text-[22px] font-medium capitalize tracking-[0.66px]"
            >
              <span className="font-semibold">1 swap</span>
              <span>&nbsp;</span>
              <span className="font-normal">included</span>
            </Heading>
          ) : null}
        </div>
        <div>
          <div className="flex items-center">
            <div className="flex w-[10%] flex-col">
              <div className="mx-1 flex flex-col items-start">
                {!!p1swapincluded ? (
                  <Img
                    src={p1swapincluded}
                    width={4}
                    height={8}
                    alt="1 Swap Included"
                    className="relative z-10 ml-1 h-[8px]"
                  />
                ) : null}
                {!!p1swapincluded1 ? (
                  <Img
                    src={p1swapincluded1}
                    width={16}
                    height={16}
                    alt="1 Swap Included"
                    className="h-[16px] w-[16px]"
                  />
                ) : null}
              </div>
              {!!p1swapincluded2 ? (
                <Img
                  src={p1swapincluded2}
                  width={26}
                  height={24}
                  alt="1 Swap Included"
                  className="relative z-[11] mt-[-20px] h-[24px] w-[26px]"
                />
              ) : null}
            </div>
            {!!usageText ? (
              <Heading
                size="text5xl"
                as="p"
                className="text-[22px] font-normal capitalize tracking-[0.66px]"
              >
                {usageText}
              </Heading>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingPlansSection() {
  return (
    <section className="w-full block 3xl:py-[160px_70px] 2xl:py-[120px_50px] lg:py-[80px_30px] py-[40px_20px]">
      <div className="container">
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
        <div className="flex flex-wrap">
          <Suspense fallback={<div>Loading feed...</div>}>
            {pricingPlansList.map((d, index) => (
              <PricingPlan
                {...d}
                key={"listhourlyplan" + index}
                className="border-blue_gray-100"
              />
            ))}
          </Suspense>
        </div>

        {/* <div className="flex flex-wrap -mx-[10px] xl:-mx-[15px] 3xl:-mx-[25px]">
          <Suspense fallback={<div>Loading feed...</div>}>
            {pricingPlansList.map((item, index) => (
              <div
                key={"pricingPlansList" + index}
                className="w-1/3 p-[10px] xl:p-[15px] 3xl:p-[25px]"
              >
                <div className="w-full h-auto block border-[1px] border-solid border-base2 rounded-[12px] 3xl:p-[60px_40px]">
                  <div
                  className="border-b-[1px] border-solid border-"
                  >
                    <Heading as="h3" size="heading3" className="mb-[5px] lg:mb-[10px]">
                      {item.title}
                    </Heading>
                    <Text as="p" className="tracking-[3%] text-center mb-[15px] lg:mb-[20px] 3xl:mb-[30px]">
                      {item.description}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </Suspense>
        </div> */}
      </div>
    </section>
  );
}
x