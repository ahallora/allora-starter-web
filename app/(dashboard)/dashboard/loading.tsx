import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { metadata } from "./page";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading={metadata.title}
        text={metadata.description}
      ></DashboardHeader>
      <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
      </div>
    </DashboardShell>
  );
}
