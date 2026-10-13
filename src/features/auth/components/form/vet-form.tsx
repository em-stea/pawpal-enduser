/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {ArrowRightIcon, LockKeyhole, LockKeyholeOpen, Mail, Phone, UserIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/shared/components/button/button";
import {CheckboxField} from "@/shared/components/checkbox/checkbox-field";
import {Form} from "@/shared/components/form/form";
import {InputField} from "@/shared/components/form/input";
import {InputPassword} from "@/shared/components/form/input-password";
import {Text} from "@/shared/components/text/text";
import {toast} from "@/shared/components/toast/toast";

import {tutorFormSchema} from "../../schemas/tutor-schema";

type FormValues = z.output<typeof tutorFormSchema>;

export default function VetForm() {
  const form = useForm<FormValues>({
    resolver: standardSchemaResolver(tutorFormSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  function onSubmit(data: FormValues) {
    const {confirmPassword, ...rest} = data;

    console.log(rest);

    toast.add({type: "success", title: "Formulario enviado"});
  }

  return (
    <Form form={form} onSubmit={onSubmit}>
      <InputField icon={<UserIcon />} label="Nombre" name="nombre" placeholder="Jordan" />
      <InputField icon={<UserIcon />} label="Apellido" name="apellido" placeholder="Lee" />
      <InputField
        icon={<Mail />}
        label="Email"
        name="email"
        placeholder="name@example.com"
        type="email"
      />
      <InputField
        icon={<Phone />}
        label="Teléfono"
        name="telefono"
        placeholder="(+54) 11-1234-5678"
        type="tel"
      />
      <InputPassword
        icon={<LockKeyholeOpen />}
        label="Contraseña"
        name="password"
        placeholder="********"
        type="password"
      />
      <InputPassword
        icon={<LockKeyhole />}
        label="Confirmar Contraseña"
        name="confirmPassword"
        placeholder="********"
        type="password"
      />
      <div className="items-flex-start flex gap-2">
        <CheckboxField name="acceptTerms">
          <Text variant="body.1">
            Acepto los Términos y Condiciones y las Políticas de Privacidad.
          </Text>
        </CheckboxField>
      </div>
      <Button className="mt-4 gap-2" size="fullWidth" type="submit" variant="primary">
        Registrarme
        <ArrowRightIcon className="size-5" />
      </Button>
    </Form>
  );
}
