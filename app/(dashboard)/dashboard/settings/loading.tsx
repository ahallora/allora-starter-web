import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { metadata } from "./page";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading={metadata.title} text={metadata.description} />
      <div className="grid gap-10">
        <Skeleton className="h-2 w-4" />
        <Skeleton className="h-2 w-4" />
        <Skeleton className="h-2 w-4" />
      </div>
    </DashboardShell>
  );
}
