import Image from "next/image";
import Link from "next/link";

import "./style.css";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
  return (
    <section className="container flex flex-col  gap-6 md:max-w-[64rem]">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 pb-0 pt-14 md:px-12 lg:px-16">
        <div className="mx-auto w-full text-left">
          <div className="relative m-auto flex-col items-center align-middle">
            <h2 className="mb-6 text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
              Terms of Service
            </h2>

            <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                Please read these Terms of Service carefully before using our
                web service, {siteConfig.name} (&quot;Service&quot;), operated
                by {siteConfig.company} (&quot;us/we&quot;).
              </p>
              <ol className="legal text-slate-700">
                <li>
                  <h5>Acceptance of Terms</h5>
                  <p>
                    By accessing and using our Service , you agree to be bound
                    by these Terms of Service and any additional terms and
                    conditions that may apply to specific sections or features
                    of our service. If you do not agree with any part of these
                    terms, please do not use our service.
                  </p>
                </li>

                <li>
                  <h5>Description of Service</h5>
                  <p>
                    {/* TODO: You might want to update this to reflect it better. */}
                    {siteConfig.description}
                  </p>
                </li>

                <li>
                  <h5>Use of Data</h5>
                  <p>
                    We reserve the right to use the data generated by businesses
                    using our service to improve our service offering. This
                    includes both content generated through AI and the content
                    created and modified by the businesses themselves. We may
                    analyze and process this data to train our own data models
                    and improve the effectiveness and quality of the content
                    generated. By using the Service, you acknowledge and agree
                    to grant us a non-exclusive, worldwide, royalty-free,
                    perpetual, irrevocable license to use, reproduce, modify,
                    publish, distribute, and display the data for these
                    purposes.
                  </p>
                </li>

                <li>
                  <h5>Service Availability</h5>
                  <p>
                    The Service is provided on an &quot;as-is&quot; basis
                    without any guarantee of up-time or availability. While we
                    strive to provide the best possible service, we do not
                    warrant that our service will be uninterrupted, error-free
                    etc. We reserve the right to modify, suspend, or discontinue
                    our service at any time with due notice if possible.
                  </p>
                </li>

                <li>
                  <h5>Privacy and Data Protection</h5>
                  <p>
                    We understand the importance of privacy and are committed to
                    handling all data in accordance with the General Data
                    Protection Regulation (GDPR) and other applicable privacy
                    laws. Please refer to our{" "}
                    <Link href="/privacy">Privacy Policy</Link> for more
                    information about how we collect, use, and protect your
                    personal data.
                  </p>
                </li>

                <li>
                  <h5>User Conduct</h5>
                  <p>
                    You agree to use the Service solely for lawful purposes and
                    in accordance with these Terms of Service. You will not
                    engage in any conduct that could damage, disable,
                    overburden, or impair our service or interfere with any
                    other party&apos;s use of our service. You must also comply
                    with all applicable laws, regulations, and third-party
                    rights.
                  </p>
                </li>

                <li>
                  <h5>Prohibited Use of Service</h5>
                  <p>
                    Users of our services are strictly forbidden from engaging
                    in the following (but not limited to) activities:
                  </p>
                  <ol className="lower-alpha">
                    {/* TODO: Decide if these are suitable for your business type */}
                    <li>
                      Creating and disseminating content with the intent to
                      disinform the public, including propaganda and
                      dissemination of false information.
                    </li>
                    <li>
                      Producing and promoting content that glorifies violence,
                      racism, hate speech, or any form of discrimination.
                    </li>
                    <li>
                      Generating or sharing content related to guns, drugs, or
                      explicit pornography.
                    </li>
                  </ol>

                  <p>
                    The determination of whether content violates our terms and
                    conditions is solely at our discretion. Users shall not have
                    any legal recourse to challenge our assessment of content
                    compliance.
                  </p>
                </li>

                <li>
                  <h5>Intellectual Property Rights</h5>
                  <p>
                    All intellectual property rights in the Service, including
                    without limitation any patents, copyrights, trademarks,
                    trade secrets, and other proprietary rights, are owned by
                    us. You may not copy, modify, distribute, reverse engineer,
                    or create derivative works based on our service without our
                    prior written consent.
                  </p>
                </li>

                <li>
                  <h5>Limitation of Liability</h5>
                  <p>
                    To the maximum extent permitted by law, we, our directors,
                    employees, partners, and affiliates shall not be liable for
                    any direct, indirect, incidental, special, or consequential
                    damages, including but not limited to loss of profits, data,
                    or other intangible losses arising out of or in connection
                    with your use or inability to use the Service.
                  </p>
                </li>

                <li>
                  <h5>Indemnification</h5>
                  <p>
                    You agree to indemnify and hold us harmless, our directors,
                    employees, partners, and affiliates from any claim or
                    demand, including reasonable attorneys&apos; fees, made by
                    any third party due to or arising out of your breach of
                    these Terms of Service or your violation of any law or the
                    rights of a third party.
                  </p>
                </li>

                <li>
                  <h5>Termination</h5>
                  <p>
                    We reserve the right to terminate your access to the Service
                    at any time and for any reason, without prior notice. All
                    provisions of these Terms of Service which by their nature
                    should survive termination shall survive termination,
                    including, without limitation, ownership provisions,
                    warranty disclaimers, indemnity, and limitations of
                    liability. In the event of termination caused by a
                    user&apos;s failure to comply with these terms, said user
                    shall not be entitled to any reimbursement of subscription
                    fees or other compensation.
                  </p>
                </li>

                <li>
                  <h5>Governing Law and Jurisdiction</h5>
                  <p>
                    {/* TODO: Decide which jurisdiction is right for you */}
                    These Terms of Service shall be governed by and construed in
                    accordance with the laws of the jurisdiction of Denmark. Any
                    dispute arising out of or in connection with these terms,
                    including any question regarding their existence, validity,
                    or termination, shall be subject to the exclusive
                    jurisdiction of the competent courts in the same
                    jurisdiction.
                  </p>
                </li>

                <li>
                  <h5>Entire Agreement</h5>
                  <p>
                    These Terms of Service constitute the entire agreement
                    between you and us regarding the use of the Service. Any
                    failure by us to exercise or enforce any right or provision
                    of these terms shall not constitute a waiver of such right
                    or provision. If any provision of these terms is found to be
                    invalid or unenforceable, the remaining provisions shall be
                    enforced to the fullest extent possible, and the remaining
                    terms shall remain in full force and effect.
                  </p>
                </li>

                <li>
                  <p>
                    Our dedication to maintaining a safe, responsible, and
                    ethical platform is at the core of our values. We strive to
                    provide a positive user experience while upholding the
                    highest standards of integrity, transparency, and user
                    protection.
                  </p>
                </li>
                <li>
                  <p>
                    Please contact us at{" "}
                    <a href={`mailto:${siteConfig.supportEmail}`}>
                      {siteConfig.supportEmail}
                    </a>{" "}
                    if you have any questions or concerns regarding these Terms
                    of Service.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}