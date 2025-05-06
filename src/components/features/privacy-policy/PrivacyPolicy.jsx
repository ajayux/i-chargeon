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
    title: "Where do I pick up and return power banks?",
    description:
      "Our iChargeON pick-up and drop-off points are at busy areas—cafés, shopping centers, train stations, airports, and so on. The app displays all available pick-up and drop-off points in real time, allowing you to select the most convenient location.",
  },
  {
    title: "How do we use your information?",
    description: `
      <p>Follow these steps to rent a power bank:</p>
      <ul>
        <li>Download our mobile app or visit a participating rental station.</li>
        <li>Register an account and provide payment details.</li>
        <li>Scan the QR code on the power bank or select one via the app.</li>
        <li>Confirm the rental agreement and unlock the power bank.</li>
        <li>Use the power bank and return it to any designated station when done.</li>
        <li>Ensure the power bank is properly inserted to end the rental session.</li>
      </ul>
    `,
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
];

export default function PrivacyPolicy() {
  return (
    <section className="w-full block 3xl:py-[120px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
      <div className="container">
        <div className="max-w-[768px] xl:max-w-[900px] 3xl:max-w-[1360px] mx-auto">
          <div className="mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
            <Heading
              size="heading1"
              as="h2"
              className="capitalize text-black mb-[10px]"
            >
              Policies
            </Heading>
            <Text as="p" className="text-[#2d2929]">
              We want you to know exactly how ichargeon services work and why we
              need your details. iChargeon our policy will help you continue
              using the app with peace of mind. It is a long established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to using 'Content here, content here', making it look like
              readable English.
            </Text>
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
                  <Heading
                    size="heading6"
                    as="h6"
                    className="xl:text-[14px] 2xl:text-[18px] 3xl:text-[22px] font-medium! text-black"
                  >
                    {item.title}
                  </Heading>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="typography"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
