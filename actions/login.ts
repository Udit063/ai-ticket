import { supabase } from "@/lib/supabase";
import { AuthFormValues } from "@/types";

export const login = async (
  formData: Pick<AuthFormValues, "email" | "password">
) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
