"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { redirect, useRouter } from "next/navigation";
import { AuthWrapper } from "@/components/auth/AuthWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { updatePassword } from "@/actions/resetPassword";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const formSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export const UpdatePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const [data, setData] = useState<{
    password: string;
    confirmPassword: string;
  }>({ password: "", confirmPassword: "" });

  // useEffect(() => {
  //   const handleAuthStateChange = async () => {
  //     try {
  //       const { data: authListener } = supabase.auth.onAuthStateChange(
  //         async (event, session) => {
  //           if (event === "PASSWORD_RECOVERY") {
  //             console.log("Password recovery event detected", session);
  //             setIsReady(true);
  //           }
  //         }
  //       );

  //       if (typeof window !== "undefined") {
  //         if (window.location.hash) {
  //           const hashParams = new URLSearchParams(
  //             window.location.hash.substring(1)
  //           );
  //           const accessToken = hashParams.get("access_token");
  //           const refreshToken = hashParams.get("refresh_token");
  //           const type = hashParams.get("type");

  //           if (accessToken && type === "recovery") {
  //             const { error: sessionError } = await supabase.auth.setSession({
  //               access_token: accessToken,
  //               refresh_token: refreshToken || "",
  //             });

  //             if (sessionError) {
  //               console.error("Session error:", sessionError);
  //               setError(
  //                 "Invalid or expired token. Please request a new password reset link."
  //               );
  //             } else {
  //               console.log("Session set successfully");
  //               setIsReady(true);
  //             }
  //           } else {
  //             setError(
  //               "No valid recovery token found. Please request a new password reset link."
  //             );
  //           }
  //         }
  //       }

  //       return () => {
  //         authListener?.subscription.unsubscribe();
  //       };
  //     } catch (err) {
  //       console.error("Error in auth state handling:", err);
  //       setError(
  //         "Something went wrong. Please request a new password reset link."
  //       );
  //     }
  //   };

  //   handleAuthStateChange();
  // }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // const onSubmit = async (values: FormValues) => {
  //   try {
  //     setIsLoading(true);

  //     const {
  //       data: { session },
  //       error: sessionError,
  //     } = await supabase.auth.getSession();

  //     console.log("Client - Retrieved session:", session);

  //     if (sessionError || !session) {
  //       console.error("No active session found", sessionError);
  //       toast.error(
  //         "Authentication session not found. Try requesting a new reset link."
  //       );
  //       return;
  //     }

  //     console.log("Client - Submitting with session:", session.user.id);
  //     console.log("session: ", session);

  //     const { success, error: updateError } = await updatePassword(
  //       values.password
  //     );

  //     if (updateError) {
  //       console.error("Update error:", updateError);
  //       return;
  //     }

  //     if (success) {
  //       toast.success("Password updated successfully!");
  //       setTimeout(() => {
  //         router.push("/login");
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     console.error("Update password error:", error);
  //     toast.error("Something went wrong. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const confirmPasswords = async () => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword)
      return alert("Your passwords are incorrect");
    const { data: resetData, error } = await supabase.auth.updateUser({
      password: data.password,
    });

    if (resetData) {
      console.log("resetData:", resetData);
      redirect("/login");
    }
    if (error) console.log("error aagya:", error);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthWrapper
        headerLabel="Update Your Password"
        headerDescription="Enter your new password below"
        backLabel="Remember your password?"
        backLabel2="Login instead"
        backLabelHref="/login"
        oauth={false}
      >
        {error ? (
          <div className="text-center space-y-4">
            <p className="text-sm text-red-600">{error}</p>
            <Button
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => router.push("/reset-password")}
            >
              Request New Reset Link
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={confirmPasswords} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your new password"
                        {...field}
                        className="h-12 bg-gray-50/50"
                        // onChange={handleChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm your new password"
                        {...field}
                        className="h-12 bg-gray-50/50"
                        // onChange={handleChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Password"}
              </Button>
            </form>
          </Form>
        )}
      </AuthWrapper>
    </div>
  );
};
