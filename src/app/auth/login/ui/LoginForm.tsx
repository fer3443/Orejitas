"use client";

import React from "react";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { loginSchema } from "@/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const toggle = () => setShowPassword((prev) => !prev);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full border rounded-md shadow-md p-6 max-w-[320px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="pepe@email.com" {...field} />
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
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                     
                      type={showPassword ? "text" : "password"}
                      placeholder="Adopta123"
                      {...field}
                    />
                    <span
                      onClick={toggle}
                      className="absolute right-3 top-3 cursor-pointer text-slate-600"
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-sm">
            <span>
              Olvidaste tu contraseña?
              <Link
                href="/auth/forget-password"
                className="text-blue-500 hover:underline"
              >
                {" "}
                aquí
              </Link>
            </span>
          </div>
          <Button type="submit" className="primary">
            {form.formState.isSubmitting
              ? "Iniciando sesión..."
              : "Iniciar sesión"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
