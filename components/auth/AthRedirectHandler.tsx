"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    // Check if we have a hash fragment with access_token
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the # character
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      const type = params.get("type");

      // If this is a recovery (password reset) redirect
      if (accessToken && type === "recovery") {
        // Redirect to update-password page with the token
        router.push(`/update-password?token=${accessToken}`);
      }
    }
  }, [router]);

  return null; // This component doesn't render anything
}
