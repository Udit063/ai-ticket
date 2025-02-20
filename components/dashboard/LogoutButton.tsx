"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";

interface LogoutButtonProp {
  className?: string;
}

export const LogoutButton = ({ className }: LogoutButtonProp) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    console.log("logout");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <Button
      onClick={handleLogout}
      className={cn(
        "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 w-full",
        className
      )}
      disabled={isLoading}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </Button>
  );
};
