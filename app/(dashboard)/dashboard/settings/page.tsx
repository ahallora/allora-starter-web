import { Suspense } from "react";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { isSuperAdmin } from "@/lib/isSuperAdmin";
import { getCurrentUser } from "@/lib/session";
import AdminView from "@/components/admin-view";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { UserNameForm } from "@/components/user-name-form";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();
  const isAdmin = await isSuperAdmin(user?.email);

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader heading={metadata.title} text={metadata.description} />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name || "" }} />

        {isAdmin && (
          <Suspense fallback={<>Loading...</>}>
            <AdminView />
          </Suspense>
        )}
      </div>
    </DashboardShell>
  );
}
