import { RegisterForm } from "@/components/auth/RegisterForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function RegisterPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) redirect("/dashboard");
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
