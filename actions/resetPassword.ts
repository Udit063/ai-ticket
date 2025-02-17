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
    const { error } = await supabase.auth.resetPasswordForEmail(email);

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
  newPassword: string,
  accessToken: string
): Promise<UpdatePasswordResult> {
  try {
    const supabaseAuth = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
      {
        auth: {
          persistSession: false,
        },
      }
    );

    const { error: sessionError } = await supabaseAuth.auth.setSession({
      access_token: accessToken,
      refresh_token: "",
    });

    if (sessionError) {
      console.error("Error setting session:", sessionError.message);
      return {
        success: false,
        error:
          "Invalid or expired token. Please request a new password reset link.",
      };
    }

    const { error } = await supabaseAuth.auth.updateUser({
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
