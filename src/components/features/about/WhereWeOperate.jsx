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


export default function WhereWeOperate() {
    return (
        <div>
            <section className="w-full h-auto block 3xl:py-[120px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="2xl:w-[500px] w-[330px]">
                            <Heading
                                as="h2"
                                size="heading1"
                                className=" text-black mb-[5px] xl:mb-[10px] 3xl:mb-[15px] capitalize"
                            >
                                Where we operate
                            </Heading>
                            <Text
                                as="p"
                                size="text1"
                                className="text-justify mt-[15px] sm:mt-[25px] [&>b]:font-medium"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a  publishing passages.
                            </Text>
                        </div>
                        <div className="2xl:w-[calc(100%-500px)] w-[calc(100%-330px)]">
                            <div className="w-full 2xl:pl-[75px] pl-[50px]">

                                <div className="flex flex-wrap -mx-[5px] xl:-mx-[8px] 3xl:-mx-[10px]">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {chargingOptionsList.map((item, index) => (
                                            <div
                                                key={"listlightning" + index}
                                                className="w-1/2 2xs:w-1/2 sm:w-1/5 md:w-1/3 lg:w-1/3 p-[5px] xl:p-[8px] 3xl:p-[10px]"
                                            >
                                                <div className="group w-full h-auto flex items-center justify-center rounded-[8px] border border-[rgba(106,190,85,0.5)] bg-white backdrop-blur-[9px] 3xl:py-[25px] py-[10px] 3xl:px-[15px] px-[10px] hover:bg-[#6ABE55] transition-background duration-300">
                                                    <div className="flex items-center w-fit">
                                                        <Img
                                                            src="locIcon.svg"
                                                            alt="Image"
                                                            sizes="32px"
                                                            width="100"
                                                            height="100"
                                                            className="3xl:w-[32px] w-[21px] 3xl:h-[32px] h-[21px] object-cover group-hover:filter group-hover:invert group-hover:brightness-[0.33]"
                                                        />
                                                        <h5
                                                            className="3xl:text-[22px] 2xl:text-[16px] text-[14px] 3xl:w-[calc(100%-32px)] w-[calc(100%-21px)] 2xl:pl-[12px] pl-[8px] capitalize group-hover:text-white"
                                                        >
                                                            {item.title}
                                                        </h5>

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
        </div>
    )
}
