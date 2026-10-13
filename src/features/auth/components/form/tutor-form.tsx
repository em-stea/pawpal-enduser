"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {LockKeyhole, LockKeyholeOpen, Mail, Phone, UserIcon} from "lucide-react";

import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";
import {toast} from "@/shared/components/toast/toast";
import {InputField} from "@/shared/components/form/input";
import {InputPassword} from "@/shared/components/form/input-password";

import {tutorFormSchema} from "../../shemas/tutor-schema";

type FormValues = z.infer<typeof tutorFormSchema>;

export default function TutorForm() {
  const form = useForm<FormValues>({
    resolver: standardSchemaResolver(tutorFormSchema),
    defaultValues: {nombre: "", apellido: ""},
  });

  function onSubmit(data: FormValues) {
    console.log(data);
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
        // icon={<LockKeyholeOpen />}
        label="Contraseña"
        name="contrasena"
        placeholder="********"
        type="password"
      />
      <InputPassword
        icon={<LockKeyhole />}
        label="Confirmar Contraseña"
        name="confirmarContrasena"
        placeholder="********"
        type="password"
      />
      <Button className="mt-4" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
