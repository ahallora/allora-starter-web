import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="container bg-white text-slate-600">
      <div className="flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="mx-auto h-8 w-8" />
          <p className="text-center text-sm md:text-left">
            Copyright &copy; {new Date().getFullYear()} {siteConfig.company}
          </p>
        </div>
        <p className="text-center text-sm md:text-left">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>{" "}
          ·{" "}
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
