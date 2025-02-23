import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DynamicDashboard = dynamic(
  () => import("@/components/dashboard/Dashboard").then((mod) => mod.Dashboard),
  {
    loading: () => <div>Loading...</div>,
  }
);

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicDashboard />
    </Suspense>
  );
}
