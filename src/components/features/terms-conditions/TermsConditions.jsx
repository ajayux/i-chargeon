import { Heading } from "@/components/layout/Heading";

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
            Terms & Conditions
          </Heading>
          <div className="typography [&>ul]:mb-[15px] lg:[&>ul]:mb-[30px]">
            <p>
              Welcome to <b>iChargeon</b> By registering, accessing, or using
              our power bank rental services, you agree to the following Terms
              and Conditions.
            </p>
            <h6>1. Account Registration</h6>
            <ul>
              <li>You must be at least 18 years old. </li>
              <li>
                You agree to provide accurate, complete, and updated
                registration information.{" "}
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account.
              </li>
            </ul>
            <h6>2. Location Access</h6>
            <ul>
              <li>
                Location services must be enabled to view nearby stations and
                use our services. Disabling location access may limit
                functionality.
              </li>
            </ul>
            <h6>3. Deposits and Payments </h6>
            <ul>
              <li>
                A one-time refundable deposit is required to activate rentals.
              </li>
              <li>You must purchase a usage package before renting.</li>
              <li>
                If your usage exceeds the allowed time limit, an additional fee
                will be charged during your next rental.
              </li>
            </ul>
            <h6>4. Usage of Power Banks</h6>
            <ul>
              <li>Scan the QR code on the device to unlock a power bank.</li>
              <li>Return the power bank to any ICHARGEON station.</li>
              <li>
                Lost or damaged power banks may incur a penalty or replacement
                fee.
              </li>
            </ul>
            <h6>5. Restrictions</h6>
            <p>You may not, and agree not to permit or enable others to: </p>
            <ul>
              <li>
                Remove or alter any copyright, trademark, or proprietary notices
                contained in or on the ICHARGEON app, website, power banks, or
                charging stations;
              </li>
              <li>
                Reproduce, distribute, modify, create derivative works from,
                publicly display, license, sell, or otherwise exploit the
                ICHARGEON Services, except as expressly permitted in these
                Terms;
              </li>
              <li>
                Reverse engineer, decompile, disassemble, or otherwise attempt
                to extract source code from the ICHARGEON application or
                systems, except to the extent permitted by applicable law;
              </li>
              <li>
                Link to, mirror, or frame any part of the Services, including
                charging station maps, without our express written consent;
              </li>
              <li>
                Use automated scripts, bots, crawlers, or other means to scrape,
                index, or extract data from the ICHARGEON app or website, or to
                overload or interfere with the performance or functionality of
                the Services;
              </li>
              <li>
                Access or attempt to access the Services or related systems or
                networks without authorization, or attempt to bypass any
                security or authentication measures;
              </li>
              <li>
                Use the Services for any unlawful, harmful, abusive, or
                disruptive purpose, including damaging ICHARGEON equipment,
                interfering with other users, or violating applicable laws and
                regulations.
              </li>
            </ul>
            <h6>6. Refund Policy</h6>
            <ul>
              <li>
                Deposits are refundable upon account closure, subject to return
                of all power banks and no outstanding dues.
              </li>
              <li>Usage packages are non-refundable after activation.</li>
            </ul>
            <h6>7. User Conduct</h6>
            <p>You agree not to: </p>
            <ul>
              <li>Use the services for unlawful purposes.</li>
              <li>Damage or tamper with the stations or power banks.</li>
              <li>Share your account with others.</li>
            </ul>
            <h6>8. Damage or Loss Fees</h6>
            <p>
              You are responsible for the cost of repair or replacement of any
              ICHARGEON power bank or charging station if it is damaged or lost
              during your use under your account. This includes, but is not
              limited to, physical damage such as a cracked casing, water
              damage, broken ports, intentional tampering, or failure to return
              the power bank. If such damage or loss is reported and verified by
              ICHARGEON at its reasonable discretion, we reserve the right to
              charge your registered payment method for the applicable repair or
              replacement fee. These charges are non-refundable and cover the
              actual cost of restoring or replacing the affected equipment.{" "}
            </p>
            <h6>9. Liability and Disclaimer</h6>
            <p>ICHARGEON is not responsible for: </p>
            <ul>
              <li>
                Loss of data or device issues caused by third-party accessories.
              </li>
              <li>User negligence leading to device damage or theft.</li>
            </ul>
            <h6>10. Data Retention</h6>
            <p>
              ICHARGEON retains your personal information for as long as it is
              necessary to operate our services effectively, manage your account
              activity, and fulfill rental transactions. We keep data for as
              long as we need it to provide our power bank rental services,
              comply with legal and regulatory obligations, resolve disputes,
              prevent fraud, and protect the rights and interests of ICHARGEON
              and its users. Once your account is closed and any outstanding
              obligations are settled, we may retain limited information where
              required by law or for legitimate business purposes.{" "}
            </p>
            <h6>11. Termination</h6>
            <p>
              We reserve the right to suspend or terminate your account for
              violation of these terms or misuse of services
            </p>
            <h6>12. Changes to Terms</h6>
            <p>
              We may modify these terms at any time. Continued use of the
              service implies acceptance of the updated terms.
            </p>
            <h6>13. Contact Us </h6>
            <p>For any queries or support, contact us at: </p>
            <ul>
              <li>
                <b>Email:</b> ichargeon@gmail.com
              </li>
              <li>
                <b>Phone:</b> 9605903388
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
