import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "How can I rent a power bank?",
    description:
      "Download the iChargeON app (iOS or Android) to locate a nearby rental station, scan the QR code on the station to pick up a fully charged power bank. When you’re done, return it to any of our stations.",
  },
  {
    title: "Where do I pick up and return power banks?",
    description:
      "Our iChargeON pick-up and drop-off points are at busy areas—cafés, shopping centers, train stations, airports, and so on. The app displays all available pick-up and drop-off points in real time, allowing you to select the most convenient location.",
  },
  {
    title: "Do I need to sign a contract or subscription?",
    description:
      "No long-term commitment is needed. A small deposit will be required, and you only pay for what you use. Sign up with your email, add a payment method, and you're good to rent on the go—no subscription required.",
  },
  {
    title: "Are the power banks safe to use?",
    description:
      "Yes. Our power banks are internationally certified to safety standards. They have surge protection built in, temperature control, and short-circuit prevention. We also conduct regular maintenance checks on each unit.",
  },
  {
    title: "What if I need assistance or feedback?",
    description:
      "Contact 'Help & Support' in the application or write to us at our email. We have a customer care team 24/7 to help you with technical, billing, or general questions.",
  },
];

export default function FAQInfoSection() {
  return (
    <section className="w-full block 3xl:py-[120px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
      <div className="container">
        <div className="max-w-[768px] xl:max-w-[900px] 3xl:max-w-[1360px] mx-auto">
          <div className="mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
            <Heading size="heading1" as="h2" className="capitalize text-black">
              Frequently Asked Questions
            </Heading>
          </div>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-b border-[#d3d3d3] py-[5px] xl:py-[10px] 3xl:py-[15px] last:border-b"
              >
                <AccordionTrigger>
                  <Heading size="heading6" as="h6" className="xl:text-[14px] 2xl:text-[18px] 3xl:text-[22px] font-medium! text-black">
                    {item.title}
                  </Heading>
                </AccordionTrigger>
                <AccordionContent>
                  <Text as="p" className="max-w-full text-[#2d2929]">
                    {item.description}
                  </Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
