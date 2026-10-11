"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";
import {toast} from "@/shared/components/toast/toast";
import {InputField} from "@/shared/components/form/input";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name title must be at most 32 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function TutorForm() {
  const form = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
    defaultValues: {title: ""},
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast.add({type: "success", title: "Formulario enviado"});
  }

  return (
    <Form form={form} onSubmit={onSubmit}>
      <InputField label="Nombre" name="title" placeholder="Nombre" />
      <Button className="mt-4" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
