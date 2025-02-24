import { supabase } from "@/lib/supabase";

export const register = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
        emailRedirectTo: "https://ai-ticket.vercel.app/auth/callback",
      },
    });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
