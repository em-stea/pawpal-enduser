/* eslint-disable @typescript-eslint/no-unused-vars */
import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {useForm} from "react-hook-form";

import {toast} from "@/shared/components/toast/toast";

import {FormVetValues, vetFormSchema} from "../schemas/vet-schema";

const STEP_FIELDS: (keyof FormVetValues)[][] = [
  ["nombre", "apellido", "email", "telefono", "password", "confirmPassword", "acceptTerms"],
  [
    "matricula",
    "colegio",
    "cobertura",
    "especialidad",
    "modalidad_atencion",
    "clinic_name",
    "address",
    "coverage_zones",
  ],
];

interface VetFormProps {
  currentStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isLastStep: boolean;
}

export function useVetForm({currentStep, goToNextStep}: VetFormProps) {
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
      clinic_name: "",
      address: "",
      coverage_zones: [],
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

  return {form, handleNext, onSubmit};
}
