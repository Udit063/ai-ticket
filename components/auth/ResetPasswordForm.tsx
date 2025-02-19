"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
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
import { resetPassword } from "@/actions/resetPassword";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    // try {
    //   setIsLoading(true);
    //   const { success, error } = await resetPassword(values.email);

    //   if (error) {
    //     toast.error(error);
    //     return;
    //   }

    //   if (success) {
    //     setEmailSent(true);
    //     toast.success("Reset link sent! Check your email inbox.");
    //   }
    // } catch (error) {
    //   console.error("Reset password error:", error);
    //   toast.error("Something went wrong. Please try again.");
    // } finally {
    //   setIsLoading(false);
    // }
    try {
      setIsLoading(true);
      const { data, success, error } =
        await supabase.auth.resetPasswordForEmail(values.email, {
          redirectTo: `http://localhost:3000/update-password`,
        });
      if (success) setEmailSent(true);
      console.log("gya mail", values.email);
      console.log("gya data", data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthWrapper
        headerLabel="Reset Your Password"
        headerDescription={
          emailSent
            ? "Check your email for a reset link"
            : "Enter your email to receive a reset link"
        }
        backLabel="Remember your password?"
        backLabel2="Login instead"
        backLabelHref="/login"
        oauth={false}
      >
        {!emailSent ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        className="h-12 bg-gray-50/50"
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
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          </Form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              We&apos;ve sent a password reset link to your email. Please check
              your inbox and follow the instructions.
            </p>
            <Button
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => setEmailSent(false)}
            >
              Send again
            </Button>
          </div>
        )}
      </AuthWrapper>
    </div>
  );
};
