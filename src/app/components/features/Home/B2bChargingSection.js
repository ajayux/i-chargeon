import { Suspense } from "react";
import { Heading } from "../../layout/Heading";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";

const specs = [
  {
    title: "Seamless set up",
  },
  {
    title: "Zero Deposit for B to B users",
  },
  {
    title: "Ideal For Organizations",
  },
];

export default function B2bChargingSection() {
  return (
    <section className="w-full block 3xl:py-[160px_70px] 2xl:py-[120px_50px] lg:py-[80px_30px] py-[40px_20px]">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-[calc(100%-768px)] pr-[20px] xl:pr-[30px] 3xl:pr-[50px]">
            <Heading
              size="heading1"
              as="h2"
              className="capitalize text-black mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
            >
              Hassle-Free Charging for Your Organization
            </Heading>
            <Text as="p" size="text1" className="text-justify">
              Bring smart charging to your workplace. With our{" "}
              <b>B2B power bank rental solution</b>, companies can install
              dedicated power bank stations right within their office
              premises—making device charging effortless for employees and
              visitors alike.
              <br />
              Unlike the individual rental model, there’s no initial deposit
              required for users under the B2B program. This makes the
              experience smoother, faster, and more accessible
              <br />
            </Text>
          </div>
          <div className="w-[768px]">
            <div className="w-full h-auto flex items-center relative z-0">
              <Img
                src="b2b_img_1.png"
                alt="Splash"
                width={445}
                height={417}
                className="w-[445px] aspect-square object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="w-[calc(100%-445px)] flex flex-col items-start">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {specs?.map((item, index) => (
                    <div key={"specs" + index} className="[&:nth-child(even)]:translate-x-[5px] xl:[&:nth-child(even)]:translate-x-[20px] 3xl:[&:nth-child(even)]:translate-x-[35px] p-[6px] xl:p-[10px] 3xl:p-[15px] hover:-translate-x-[15px]! transition-transform duration-300">
                      <Text
                        as="p"
                        size="text1"
                        className="max-w-[340px] whitespace-nowrap text-ellipsis font-semibold text-white rounded-[20px] p-[15px_30px] bg-linear-to-l from-[#39FF14] to-[#070208]"
                      >
                        {item.title}
                      </Text>
                    </div>
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
