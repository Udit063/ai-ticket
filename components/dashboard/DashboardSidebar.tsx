"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Settings, LineChart, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LogoutButton } from "./LogoutButton";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Tickets",
    icon: LineChart,
    href: "/dashboard/tickets",
  },
  {
    label: "Alerts",
    icon: BarChart3,
    href: "/dashboard/alerts",
  },
  {
    label: "Reports",
    icon: Settings,
    href: "/dashboard/reports",
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-6 bg-white">
        <Link href="/dashboard" className="flex items-center">
          <div className="relative w-8 h-8 mr-4">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              I
            </div>
          </div>
          <h1 className="text-xl font-bold">InsightAI</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3 py-2 bg-white">
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === route.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out",
                  pathname === route.href
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                )}
              >
                <Link href={route.href}>
                  <route.icon
                    className={cn(
                      "h-5 w-5 mr-3 transition-colors duration-200",
                      pathname === route.href
                        ? "text-purple-700"
                        : "text-gray-400 group-hover:text-purple-700"
                    )}
                  />
                  {route.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t bg-white">
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
};
