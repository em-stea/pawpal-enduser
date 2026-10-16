/* eslint-disable @typescript-eslint/no-unused-vars */
import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {useForm} from "react-hook-form";

import {toast} from "@/shared/components/toast/toast";

import {FormVetValues, vetFormSchema} from "../schemas/vet-schema";

const STEP_FIELDS: (keyof FormVetValues)[][] = [
  ["name", "lastName", "email", "phone", "password", "confirmPassword", "acceptTerms"],
  [
    "enrollment",
    "college",
    "animalTypes",
    "specialty",
    "modality",
    "clinicName",
    "clinicAddress",
    "clinicPhone",
    "coverageProvince",
    "coverageZones",
    "daysOfAttention",
    "fromBusinessHours",
    "toBusinessHours",
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
      name: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      enrollment: "",
      college: "",
      animalTypes: [],
      specialty: [],
      modality: "",
      clinicName: "",
      clinicAddress: "",
      clinicPhone: "",
      coverageProvince: "",
      coverageZones: [],
      daysOfAttention: [],
      fromBusinessHours: "",
      toBusinessHours: "",
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
