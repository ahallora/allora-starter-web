import { DashboardConfig } from "types";
import { siteConfig } from "./site";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Support",
      href: `mailto:${siteConfig.supportEmail}`,
    },
  ],
  sidebarNav: [
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
};
