import EnquiryForm from "@/components/common/EnquiryForm";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";

const socialmedia = [
  {
    href: "#",
    alt: "facebook",
    image: "contact_facebook.svg",
  },
  {
    href: "#",
    alt: "youtube",
    image: "contact_youtube.svg",
  },
  {
    href: "#",
    alt: "insta",
    image: "contact_insta.svg",
  },
  {
    href: "#",
    alt: "linkedin",
    image: "contact_linkedin.svg",
  },
  {
    href: "#",
    alt: "x",
    image: "contact_x.svg",
  },
];

function ContactBx({ image, title, children }) {
  return (
    <div className="w-full h-auto flex flex-wrap items-center gap-[10px] xl:gap-[20px] 3xl:gap-[30px] bg-white rounded-[12px] p-[10px] xl:p-[10px_15px] 3xl:p-[20px_25px] border-[1px] border-solid border-[#e6e6e6] transition-all duration-300 hover:bg-base1/20 hover:scale-95 max-sm:flex-col">
      <div className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto aspect-square rounded-[10px] bg-base1 p-[10px] flex items-center justify-center">
        <Img
          src={image}
          alt={title}
          width={30}
          height={30}
          className="aspect-square object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col items-start max-sm:items-center">
        <Heading
          size="heading6"
          as="h6"
          className="capitalize text-black mb-[2px] 3xl:mb-[4px] max-sm:text-center"
        >
          {title}
        </Heading>
        <Text as="p" size="text2" className="leading-[1.2]! max-sm:text-center">
          {children}
        </Text>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="w-full block 3xl:py-[120px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-420px)] 3xl:w-[calc(100%-768px)] lg:pr-[60px] xl:pr-[115px] 3xl:pr-[50px] max-lg:mb-[30px]">
            <Heading
              size="heading1"
              as="h2"
              className="capitalize text-black mb-[4px] xl:mb-[6px] 3xl:mb-[10px] max-lg:text-center"
            >
              Get in touch with us
            </Heading>
            <Text
              as="p"
              size="text1"
              className="text-justify mb-[10px] xl:mb-[15px] 3xl:mb-[20px] max-lg:text-center"
            >
              We’re here to help you stay connected—anytime, anywhere. Whether
              you have a question about our service, need support with a rental,
              or want to share your feedback, the iChargeOn team is ready to
              assist you.
            </Text>
            <div className="flex flex-wrap -mx-[4px] xl:-mx-[6px] 3xl:-mx-[10px] mb-[15px] xl:mb-[20px] 3xl:mb-[40px]">
              <div className="w-full lg:w-1/2 p-[4px] xl:p-[6px] 3xl:p-[10px]">
                <ContactBx image="icon-phone.svg" title="contact">
                  <a
                    href="tel:+919605903388"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="tel"
                    className="hover:text-base1"
                  >
                    +91 9605903388
                  </a>
                </ContactBx>
              </div>
              <div className="w-full lg:w-1/2 p-[4px] xl:p-[6px] 3xl:p-[10px]">
                <ContactBx image="icon-mail.svg" title="email">
                  <a
                    href="mailto:ichargeon@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="tel"
                    className="hover:text-base1"
                  >
                    ichargeon@gmail.com
                  </a>
                </ContactBx>
              </div>
              <div className="w-full p-[4px] xl:p-[6px] 3xl:p-[10px]">
                <ContactBx image="icon-location.svg" title="address">
                  Ichargeon, 30/1410, Mooleppadam Road, Vazhakkala, Kakkanad,
                  Kochi- 682030
                </ContactBx>
              </div>
            </div>
            <div>
              <div className="flex items-center self-center gap-[4px] lg:gap-[6px] xl:gap-[8px] 3xl:gap-[13px] max-sm:hidden">
                <Heading
                  size="heading5"
                  as="h5"
                  className="leading-none tracking-tight capitalize font-normal! text-black mr-[20px] max-lg:text-center"
                >
                  Social Media
                </Heading>
                {socialmedia.map((item, index) => (
                  <a
                    key={`socialmedia-${index}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="social"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Img
                      src={item.image}
                      alt={item.alt}
                      width={38}
                      height={38}
                      className="w-[22px] xl:w-[28px] 3xl:w-[48px] aspect-square rounded-full transition-all duration-300 hover:[filter:brightness(0)_saturate(100%)_invert(69%)_sepia(37%)_saturate(643%)_hue-rotate(62deg)_brightness(91%)_contrast(83%)]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[320px] xl:w-[420px] 3xl:w-[768px]">
            <div className="w-full h-auto block bg-base1/10 p-[20px_20px] lg:p-[20px_15px] xl:p-[35px_30px] 3xl:p-[55px_45px] rounded-[10px] 3xl:rounded-[16px]">
              <Heading
                size="heading2"
                as="h2"
                className="3xl:text-[50px]! capitalize text-black mb-[10px] xl:mb-[15px] 3xl:mb-[20px] max-lg:text-center"
              >
                Enquire Now
              </Heading>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
