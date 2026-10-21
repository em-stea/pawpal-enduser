"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {ArrowRightIcon, LockKeyholeOpen, Mail} from "lucide-react";
import {signIn} from "next-auth/react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import Link from "next/link";

import {loginFormSchema} from "@/features/auth/schemas/login-schema";
import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";
import {InputField} from "@/shared/components/form/input-field.form";
import {InputPasswordField} from "@/shared/components/form/input-password-field.form";
import {Google} from "@/shared/components/icons";
import {Separator} from "@/shared/components/separator/separator";
import {Text} from "@/shared/components/text/text";
import {ROUTES} from "@/shared/lib/route";

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
        hasForgotPassword
        icon={<LockKeyholeOpen />}
        label="Contraseña"
        name="password"
        placeholder="********"
      />

      <Button className="mt-4 gap-2" size="fullWidth" type="submit" variant="primary">
        Iniciar Sesión
        <ArrowRightIcon className="size-5" />
      </Button>
    </Form>
  );
};
