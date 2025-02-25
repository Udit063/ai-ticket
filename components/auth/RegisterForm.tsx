"use client";
import { AuthWrapper } from "./AuthWrapper";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { register } from "@/actions/register";
import { signupWithEmailPassword } from "@/actions/auth";
import { createClient } from "@/lib/supabase/client";
import { Info } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export const RegisterForm = () => {
  const supabase = createClient();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const { data: existingUser, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("email", values.email)
        .single();

      if (existingUser) {
        console.log("existingUser", existingUser);

        setErrorMessage("User already exists with this email. Please log in.");
        return;
      }

      if (userError) {
        console.log("can't able to fetch details");
      }

      const { success, error } = await signupWithEmailPassword(
        values.email,
        values.password
      );

      if (error) {
        return;
      }

      if (success) {
        console.log("hogya");
        router.push("/verify");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthWrapper
        headerLabel="Create an Account"
        headerDescription="Sign up to get started"
        backLabel="Already have an account?"
        backLabel2="Sign In"
        backLabelHref="/login"
        oauth={true}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ankur Sharma"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ankursharma1493@gmail.com"
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
                  <FormLabel className="text-sm font-medium">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Create your password"
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
              Register
            </Button>
            {errorMessage && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <Info size={15} />
                {errorMessage}
              </p>
            )}
          </form>
        </Form>
      </AuthWrapper>
    </div>
  );
};
