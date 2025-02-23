import { supabase } from "@/lib/supabase";

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    return { error: null };
  } catch (error) {
    return { error };
  }
};
