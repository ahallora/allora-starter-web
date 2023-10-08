import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { Skeleton } from "@/components/ui/skeleton";

import { metadata } from "./page";

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading={metadata.title} text={metadata.description} />
      <div className="grid gap-10">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
      </div>
    </DashboardShell>
  );
}
