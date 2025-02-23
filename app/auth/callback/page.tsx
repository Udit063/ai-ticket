"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthCallback() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleEmailVerification = async () => {
      const { error } = await supabase.auth.refreshSession();

      if (!error) {
        router.push("/onboarding");
      } else {
        console.error("Error refreshing session:", error);
        router.push("/login");
      }
    };

    handleEmailVerification();
  }, [router, supabase]);

  return <div>Verifying your email...</div>;
}
