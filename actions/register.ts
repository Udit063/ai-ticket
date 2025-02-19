import { supabase } from "@/lib/supabase";
import { AuthFormValues } from "@/types";

export const register = async (formData: AuthFormValues) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
        },
        emailRedirectTo: "http://localhost:3000/auth/callback",
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
