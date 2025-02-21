"use server";
import { createClient } from "@/lib/supabase/server";

export async function signupWithEmailPassword(email: string, password: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  console.log("data:", data);
  if (error) {
    console.log("error:", error);
    return { success: false, error: error.message };
  }

  return { success: "Please check your mail", error: null };
}

export async function signinWithEmailPassword(email: string, password: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log("data:", data);
  if (error) {
    console.log("error:", error);
    return { success: false, error: error.message };
  }

  return { success: "Please check your mail", error: null };
}

export async function sendResetPasswordEmail(email: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/update-password",
  });
  console.log("data:", data);
  if (error) {
    console.log("error:", error);
    return { success: false, error: error.message };
  }
  return { success: "Please check your mail", error: null };
}

export async function updatePassword(password: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.updateUser({ password });
  console.log("data:", data);
  if (error) {
    console.log("error:", error);
    return { success: false, error: error.message };
  }
  return { success: "Password updated", error: null };
}

export async function signout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log("error:", error);
    return { success: false, error: error.message };
  }
  return { success: "signout", error: null };
}
