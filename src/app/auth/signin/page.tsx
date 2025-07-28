"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useSignIn from "@/hooks/auth/useSignIn";
import useSignUp from "@/hooks/auth/useSignUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SignUpFormValues = z.infer<typeof formSchema>;

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { isLoading, signIn } = useSignIn();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignUpFormValues) {
    const response = await signIn({
      email: values.email,
      password: values.password,
    });

    console.log(response);

    form.reset();
    toast.success("Logged in successfully");
    router.push("/blog");
  }

  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/"
        className="text-sm text-gray-600 hover:text-brand-700 transition-colors flex items-center"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to home
      </Link>

      <Card className="shadow-lg border-0">
        <CardHeader className="text-center space-y-2">
          <div className="w-12 h-12 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg mx-auto mb-2"></div>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@doe.com"
                        {...field}
                        type="email"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your password"
                          {...field}
                          type={showPassword ? "text" : "password"}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
