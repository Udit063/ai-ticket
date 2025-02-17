"use server";

import { createClient } from "@supabase/supabase-js";
import { ResetPasswordResult, UpdatePasswordResult } from "@/types/index";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function resetPassword(
  email: string
): Promise<ResetPasswordResult> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/update-password`,
    });

    if (error) {
      console.error("Error sending reset password email:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error in resetPassword:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function updatePassword(
  newPassword: string
): Promise<UpdatePasswordResult> {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error("Error updating password:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error in updatePassword:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}
