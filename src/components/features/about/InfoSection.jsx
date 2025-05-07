import { Suspense } from "react";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";

const chargingOptionsList = [
  { image: "img_fi_15551000.svg", title: "Lightning" },
  { image: "img_fi_4106371.svg", title: "USB-C" },
  { image: "img_calendar.svg", title: "Micro USB" },
];

const visionMissionList = [
  {
    image: "img_fi_3775203.svg",
    title: "Mission",
    description:
      "To provide fast, accessible, and eco-friendly mobile charging solutions that keep people powered up wherever life takes them.",
  },
  {
    image: "img_fi_978022.svg",
    title: "Vision",
    description:
      "To be the most trusted and widely used power bank rental network, empowering mobile users with uninterrupted connectivity across cities and communities.",
  },
];

export default function InfoSection() {
  return (
    <section className="w-full h-auto block 3xl:py-[100px] 2xl:py-[80px] lg:py-[60px] py-[30px]">
      <div className="container">
        <div>
          <Heading
            size="heading1"
            as="h2"
            className="capitalize text-black mb-[15px] 2xl:mb-[20px]"
          >
            Rent, Charge & Return
          </Heading>
          <div className="typography [&>p>b]:font-medium [&>ul]:mb-[15px] lg:[&>ul]:mb-[30px]">
            <p>
              <b>
                In today's always-connected world, a dead phone battery can
                quickly become a major inconvenience—whether you're navigating a
                new city, attending meetings, or waiting for an important call.
              </b>
            </p>
            <p>
              iChargeOn is designed to eliminate that problem with an
              easy-to-use, app-based power bank rental service that keeps you
              powered up wherever you are. With a quick registration, a one-time
              refundable deposit, and flexible rental packages, users can scan a
              QR code at any iChargeOn station to instantly access a fully
              charged power bank.
            </p>
          </div>
        </div>
        <div className="w-full h-auto lg:aspect-[1080/320] relative z-0 overflow-hidden 3xl:p-[60px] xl:p-[40px] lg:p-[20px] p-[20px] rounded-[8px] 3xl:rounded-[12px] flex items-center my-[15px] 3xl:my-[25px]">
          <Img
            src="img_image.png"
            alt="Image"
            fill
            sizes="1640px"
            className="object-cover -z-1"
          />
          <div className="w-full">
            <Heading
              as="h3"
              size="heading3"
              className="tracking-[1px] capitalize text-white mb-[5px] xl:mb-[10px] 3xl:mb-[15px]"
            >
              Attached Cables
            </Heading>
            <div className="flex flex-wrap -mx-[3px] xl:-mx-[4px] 3xl:-mx-[6px]">
              <Suspense fallback={<div>Loading feed...</div>}>
                {chargingOptionsList.map((item, index) => (
                  <div
                    key={"listlightning" + index}
                    className="w-1/2 3xs:w-1/3 sm:w-1/5 md:w-1/6 lg:w-1/7 p-[3px] xl:p-[4px] 3xl:p-[6px]"
                  >
                    <div className="w-full h-auto aspect-square flex items-center justify-center rounded-[12px] bg-white px-[10px] hover:bg-white/80 transition-background duration-300">
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
        <div className="typography [&>ul]:mb-[15px] lg:[&>ul]:mb-[30px]">
          <p>
            Our network of charging stations is strategically located in
            high-traffic areas such as shopping malls, cafés, transit hubs, and
            entertainment venues, making it easy to rent and return power banks
            on the go. Whether you're out for a few minutes or a full day,
            iChargeOn offers a seamless solution to keep your devices charged
            without the need to carry extra equipment. We're here to support
            your mobile lifestyle with convenience, reliability, and
            uninterrupted connectivity.
          </p>
        </div>
        <div className="w-full 3xl:mt-[60px] xl:mt-[40px] mt-[20px]">
          <div className="flex flex-wrap -mx-[5px] xl:-mx-[8px] 3xl:-mx-[10px]">
            <Suspense fallback={<div>Loading feed...</div>}>
              {visionMissionList.map((item, index) => (
                <div
                  key={"listlightning" + index}
                  className="w-full 2xs:w-1/1 md:w-1/2 p-[5px] xl:p-[8px] 3xl:p-[10px]"
                >
                  <div className="w-full h-full flex items-center rounded-[16px] border-b-2 border-b-[#6ABE55] bg-[rgba(205,205,205,0.18)] backdrop-blur-[9px] 2xl:py-[50px] xl:py-[35px] lg:py-[25px] py-[15px] 2xl:px-[65px] xl:px-[40px] lg:px-[30px] px-[20px] transform transition duration-[600ms] hover:translate-y-[10px]">
                    <div>
                      <Img
                        src={item.image}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-[40px] md:w-[50px] 2xl:w-[65px] 3xl:w-[75px] h-auto mb-[15px] xl:mb-[20px] 3xl:mb-[25px]"
                      />
                      <Heading
                        as="h2"
                        sizes="heading1"
                        className="3xl:text-[62px] 2xl:text-[48px] xl:text-[40px] font-medium! capitalize mb-[5px] 3xl:mb-[10px] "
                      >
                        {item.title}
                      </Heading>
                      <Text as="p" className="font-medium text-[#2d2929]">
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
