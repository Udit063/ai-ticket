"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      const type = params.get("type");

      if (accessToken && type === "recovery") {
        router.push(`/update-password?token=${accessToken}`);
      }
    }
  }, [router]);

  return null;
}
