import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard",
  description: "Manage your SaaS.",
};


export default async function PostDefault() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader heading={metadata.title} text={metadata.description} />
      <div className="grid gap-10">
        This is your SaaS.
      </div>
    </DashboardShell>
  );
}
