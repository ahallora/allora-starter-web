import Image from "next/image";
import { Icons } from "@/components/icons";

import { CTAButtons, CTASection } from "@/components/cta-buttons";

import hero from "../../public/images/idea-launch.svg";
import abstract from "../../public/images/man-riding-a-rocket.svg";

const features = [
  {
    title: "Next.js 13",
    description:
      "App dir, Routing, Layouts, Loading UI and API routes.",
    icon: Icons.Nextjs,
  },
  {
    title: "React 18",
    description:
      "Server and Client Components. Use hook.",
    icon: Icons.React,
  },
  {
    title: "Modern Components",
    description:
      "UI components built using Radix UI and styled with Tailwind CSS.",
    icon: Icons.Radix,
  },
  {
    title: "Authentication",
    description:
      "Authentication using NextAuth.js and middlewares.",
    icon: Icons.Auth,
  },
  {
    title: "Subscriptions",
    description:
      "Free and paid subscriptions using Stripe.",
    icon: Icons.Stripe,
  },
  {
    title: "Transactional Emails",
    description:
      "Styled transactional emails using React.email",
    icon: Icons.Mail,
  },
];

export default async function IndexPage() {

  return (
    <>
      <section className="relative flex w-full items-center bg-white">
        <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
          <div className="relative m-auto flex-col items-start align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative m-auto items-center gap-12 lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <h1 className="text-5xl font-bold leading-[1.1] tracking-tighter md:text-7xl">
                      Your new SaaS starts here
                    </h1>
                    <h2 className="mt-4 max-w-xl text-xl tracking-tight text-gray-600">
                      This is a Next.js starter template created by allora and based on shadcn/taxonomy,
                      that will help your new SaaS hit the ground running.
                    </h2>
                  </div>
                  <CTAButtons />
                </div>
              </div>
              <div className="mt-12 block aspect-square w-full lg:order-first lg:mt-0">
                <Image
                  className="mx-auto w-full object-cover object-center md:ml-auto"
                  alt="hero"
                  src={hero}
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
          <div className="mx-auto w-full text-left">
            <div className="relative m-auto flex-col items-center align-middle">
              <div className="items-center gap-12 text-left lg:inline-flex lg:gap-24">
                <div className="m-auto flex flex-col md:order-first">
                  <div className="max-w-xl">
                    <div>
                      <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                        Features
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 lg:max-w-7xl">
                    <ul
                      role="list"
                      className="list-none grid-cols-2 gap-4 sm:grid lg:gap-6"
                    >
                      {features.map((feature) => (
                        <li className="flex" key={feature.title}>
                          <div className="mt-5 flex-none pr-4">
                            {feature.icon ? (
                              <feature.icon className="w-8" />
                            ) : (
                              <Icons.arrowRight className="" />
                            )}
                          </div>
                          <div>
                            <div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                                {feature.title}
                              </p>
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                              {feature.description}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-first mt-12 block aspect-square w-full lg:mt-0">
                  <Image
                    className="mx-auto w-full object-cover object-center lg:ml-auto"
                    alt=""
                    src={abstract}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
