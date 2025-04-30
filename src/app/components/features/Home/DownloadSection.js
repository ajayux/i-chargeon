import Link from "next/link";
import { Heading } from "../../layout/Heading";
import { Img } from "../../layout/Img";
import { Text } from "../../layout/Text";

export default function DownloadSection() {
  return (
    <section className="w-full block">
      <div className="container">
        <div className="w-full h-auto bg-base2/10 rounded-[10px] px-[15px] lg:px-[20px] xl:px-[40px] 3xl:px-[80px] flex flex-wrap items-center">
          <div className="w-[660px] aspect-square overflow-hidden relative z-0">
            <Img
              src="img_12_2.png"
              width={342}
              height={592}
              alt="Image"
              className="w-[342px] max-w-full h-auto aspect-[342/612] absolute bottom-1/3 left-1/2 right-0 object-contain"
            />
            <Img
              src="img_128_1.png"
              width={342}
              height={602}
              alt="Image"
              className="w-[342px] max-w-full h-auto aspect-[342/612] absolute top-1/3 right-1/2 left-0 object-contain"
            />
          </div>
          <div className="w-[calc(100%-660px)] 3xl:pl-[140px]">
            <div>
              <Heading
                size="heading2"
                as="h3"
                className="font-normal! capitalize text-black [&>b]:font-medium mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
              >
                <b>Download the App &</b> <br />
                Stay Charged Anywhere!
              </Heading>
              <Text
                as="p"
                size="text1"
                className="text-justify mb-[15px] xl:mb-[20px] 3xl:mb-[40px]"
              >
                Never run out of battery again! Get instant access to power
                banks at your nearest location.
              </Text>
              <div className="flex gap-[6px]">
                <Link href="#">
                  <Img
                    src="img_group_1000004927_66x212.png"
                    alt="Image"
                    width={213}
                    height={66}
                    className="w-[142px] 2xl:w-[212px] h-auto aspect-[213/66] rounded-[12px] object-contain"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="download-gplay-1.png"
                    alt="Image"
                    width={213}
                    height={66}
                    className="w-[142px] 2xl:w-[212px] h-auto aspect-[213/66] rounded-[12px] object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
