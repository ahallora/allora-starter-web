import Image from "next/image";

import ceo from "../../../public/images/ceo.png";
import cpo from "../../../public/images/cpo.png";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <section className="container flex flex-col  gap-6 md:max-w-[64rem]">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 pb-0 pt-14 md:px-12 lg:px-16">
        <div className="mx-auto w-full text-left">
          <div className="relative m-auto flex-col items-center align-middle">
            <h2 className="mb-6 text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
              About us
            </h2>

            <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                At {siteConfig.name}, we're passionate about delivering
                cutting-edge software solutions that empower businesses to
                thrive in today's digital age. Our mission is to simplify and
                enhance your workflow, streamline operations, and drive success.
              </p>

              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                With a team of dedicated experts, we leverage the latest
                technology trends to create innovative SaaS products that cater
                to your unique needs. Whether you're a small startup or a global
                enterprise, our scalable and flexible solutions are designed to
                help you achieve your goals.
              </p>

              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                Our user-friendly interface and intuitive features ensure a
                seamless experience, while our top-notch customer support team
                is always ready to assist you. We're committed to your success,
                and our track record of satisfied clients speaks for itself.
              </p>

              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                Join the thousands of businesses worldwide that trust{" "}
                {siteConfig.name} to elevate their operations. Let us be your
                partner in progress. Explore our solutions today and discover
                how we can transform your business for the better.
              </p>

              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                {siteConfig.description}
              </p>

              <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
                {siteConfig.name} is a product by {siteConfig.company}.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
          <ul
            role="list"
            className="flex flex-col justify-evenly gap-6 md:flex-row"
          >
            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <Image
                  className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
                  src={ceo}
                  alt=""
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Emily Mitchell
                  </h3>
                  <p className="flex items-center gap-2 text-base text-gray-500">
                    CEO
                    <a href="#" className="text-base underline">
                      <Icons.Mail className="h-4 w-4" />
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <Image
                  className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
                  src={cpo}
                  alt=""
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Alexander Pierce
                  </h3>
                  <p className="flex items-center gap-2 text-base text-gray-500">
                    CPO
                    <a href="#" className="text-base underline">
                      <Icons.Mail className="h-4 w-4" />
                    </a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <hr className="border-slate-200" />

        <div className="flex justify-center p-6">
          <p className="text-center text-sm leading-loose md:text-left">
            Illustrations by{" "}
            <a
              href="https://popsy.co"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Popsy
            </a>
          </p>
        </div>
      </section>
    </section>
  );
}
