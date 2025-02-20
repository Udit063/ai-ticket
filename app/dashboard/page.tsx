import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicDashboard = dynamic(
  () => import("@/components/dashboard/Dashboard").then((mod) => mod.Dashboard),
  {
    loading: () => <div>Loading...</div>,
  }
);

export default async function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicDashboard />
    </Suspense>
  );
}
