import Image from "next/image";
import Link from "next/link";

import "./../terms/style.css";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <section className="container flex flex-col  gap-6 md:max-w-[64rem]">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 pb-0 pt-14 md:px-12 lg:px-16">
        <div className="mx-auto w-full text-left">
          <div className="relative m-auto flex-col items-center align-middle">
            <h2 className="mb-6 text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
              Privacy Policy
            </h2>

            <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                This document explains how we collect, uses, and protect personal
                information of individuals (&quot;users&quot; or
                &quot;you&quot;) when you use our online web service. 
                {/* TODO: Describe your service
                The service provides...
                */}
              </p>
              <ol className="legal text-slate-700">
                <li>
                  <h5>Information We Collect</h5>
                  <ol>
                    <li>
                      <h5>Personal Information</h5>
                      <ul>
                        <li>
                          When you sign up for an account with us, we collect
                          your name, email address, and any other information
                          you voluntarily provide.
                        </li>
                        <li>
                          If you choose to make a purchase, we also collect your
                          payment information, such as credit card details, to
                          process your transaction securely.
                        </li>
                        <li>
                          We may also collect any other personal information you
                          provide in the course of using our Service, such as
                          contact information or preferences.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <h5>Usage Information</h5>
                      <ul>
                        <li>
                          When you use our Service, we automatically collect
                          certain usage information, such as your IP address,
                          browser type, operating system, and device
                          information.
                        </li>
                        <li>
                          We may also collect information about your
                          interactions with the Service, such as the pages you
                          visit, the features you use, and the content you
                          access
                        </li>
                      </ul>
                    </li>

                    <li>
                      <h5>Business-generated Data</h5>
                      <ul>
                        <li>
                          As part of our Service, we collect and store the data
                          content data generated while using our Service including
                          content created and modified by you through our
                          service.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <h5>Use of Information</h5>
                  <ul>
                    <li>
                      Improving and Personalizing the Service
                      <ul>
                        <li>
                          We may use the information we collect to improve and
                          personalize the Service for you and other users,
                          including:
                          <ul>
                            <li>
                              Enhancing the accuracy and effectiveness of the
                              our service
                            </li>
                            <li>
                              Analyzing patterns and trends to understand how
                              users interact with the Service
                            </li>
                            <li>
                              Customizing the user experience, such as
                              recommending content based on your preferences.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      Communication and Support
                      <ul>
                        <li>
                          We may use your personal information to communicate
                          with you, provide customer support, and respond to
                          your inquiries or requests.
                        </li>
                        <li>
                          We may also send you promotional emails, newsletters,
                          or other marketing communications if you have opted-in
                          to receive such communications
                        </li>
                      </ul>
                    </li>

                    <li>
                      Compliance and Legal Purposes
                      <ul>
                        <li>
                          We may use your information to comply with applicable
                          laws, regulations, or legal obligations
                        </li>
                        <li>
                          In certain circumstances, we may need to use your
                          information to protect our legal rights, investigate
                          and prevent fraud, or respond to a government request
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>Data Retention</h5>
                  <p>
                    We retain personal information for as long as necessary to
                    fulfill the purposes outlined in this Privacy Policy, unless
                    a longer retention period is required or permitted by law.
                    When we no longer need personal information for any purpose,
                    we will securely delete, destroy or anonymize it.
                  </p>
                </li>
                <li>
                  <h5>Data Security</h5>
                  <p>
                    We implement industry-standard security measures to protect
                    your personal information from unauthorized access,
                    disclosure, alteration, or destruction. However, no method
                    of transmission over the internet or electronic storage is
                    completely secure, and we cannot guarantee absolute
                    security.
                  </p>
                </li>
                <li>
                  <h5>International Data Transfer</h5>
                  <p>
                    As a service provider based in the European Union (EU), all
                    data we collect and process remains within the EU. However,
                    it is possible that our service providers or partners
                    located outside the EU may have access to your personal
                    information, but in such cases, we ensure that adequate
                    safeguards are in place to protect your information in
                    accordance with applicable data protection laws. Updated
                    list of currently employed data processors can be provided
                    upon request.
                  </p>
                </li>
                <li>
                  <h5>Changes to this Privacy Policy</h5>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We encourage you to review
                    this Privacy Policy periodically for any changes. Your
                    continued use of the Service after the updated Privacy
                    Policy is effective will indicate your acceptance of the
                    updated terms.
                  </p>
                </li>
                <li>
                  <h5>Contact Us</h5>
                  <p>
                    If you have any questions or concerns regarding this Privacy
                    Policy please contact our Data Processing Officer,
                    who&apos;s responsible for overseeing our data collection,
                    processing, and data usage practices
                    {siteConfig.dpoEmail && <>at {" "}<a href={`mailto:${siteConfig.dpoEmail}`}>{siteConfig.dpoEmail}</a></>}.
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
