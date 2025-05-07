import React, { Suspense } from "react";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";

const chargingOptionsList = [
  { title: "Edappally" },
  { title: "Kakkanad" },
  { title: "Palarivattom" },
  { title: "Kaloor" },
  { title: "MG Road" },
  { title: "Vytilla" },
  { title: "Aluva" },
  { title: "Vazhakala" },
  { title: "Kalamassery" },
];

export default function OperateSection() {
  return (
    <section className="w-full h-auto block 3xl:py-[95px] 2xl:py-[80px] lg:py-[55px] py-[30px] bg-[rgba(106,190,85,0.06)]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="3xl:w-[500px] xl:w-[360px] lg:w-[210px] w-full">
            <Heading
              as="h2"
              size="heading1"
              className="leading-none! capitalize text-black mb-[10px] xl:mb-[15px] 3xl:mb-[20px]"
            >
              Where we operate
            </Heading>
            <Text as="p" size="text1" className="text-justify">
              iChargeOn stations are located at malls, cafes, transit points,
              and other high-traffic public spaces—making mobile charging
              available wherever you need it most. We’re rapidly expanding to
              serve more cities across the country.
            </Text>
          </div>
          <div className="3xl:w-[calc(100%-500px)] xl:w-[calc(100%-360px)] lg:w-[calc(100%-210px)] w-full 3xl:pl-[120px] xl:pl-[80px] lg:pl-[40px]">
            <div className="flex flex-wrap -mx-[5px] xl:-mx-[8px] 3xl:-mx-[10px]">
              <Suspense fallback={<div>Loading feed...</div>}>
                {chargingOptionsList.map((item, index) => (
                  <div
                    key={"listlightning" + index}
                    className="w-1/2 2xs:w-1/3 sm:w-1/4 md:w-1/3 lg:w-1/3 p-[5px] xl:p-[8px] 3xl:p-[10px]"
                  >
                    <div className="group w-full h-auto flex items-center justify-center rounded-[8px] border border-[rgba(106,190,85,0.5)] bg-white backdrop-blur-[9px] 3xl:p-[25px_15px] xl:p-[20px_15px] p-[15px_10px] cursor-pointer hover:bg-base1 transition-background duration-300">
                      <div className="flex items-center">
                        <Img
                          src="locIcon.svg"
                          alt="Image"
                          width="24"
                          height="24"
                          className="3xl:w-[24px] xl:w-[16px] w-[14px] h-auto object-cover group-hover:filter group-hover:invert group-hover:brightness-[0.33]"
                        />
                        <div className="3xl:w-[calc(100%-24px)] xl:w-[calc(100%-16px)] w-[calc(100%-14px)] 3xl:pl-[15px] xl:pl-[10px] pl-[8px]">
                          <Heading
                            as="h6"
                            size="heading6"
                            className="leading-none font-medium! capitalize text-black group-hover:text-white"
                          >
                            {item.title}
                          </Heading>
                        </div>
                      </div>
                    </div>
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
