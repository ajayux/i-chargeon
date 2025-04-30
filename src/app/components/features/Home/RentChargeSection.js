import React, { Suspense } from "react";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";
import { Button } from "../../layout/Button";
import { Heading } from "../../layout/Heading";
// import { Heading, Img, Button, Text } from "../../layout";

const chargingOptionsList = [
  { lightningOne: "img_fi_15551000.svg", lightningTwo: "Lightning" },
  { lightningOne: "img_fi_4106371.svg", lightningTwo: "USB-C" },
  { lightningOne: "img_calendar.svg", lightningTwo: "Micro USB" },
];

export default function RentChargeSection() {
  return (
    <section className="w-full h-auto block 3xl:py-[140px] 2xl:py-[100px] lg:py-[80px] py-[40px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[468px] xl:w-[576px] 2xl:w-[676px] 3xl:w-[740px] rounded-[12px] overflow-hidden relative z-0">
            <Img
              src="img_image.png"
              alt="Image"
              fill
              sizes="740px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-[calc(100%-468px)] xl:w-[calc(100%-576px)] 2xl:w-[calc(100%-676px)] 3xl:w-[calc(100%-740px)] lg:pl-[20px] xl:pl-[40px] 2xl:pl-[60px] 3xl:px-[94px_40px]">
            <div className="mb-[94px] lg:mb-[20px] xl:mb-[40px] 2xl:mb-[60px] 3xl:px-[94px">
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
                className="text-justify mb-[30px] 2xl:mb-[50px] [&>b]:font-medium"
              >
                <b>
                  Find power banks at multiple locations, available 24/7.
                  Whether you&#39;re on the move or stationary, our network of
                  charging stations ensures that you&#39;re always powered up,
                  regardless of your location.
                </b>
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the an unknown printer took a
                galley of type and scrambled it indus standard dummy text ever
                since the , when to make a type specimen book.
              </Text>
              <Button
                rightIcon={
                  <Img
                    src="img_fi16182723.svg"
                    alt="Fi 16182723"
                    width={18}
                    height={18}
                    className="w-[10px] xl:w-[14px] 3xl:w-[18px] object-contain block"
                  />
                }
                className="max-w-[100px] sm:max-w-[120px] xl:max-w-[140px] 3xl:max-w-[204px]"
              >
                Know More
              </Button>
            </div>
            <div>
              <Heading
                as="h3"
                size="heading3"
                className="tracking-[3%] text-[#0c0c0c] mb-[10px] xl:mb-[15px] 3xl:mb-[20px]"
              >
                Attached Cables
              </Heading>
              <div className="flex flex-wrap -mx-[5px] xl:-mx-[10px] 3xl:-mx-[15px]">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {chargingOptionsList.map((d, index) => (
                    <div
                      key={"listlightning" + index}
                      className="w-1/3 p-[5px] xl:p-[10px] 3xl:p-[15px]"
                    >
                      <div className="w-full h-auto aspect-square flex items-center justify-center rounded-[12px] bg-base2/20 px-[10px]">
                        <div>
                          <Img
                            src={d.lightningOne}
                            alt={d.lightningTwo}
                            width={20}
                            height={20}
                            className="w-[20px] h-auto mb-[5px] xl:mb-[10px] 3xl:mb[15px] mx-auto"
                          />
                          <Heading
                            size="heading5"
                            as="h5"
                            className="text-center"
                          >
                            {d.lightningTwo}
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
