"use client";
import Link from "next/link";
import { Heading } from "../../layout/Heading";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

function DownloadButton({ href, image }) {
  return (
    <a href={href} target="_blank" aria-label="app">
      <Img
        src={image}
        alt="download"
        width={212}
        height={72}
        className="w-[120px] xl:w-[142px] 3xl:w-[212px] h-auto aspect-[140/48] object-contain hover:scale-105 transition-transform duration-300"
      />
    </a>
  );
}

export default function DownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="w-full block">
      <div className="container">
        <div className="w-full h-auto bg-base2/10 rounded-[10px] px-[15px] lg:px-[30px] xl:px-[50px] 3xl:px-[80px] flex flex-wrap items-center">
          <div
            ref={ref}
            className="w-[220px] lg:w-[376px] xl:w-[430px] 3xl:w-[660px] aspect-square overflow-hidden relative z-0 mx-auto max-lg:mb-[10px]"
          >
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: "35%" }}
              viewport={{ once: false, amount: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 1,
                delay: 0.6,
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-1/3 left-1/2 right-0 "
            >
              <Img
                src="img_12_2.png"
                width={342}
                height={592}
                alt="Image"
                className="w-[120px] lg:w-[160px] xl:w-[200px] 3xl:w-[342px] max-w-full h-auto aspect-[342/612] object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: "-35%" }}
              viewport={{ once: false, amount: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 1,
                delay: 0.6,
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/3 right-1/2 left-0"
            >
              <Img
                src="img_128_1.png"
                width={342}
                height={602}
                alt="Image"
                className="w-[120px] lg:w-[160px] xl:w-[200px] 3xl:w-[342px] max-w-full h-auto aspect-[342/612] object-contain"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-[calc(100%-376px)] xl:w-[calc(100%-430px)] 3xl:w-[calc(100%-660px)] lg:pl-[60px] xl:pl-[100px] 3xl:pl-[140px]">
            <div>
              <Heading
                size="heading2"
                as="h3"
                className="font-normal! capitalize text-black [&>b]:font-medium mb-[15px] xl:mb-[20px] 3xl:mb-[30px] max-lg:text-center"
              >
                <b>Download the App &</b> <br />
                Stay Charged Anywhere!
              </Heading>
              <Text
                as="p"
                size="text1"
                className="text-justify mb-[15px] xl:mb-[20px] 3xl:mb-[40px] max-lg:text-center"
              >
                Find nearby charging hubs easily and rent a small, pocket-sized
                power bank. Book in one click and scan a QR code to start
                charging instantly.
              </Text>
              <div className="flex gap-[4px] 3xl:gap-[6px] max-lg:justify-center max-lg:mb-[20px]">
                <DownloadButton
                  href="#"
                  image="img_group_1000004927_66x212.png"
                />
                <DownloadButton href="#" image="download-gplay-1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
