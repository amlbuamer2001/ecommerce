"use client";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/src/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function Login() {
  let router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(values) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(res);

    // if(res.ok) {
    //   toast.success("Login Successful");
    //   router.push("/");
    // }

    // try {
    //   console.log(values);

    //   let response = await axios.post(
    //     `https://ecommerce.routemisr.com/api/v1/auth/signin`,
    //     values
    //   );

    //   if (response.data.message === "success") {
    //     toast.success("Login Successful");
    //     router.push("/");
    //   }
    // } catch (error) {
    //   toast.error(error.response.data.message, {
    //     position: "top-right",
    //     duration: 3000,
    //   });
    // }
  }
  return (
    <>
      <div className="w-1/2 mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="mb-4" type="email" {...field} />
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
                    <Input className="mb-4" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
