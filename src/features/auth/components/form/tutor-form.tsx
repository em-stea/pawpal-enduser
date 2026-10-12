"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {UserIcon} from "lucide-react";

import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";
import {toast} from "@/shared/components/toast/toast";
import {InputField} from "@/shared/components/form/input";

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
      <InputField icon={<UserIcon />} label="Nombre" name="nombre" placeholder="Nombre" />
      <InputField label="Apellido" name="apellido" placeholder="Apellido" />
      <Button className="mt-4" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
