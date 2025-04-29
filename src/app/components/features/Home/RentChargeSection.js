import { Heading, Img, Button, Text } from "../../components";
import React, { Suspense } from "react";

const chargingOptionsList = [
  { lightningOne: "img_fi_15551000.svg", lightningTwo: "Lightning" },
  { lightningOne: "img_fi_4106371.svg", lightningTwo: "USB-C" },
  { lightningOne: "img_calendar.svg", lightningTwo: "Micro USB" },
];

export default function RentChargeSection() {
  return (
      <section className="flex justify-center px-14 md:px-5 sm:px-4">
        <div className="flex w-[90%] items-center justify-between gap-5 lg:w-full md:w-full md:flex-col">
          <Img
            src="img_image.png"
            width={736}
            height={860}
            alt="Image"
            className="h-[860px] w-[46%] rounded-[12px] object-contain md:w-full"
          />
          <div className="mr-12 flex w-[48%] flex-col gap-[88px] lg:gap-[88px] md:mr-0 md:w-full md:gap-[66px] sm:gap-11">
            <div className="flex flex-col items-start">
              <Text
                as="h1-xl"
                className="text-[65px] font-semibold !text-black-900 lg:text-[48px] md:text-[48px]"
              >
                <span>R</span>
                <span>ent,&nbsp;</span>
                <span>C</span>
                <span>harge &&nbsp;</span>
                <span>Return</span>
              </Text>
              <Text
                as="p"
                className="mt-1.5 w-full text-justify text-[19px] font-normal leading-[30px] tracking-[0.57px] !text-gray-900 lg:text-[16px]"
              >
                <span className="text-[20px] font-medium text-black-900_01">
                  <>
                    Find power banks at multiple locations, available 24/7.
                    Whether you&#39;re on the move or stationary, our network of
                    charging stations ensures that you&#39;re always powered up,
                    regardless of your location. <br />
                  </>
                </span>
                <span className="text-gray-900">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-[20px] text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the an unknown
                  printer took a galley of type and scrambled it indus standard
                  dummy text ever since the , when to make a type specimen book.
                </span>
              </Text>
              <Button
                shape="round"
                rightIcon={
                  <Img
                    src="img_fi16182723.svg"
                    width={38}
                    height={38}
                    alt="Fi 16182723"
                    className="h-[38px] w-[38px] object-contain"
                  />
                }
                className="mt-[52px] min-w-[204px] gap-0.5 rounded-[12px] border"
              >
                Know More
              </Button>
            </div>
            <div className="flex flex-col items-start gap-[26px]">
              <Heading
                as="h1"
                className="text-[30px] font-semibold tracking-[0.90px] !text-black-900_01 lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                Attached Cables
              </Heading>
              <div className="flex gap-[42px] self-stretch md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {chargingOptionsList.map((d, index) => (
                    <div
                      key={"listlightning" + index}
                      className="flex w-[224px] flex-col items-start gap-4 rounded-[12px] bg-blue_gray-100_2d px-14 py-12 md:p-5 sm:p-4"
                    >
                      <Img
                        src={d.lightningOne}
                        width={64}
                        height={64}
                        alt="Lightning"
                        className="ml-5 mt-2 h-[64px] w-[64px] md:ml-0"
                      />
                      <Heading
                        size="text6xl"
                        as="h2"
                        className="text-[25px] font-medium lg:text-[21px]"
                      >
                        {d.lightningTwo}
                      </Heading>
                    </div>
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
