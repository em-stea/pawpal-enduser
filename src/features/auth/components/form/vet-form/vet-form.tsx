/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {ArrowRightIcon} from "lucide-react";
import {useForm} from "react-hook-form";

import {Button} from "@/shared/components/button/button";
import {Form} from "@/shared/components/form/form";
import {toast} from "@/shared/components/toast/toast";

import {type FormVetValues, vetFormSchema} from "../../../schemas/vet-schema";

import {FirstStep} from "./first-step";
import {SecondStep} from "./second-step";

const STEP_FIELDS: (keyof FormVetValues)[][] = [
  ["nombre", "apellido", "email", "telefono", "password", "confirmPassword", "acceptTerms"],
  ["matricula", "colegio", "cobertura", "especialidad", "modalidad_atencion"],
];

interface VetFormProps {
  currentStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isLastStep: boolean;
}

export default function VetForm({
  currentStep,
  goToNextStep,
  goToPrevStep,
  isLastStep,
}: VetFormProps) {
  const form = useForm<FormVetValues>({
    resolver: standardSchemaResolver(vetFormSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      matricula: "",
      colegio: "",
      cobertura: [],
      especialidad: [],
      modalidad_atencion: "",
    },
  });

  async function handleNext() {
    const isValid = await form.trigger(STEP_FIELDS[currentStep - 1]);

    if (isValid) goToNextStep();
  }

  function onSubmit(data: FormVetValues) {
    const {confirmPassword, acceptTerms, ...rest} = data;

    console.log(rest);

    toast.add({type: "success", title: "Formulario enviado"});
  }

  return (
    <Form form={form} onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 py-10">
        {currentStep === 1 && <FirstStep />}

        {currentStep === 2 && <SecondStep />}

        <div className="mt-4 flex gap-2">
          {isLastStep ? (
            <div className="flex w-full flex-col gap-2">
              <Button className="gap-2" size="fullWidth" type="submit" variant="primary">
                Registrarme
                <ArrowRightIcon className="size-5" />
              </Button>
              <Button size="fullWidth" type="button" variant="secondary" onClick={goToPrevStep}>
                Atrás
              </Button>
            </div>
          ) : (
            <Button
              className="gap-2"
              size="fullWidth"
              type="button"
              variant="primary"
              onClick={() => void handleNext()}
            >
              Continuar con Registro Profesional
              <ArrowRightIcon className="size-5" />
            </Button>
          )}
        </div>
      </div>
    </Form>
  );
}
