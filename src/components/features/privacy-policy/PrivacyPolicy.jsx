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
    title: "Information We Collect",
    description: `
      <ul>
        <li><b>Personal Information:</b> Name, email address, phone number, and payment details when you register and use our services.</li>
        <li><b>Location Data:</b> We collect real-time location information to help you find nearby charging stations.</li>
        <li><b>Device Information:</b> Device type, operating system, and other technical data.</li>
        <li><b>Usage Data:</b> Information about your interactions with our app, such as rental history and station usage.</li>
      </ul>
    `,
  },
  {
    title: "How We Use Your Information",
    description: `
       <ul>
        <li>To provide and manage our services.</li>
        <li>To process payments, including deposit and rental fees.</li>
        <li>To send you important updates, such as rental reminders and promotions.</li>
        <li>To improve our app functionality and customer support.</li>
        <li>To comply with legal obligations.</li>
      </ul>
    `,
  },
  {
    title: "Sharing Your Information",
    description: `
    <p>We do not sell your personal data. However, we may share your information with:</p>
       <ul>
        <li>Payment gateways and financial partners to process transactions.</li>
        <li>Service providers assisting with app functionality and analytics.</li>
        <li>Law enforcement or regulatory authorities when legally required.</li>
      </ul>
    `,
  },
  {
    title: "Data Security",
    description:
      "We take the security of your personal data very seriously. To protect your information, we implement a variety of security measures, including encryption technologies and secure servers. While we strive to adhere to industry-standard security practices to safeguard your data, no method of data transmission over the Internet is completely without risk. As such, we cannot guarantee absolute security. We encourage users to take steps to protect their personal information while online, including using secure networks and updating account credentials regularly.",
  },
  {
    title: "Your Rights",
    description: `
      <p>You may:</p>
      <ul>
        <li>Access or update your personal information through your profile settings.</li>
        <li>Request deletion of your data (subject to legal obligations).</li>
        <li>Withdraw consent to data collection by deactivating your account.</li>
      </ul>
    `,
  },
  {
    title: "Changes to This Policy",
    description:
      "We may update this Privacy Policy occasionally. Continued use of the app after changes constitutes acceptance of the new terms.",
  },
  {
    title: "Contact Us",
    description: `
      <p>For questions about this Privacy Policy, please contact us at:</p>
      <ul>
        <li><b>Email:</b> ichargeon@gmail.com</li>
        <li><b>Phone:</b> 9605903388</li>
      </ul>
    `,
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
              ICHARGEON ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our services
              through the ICHARGEON app or website.
              <br />
              <br />
              The Services constitute a technology platform that enables users
              of ICHARGEON’s mobile application to locate, rent, and return
              portable power banks from ICHARGEON charging stations conveniently
              and securely.
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
