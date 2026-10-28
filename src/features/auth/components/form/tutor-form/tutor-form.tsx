"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {ArrowRightIcon} from "lucide-react";
import {useRouter} from "next/navigation";
import {useAction} from "next-safe-action/hooks";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {signupTutor} from "@/features/auth/actions/signup";
import {SignupAccountFields} from "@/features/auth/components/form/signup-account-fields/signup-account-fields";
import {tutorFormSchema} from "@/features/auth/schemas/tutor-schema";
import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";
import {toast} from "@/shared/components/toast/toast";
import {ROUTES} from "@/shared/lib/route";

type FormValues = z.output<typeof tutorFormSchema>;

export default function TutorForm() {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: standardSchemaResolver(tutorFormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
      apartment: "",
      acceptTerms: false,
    },
  });

  const {executeAsync, isPending} = useAction(signupTutor, {
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

  async function onSubmit(data: FormValues) {
    await executeAsync(data);
  }

  return (
    <Form form={form} onSubmit={onSubmit}>
      <SignupAccountFields />
      <Button
        className="mt-4 gap-2"
        loading={isPending}
        size="fullWidth"
        type="submit"
        variant="primary"
      >
        Registrarme
        <ArrowRightIcon className="size-5" />
      </Button>
    </Form>
  );
}
