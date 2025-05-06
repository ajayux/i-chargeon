import React, { Suspense } from "react";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
import { LinkButton } from "@/components/layout/Button";

const chargingOptionsList = [
  { image: "img_fi_15551000.svg", title: "Lightning" },
  { image: "img_fi_4106371.svg", title: "USB-C" },
  { image: "img_calendar.svg", title: "Micro USB" },
];

export default function RentChargeSection() {
  return (
    <section className="w-full h-auto block 3xl:py-[140px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
      <div className="container">
        <div className="flex flex-wrap max-lg:flex-col-reverse">
          <div className="w-full lg:w-[420px] xl:w-[494px] 2xl:w-[576px] 3xl:w-[740px] rounded-[12px] overflow-hidden relative z-0 max-lg:aspect-video">
            <Img
              src="rent_img.jpg"
              alt="rent_img"
              fill
              sizes="740px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-[calc(100%-420px)] xl:w-[calc(100%-494px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-740px)] lg:pl-[30px] xl:pl-[60px] 2xl:pl-[60px] 3xl:px-[94px_40px] max-lg:mb-[15px] ">
            <div className="mb-[15px] lg:mb-[20px] xl:mb-[40px] 2xl:mb-[60px] 3xl:px-[94px">
              <Heading
                size="heading1"
                as="h2"
                className="capitalize text-black mb-[15px] 2xl:mb-[20px]"
              >
                Rent, Charge & Return
              </Heading>
              <Text
                as="p"
                size="text1"
                className="text-justify mb-[15px] sm:mb-[30px] 2xl:mb-[50px] [&>b]:font-medium"
              >
                <b>
                  Never struggle with a dead device again. Rent an ultra-fast
                  charging power bank in seconds using the iChargeON app.
                  Download the app to locate stations, rent chargers, and manage
                  returns.
                </b>
                <br />
                <br />
                Perfect for commuters, travellers, and busy professionals. Stay
                connected effortlessly, day or night. Charge your whole day with
                iChargeON.
              </Text>
              <LinkButton
                href="/about"
                rightIcon={
                  <Img
                    src="img_fi16182723.svg"
                    alt="Fi 16182723"
                    width={18}
                    height={18}
                    className="w-[10px] xl:w-[12px] 3xl:w-[16px] object-contain block"
                  />
                }
                className="min-w-[100px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[204px]"
              >
                Know More
              </LinkButton>
            </div>
            <div>
              <Heading
                as="h3"
                size="heading3"
                className="tracking-[3%] text-[#0c0c0c] mb-[5px] xl:mb-[10px] 3xl:mb-[15px]"
              >
                Attached Cables
              </Heading>
              <div className="flex flex-wrap -mx-[5px] xl:-mx-[10px] 3xl:-mx-[15px]">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {chargingOptionsList.map((item, index) => (
                    <div
                      key={"listlightning" + index}
                      className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-1/3 p-[5px] xl:p-[10px] 3xl:p-[15px]"
                    >
                      <div className="w-full h-auto aspect-square flex items-center justify-center rounded-[12px] bg-base2/20 px-[10px] hover:bg-base2/40 transition-background duration-300">
                        <div>
                          <Img
                            src={item.image}
                            alt={item.title}
                            width={20}
                            height={20}
                            className="w-[15px] xl:w-[18px] 3xl:w-[20px] h-auto mb-[5px] xl:mb-[10px] 3xl:mb[15px] mx-auto"
                          />
                          <Heading
                            size="heading5"
                            as="h5"
                            className="text-center"
                          >
                            {item.title}
                          </Heading>
                        </div>
                      </div>
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
