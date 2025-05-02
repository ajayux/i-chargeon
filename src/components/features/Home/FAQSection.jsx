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
    title: "What is the capacity of a iChargeon powerbank?",
    description:
      "When you rent a powerbank, the App will display the time of rental, the duration of your use and the total cost. In case you don't use the App, this information will not be given.",
  },
  {
    title:
      "How do I hand in a powerbank if the charging station is completely full?",
    description:
      "When you rent a powerbank, the App will display the time of rental, the duration of your use and the total cost. In case you don't use the App, this information will not be given.",
  },
  {
    title: "What is the most I will be charged for using the service?",
    description:
      "When you rent a powerbank, the App will display the time of rental, the duration of your use and the total cost. In case you don't use the App, this information will not be given.",
  },
  {
    title: "How long until my phone is fully charged?",
    description:
      "When you rent a powerbank, the App will display the time of rental, the duration of your use and the total cost. In case you don't use the App, this information will not be given.",
  },
  {
    title: "How much does it cost to rent an iChargeon power bank?",
    description:
      "When you rent a powerbank, the App will display the time of rental, the duration of your use and the total cost. In case you don't use the App, this information will not be given.",
  },
  {
    title: "What payment options do you offer?",
    description:
      "When you rent a powerbank, the App will display the time of rental, the duration of your use and the total cost. In case you don't use the App, this information will not be given.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-[30px] lg:py-[60px_100px] 2xl:py-[80px_110px] bg-[#f9f9f9] block">
      <div className="container">
        <div className="max-w-[768px] xl:max-w-[820px] 3xl:max-w-[1220px] mx-auto">
          <div className="mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
            <Heading size="heading1" as="h2" className="capitalize text-black">
              Frequently Asked Questions
            </Heading>
            <Text as="p" className="tracking-[0.03em]">
              Lorem Ipsum is simply dummy text of the printing industry.
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
                  <Heading size="heading5" as="h5" className="text-black">
                    {item.title}
                  </Heading>
                </AccordionTrigger>
                <AccordionContent>
                  <Text as="p" className="max-w-[90%] text-[#434343]">
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
