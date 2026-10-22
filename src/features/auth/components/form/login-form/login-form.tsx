"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {ArrowRightIcon, LockKeyholeOpen, Mail} from "lucide-react";
import {useAction} from "next-safe-action/hooks";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {loginUser} from "@/features/auth/actions/login";
import {loginFormSchema} from "@/features/auth/schemas/login-schema";
import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";
import {InputField} from "@/shared/components/form/input-field.form";
import {InputPasswordField} from "@/shared/components/form/input-password-field.form";
import {toast} from "@/shared/components/toast/toast";
import {ROUTES} from "@/shared/lib/route";

type LoginFormValues = z.output<typeof loginFormSchema>;

export const LoginForm = () => {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: standardSchemaResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {executeAsync, isPending} = useAction(loginUser, {
    onSuccess: () => {
      router.push(ROUTES.home);
      router.refresh();
    },
    onError: ({error}) => {
      toast.add({
        type: "error",
        title: error.serverError ?? "No se pudo crear la cuenta",
      });
    },
  });

  async function onSubmit(data: LoginFormValues) {
    await executeAsync(data);
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

      <Button
        className="mt-4 gap-2"
        loading={isPending}
        size="fullWidth"
        type="submit"
        variant="primary"
      >
        Iniciar Sesión
        <ArrowRightIcon className="size-5" />
      </Button>
    </Form>
  );
};
