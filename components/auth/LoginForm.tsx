"use client";
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
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinWithEmailPassword } from "@/actions/auth";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);
      const { success, error } = await signinWithEmailPassword(
        values.email,
        values.password
      );

      if (error) {
        console.log("error", error);
        return { error: error };
      }

      if (success) console.log("hogya");

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthWrapper
        headerLabel="Welcome Back"
        headerDescription="Sign in to your account"
        backLabel="Don't have an account?"
        backLabel2="Register Now"
        backLabelHref="/register"
        oauth={true}
      >
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
                      placeholder="example @gmail.com"
                      {...field}
                      className="h-12 bg-gray-50/50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex w-full justify-between">
                    <FormLabel className="text-sm font-medium">
                      Password
                    </FormLabel>
                    <Link
                      href="/reset-password"
                      className="text-xs text-purple-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
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
              Login
            </Button>
          </form>
        </Form>
      </AuthWrapper>
    </div>
  );
};
