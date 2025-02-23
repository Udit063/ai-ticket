import { Settings, Ticket, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "../ui/sidebar";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export function Navbar() {
  const userPlan = "free";
  const ticketsUsed = 75;
  return (
    <div className="flex items-center px-4 py-3 border-b bg-white">
      {/* <h2 className="text-2xl font-semibold">Dashboard</h2> */}
      <SidebarTrigger className="w-8 h-8" size="default" />
      <div className="ml-auto flex items-center space-x-4">
        {userPlan === "free" && (
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-600">
            <Ticket className="w-3 h-3 mr-1" />
            {ticketsUsed}/100
          </Badge>
        )}
        {userPlan === "free" ? (
          <Link href="/#pricing">
            <Button
              variant="outline"
              size="sm"
              className="text-purple-600 border-purple-600 hover:bg-purple-50"
            >
              <Zap className="w-3 h-3 mr-1" />
              Upgrade to Pro
            </Button>
          </Link>
        ) : (
          <Badge variant="secondary" className="bg-purple-100 text-purple-600">
            <Zap className="w-3 h-3 mr-1" />
            Pro
          </Badge>
        )}

        {/* <Button
          variant="ghost"
          size="icon"
          className="text-zinc-600 hover:text-purple-600"
        >
          <Settings className="h-5 w-5" />
        </Button> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  U
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <Link href="/dashboard/profile">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard/settings">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="w-full py-0">
              <LogoutButton className="w-full bg-transparent text-black shadow-none border-none p-0 justify-start hover:bg-transparent cursor-default py-0" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
