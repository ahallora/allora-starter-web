import Link from "next/link";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

export const CTAButtons = ({ centered = false }) => (
  <div
    className={`mt-10 flex flex-col items-center justify-center gap-3 lg:flex-row ${
      centered ? "lg:justify-center" : "lg:justify-start"
    }`}
  >
    <Link href="/register" className={cn(buttonVariants({ size: "lg" }))}>
      Get started
    </Link>
    <Link
      href="/pricing"
      className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
    >
      Pricing
    </Link>
  </div>
);

export const CTASection = () => (
  <section>
    <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
      <h1 className="text-center text-3xl font-bold leading-[1.1] tracking-tighter md:text-3xl">
        Ready to start building?
      </h1>
      <div className="text-center">
        <CTAButtons centered />
      </div>
    </div>
  </section>
);
