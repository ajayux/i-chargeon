import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function TermsConditions() {
  return (
    <section className="w-full block 3xl:py-[120px] 2xl:py-[100px] lg:py-[80px] py-[30px]">
      <div className="container">
        <div className="max-w-[768px] xl:max-w-[900px] 3xl:max-w-[1360px] mx-auto">
          <Heading
            size="heading1"
            as="h2"
            className="capitalize text-black mb-[10px]"
          >
            iChargeon : Terms
          </Heading>
          <div className="typography [&>ul]:mb-[15px] lg:[&>ul]:mb-[30px]">
            <p>
              Welcome to <b>iChargeon</b> These Terms and Conditions govern when
              an unknown printer took a galley of type scrambled it to make a
              type specimen book. It has survived of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing
              There are many variations of passages of Lorem Ipsum available.
              The generated Lorem Ipsum therefore always free from repetition.
            </p>
            <h6>1. Services Provided</h6>
            <ul>
              <li>
                The iCharge App offers a mobile power bank rental service where
                users can rent portable power banks to charge their mobile
                devices. The App allows users to find nearby power bank
                stations, rent a power bank, and return it to a compatible
                station.
              </li>
            </ul>
            <h6>2. Account Registration</h6>
            <ul>
              <li>
                To use the iCharge services, you must create an account within
                the App. You agree to provide accurate, up-to-date information
                and are responsible for keeping your account credentials
                confidential. You are responsible for all activity that occurs
                under your account.
              </li>
            </ul>
            <h6>3. Eligibility</h6>
            <ul>
              <li>
                By using the iCharge App, you confirm that you are at least 18
                years of age or the legal age of majority in your jurisdiction.
                If you are under 18, you may only use the App under the
                supervision of a parent or guardian.
              </li>
            </ul>
            <h6>3. Eligibility</h6>
            <ul>
              <li>
                By using the iCharge App, you confirm that you are at least 18
                years of age or the legal age of majority in your jurisdiction.
                If you are under 18, you may only use the App under the
                supervision of a parent or guardian.
              </li>
            </ul>
            <h6>4. Rental Process</h6>
            <ul>
              <li>
                Rental Period: When you rent a power bank, you agree to return
                it within the specified rental period. The rental period is
                outlined in the App, and charges will apply based on the
                duration of the rental.
              </li>
              <li>
                Rental Fees: You will be charged according to the pricing
                structure displayed in the App at the time of the rental.
                Additional charges may apply for late returns, damages, or lost
                power banks.
              </li>
              <li>
                Deposit: A refundable deposit may be required when you rent a
                power bank. The deposit will be refunded after the power bank is
                returned in good condition.
              </li>
              <li>
                Return and Availability: You are responsible for ensuring the
                power bank is returned to an authorized power bank station.
                Failure to return the power bank may result in additional
                charges or suspension of your account.
              </li>
            </ul>
            <h6>5. Privacy and Data Collection</h6>
            <ul>
              <li>
                By using the App, you consent to the collection and processing
                of your personal information as described in our [Privacy
                Policy]. We may collect data such as location information, usage
                data, and payment details to provide the services effectively
                and improve user experience.
              </li>
            </ul>
            <h6>6. Intellectual Property</h6>
            <ul>
              <li>
                All content, features, and functionality of the iCharge App,
                including but not limited to trademarks, logos, text, graphics,
                and software, are the property of iCharge or its licensors and
                are protected by intellectual property laws.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
