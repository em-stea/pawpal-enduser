"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {useForm} from "react-hook-form";
import z from "zod";
import {LockKeyholeOpen, Mail} from "lucide-react";

import {loginFormSchema} from "@/features/auth/schemas/login-schema";
import {Form} from "@/shared/components/form/form";
import {InputField} from "@/shared/components/form/input-field.form";
import {InputPasswordField} from "@/shared/components/form/input-password-field.form";

type LoginFormValues = z.output<typeof loginFormSchema>;

export const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: standardSchemaResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormValues) {
    console.log(data);
  }

  return (
    <Form form={form} onSubmit={onSubmit}>
      <InputField
        icon={<Mail />}
        label="Email"
        name="email"
        placeholder="name@example.com"
        type="email"
      />
      <InputPasswordField
        icon={<LockKeyholeOpen />}
        label="Contraseña"
        name="password"
        placeholder="********"
      />
    </Form>
  );
};
