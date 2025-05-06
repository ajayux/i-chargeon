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
  { image: "img_fi_3775203.svg", title: "Mission", description: "To provide a seamless, affordable, and widely available mobile charging solution that keeps people connected at all times." },
  { image: "img_fi_978022.svg", title: "Vision", description: "To build a world where no one has to worry about a dead phone battery again!" },
];


export default function InfoSection() {
  return (
    <section className="w-full h-auto block 3xl:py-[120px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
      <div className="container">
        <div className="w-full mb-[15px] lg:mb-[20px] xl:mb-[40px] 2xl:mb-[60px] 3xl:px-[94px]">
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
              Find power banks at multiple locations, available 24/7. Whether you're on the move or stationary, our network of charging stations ensures that you're always powered up, regardless of your location.
            </b>
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the an unknown printer took a galley of type and scrambled it indus standard dummy text ever since the typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </div>
        <div className="w-full relative overflow-hidden 2xl:px-[50px] md:px-[35px] px-[20px] 2xl:py-[100px] md:py-[70px] py-[50px]">
          <Img
            src="img_image.png"
            alt="Image"
            fill
            // sizes="1645px"
            className="object-cover -z-1"
          />
          <div>
            <Heading
              as="h3"
              size="heading3"
              className="tracking-[3px] capitalize text-white mb-[5px] xl:mb-[10px] 3xl:mb-[15px]"
            >
              Attached Cables
            </Heading>
            <div className="flex flex-wrap -mx-[5px] xl:-mx-[10px] 3xl:-mx-[12px]">
              <Suspense fallback={<div>Loading feed...</div>}>
                {chargingOptionsList.map((item, index) => (
                  <div
                    key={"listlightning" + index}
                    className="w-1/2 3xs:w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/7 p-[5px] xl:p-[10px] 3xl:p-[12px]"
                  >
                    <div className="w-full h-auto aspect-square flex items-center justify-center rounded-[12px] bg-white px-[10px] hover:bg-base2/40 transition-background duration-300">
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
        <div className="w-full">
          <Text
            as="p"
            size="text1"
            className="text-justify mt-[15px] sm:mt-[25px] [&>b]:font-medium"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the an unknown printer took a galley of type and scrambled it indus standard dummy text ever since the , when  to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </div>
        <div className="w-full pt-[100px]">
          <div className="flex flex-wrap -mx-[5px] xl:-mx-[8px] 3xl:-mx-[10px]">
            <Suspense fallback={<div>Loading feed...</div>}>
              {visionMissionList.map((item, index) => (
                <div
                  key={"listlightning" + index}
                  className="w-full 2xs:w-1/2 sm:w-1/2 p-[5px] xl:p-[8px] 3xl:p-[10px]"
                >
                  <div className="w-full h-full flex items-center justify-center rounded-[16px] border-b-2 border-b-[#6ABE55] bg-[rgba(205,205,205,0.18)] backdrop-blur-[9px] 2xl:py-[50px] xl:py-[35px] py-[25px] 2xl:px-[65px] xl:px-[40px] px-[30px] transform transition duration-[600ms] hover:translate-y-[10px]">
                    <div>
                      <Img
                        src={item.image}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-[50px] 2xl:w-[65px] 3xl:w-[75px] h-auto mb-[15px] xl:mb-[20px] 3xl:mb[25px]"
                      />
                      <Heading
                        className="mb-[15px] capitalize 3xl:text-[62px] 2xl:text-[50px] xl:text-[40px] text-[30px]"
                      >
                        {item.title}
                      </Heading>
                      <Text
                        as="p"
                        className="text-[#2D2929] font-medium w-full"
                      >
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
  )
}
