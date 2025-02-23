"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/logout";

interface LogoutButtonProp {
  className?: string;
}

export const LogoutButton = ({ className }: LogoutButtonProp) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const { error } = await logout();

      if (error) {
        console.log(error);

        return;
      }

      router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
