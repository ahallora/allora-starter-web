import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { CTASection } from "@/components/cta-buttons";
import { proPlan } from "@/config/subscriptions";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Pricing",
};

const faqEntries = [
  {
    title: "Subscription Management and Flexibility",
    description: (
      <>
        Within our web app, you have full control over your subscription, making
        it hassle-free to manage. Upgrading to a paid subscription is a simple
        process, granting you access to the complete set of available features.
        If you decide to cancel your subscription, rest assured that you can
        easily do so at any time, with no long-term commitments and a
        straightforward cancellation process.
      </>
    ),
  },
  {
    title: "Safety and Security of User Information",
    description: (
      <>
        Of utmost importance to us is safeguarding your information. We have
        implemented robust security measures to protect your data. We strictly
        adhere to our privacy policy and handle your information responsibly.
        Your personal data is not shared, sold, or disclosed to third parties by
        us. You can have peace of mind knowing that your information is in safe
        hands while using our app.
      </>
    ),
  },
  ...(siteConfig.supportEmail
    ? [
        {
          title: "Providing Feedback and Contacting Us",
          description: (
            <>
              To contact us, please reach out to our dedicated email address at{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="underline hover:no-underline"
              >
                {siteConfig.supportEmail}
              </a>
              . We highly value feedback from our users, as it helps us improve
              our services. We encourage you to share your thoughts,
              suggestions, and any issues you may encounter. Our team will
              promptly address your inquiries and provide assistance as needed.
              We appreciate your feedback and look forward to hearing from you.
              Help us make our app even better by sharing your experiences and
              ideas.
            </>
          ),
        },
      ]
    : []),
];

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 md:max-w-[64rem]">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 pb-0 pt-14 md:px-12 lg:px-16">
        <div className="mx-auto w-full text-left">
          <div className="relative m-auto flex-col items-center align-middle">
            <h2 className="mb-6 text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
              Pricing
            </h2>
          </div>
        </div>
        <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
          Buy the PRO subscription to get the most out of our service.
        </p>
      </div>

      <section aria-labelledby="pricing" id="pricing">
        <div className="mx-auto items-center px-8 py-12 pt-0 md:px-12 lg:px-16 xl:px-12 2xl:max-w-7xl">
          <div className="relative my-12 mt-0 max-w-7xl space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto xl:grid-cols-2">
            <div className="transition-transform hover:scale-105">
              <div className="grid w-full grid-cols-1 items-center justify-center rounded-t-lg bg-gray-100 p-6 lg:p-8">
                <div>
                  <h2 className="text-lg text-black">Free plan</h2>
                  <p className="mt-4 text-sm text-gray-500">
                    Suitable for everyone wanting to test the waters.
                  </p>
                </div>
                <div className="mt-8 flex-col">
                  <p className="text-5xl font-light tracking-tight text-black">
                    Free
                  </p>
                  <p className="text-sm text-gray-500">forever</p>
                </div>
              </div>
              <div className="rounded-b-3xl border-t bg-gray-100 px-6 pb-8">
                <div className="grid grid-cols-1 lg:gap-12">
                  <ul
                    role="list"
                    className="order-last mt-10 flex flex-col gap-y-3 text-sm text-gray-500"
                  >
                    <li className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" />
                      <span className="ml-4"> Something cool</span>
                    </li>
                    <li className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" />
                      <span className="ml-4"> Something nice </span>
                    </li>
                    <li className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" />
                      <span className="ml-4"> Something clean</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 flex">
                  <Link
                    href="/login?plan=free"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-10 w-full"
                    )}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="transition-transform hover:scale-105">
              <div className="grid w-full grid-cols-1 items-center justify-center rounded-t-lg bg-gray-100 p-6 lg:p-8">
                <div>
                  <h2 className="text-lg text-black">Pro plan</h2>
                  <p className="mt-4 text-sm text-gray-500">
                    Suitable for professionals wanting to level up.
                  </p>
                </div>
                <div className="mt-8 flex-col">
                  <p className="text-5xl font-light tracking-tight text-black">
                    $<span>{proPlan.price}</span>
                  </p>
                  <p className="text-sm text-gray-500">per month</p>
                </div>
              </div>
              <div className="rounded-b-3xl border-t bg-gray-100 px-6 pb-8">
                <div className="grid grid-cols-1 lg:gap-12">
                  <ul
                    role="list"
                    className="order-last mt-10 flex flex-col gap-y-3 text-sm text-gray-500"
                  >
                    <li className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" />
                      <span className="ml-4"> Something awesome </span>
                    </li>
                    <li className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" />
                      <span className="ml-4"> Something epic </span>
                    </li>
                    <li className="flex items-center">
                      <Icons.check className="mr-2 h-4 w-4" />
                      <span className="ml-4"> Something grand </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 flex">
                  <Link
                    href="/login?plan=pro"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-10 w-full"
                    )}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl items-center px-5 py-24 pt-0 md:px-12 lg:px-16">
          <div className="divide-mercury-300 space-y-12 divide-y-2">
            {faqEntries.map((entry) => (
              <div
                key={entry.title}
                className="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-3 lg:pt-12"
              >
                <div className="mb-6 flex shrink-0 flex-col md:mb-0 lg:pr-12">
                  <span className="text-lg font-medium leading-6 text-black">
                    {entry.title}
                  </span>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-base text-gray-500">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </section>
  );
}
