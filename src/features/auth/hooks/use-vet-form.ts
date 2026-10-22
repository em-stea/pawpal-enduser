import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {useRouter} from "next/navigation";
import {useAction} from "next-safe-action/hooks";
import {useForm} from "react-hook-form";

import {signupVet} from "@/features/auth/actions/signup";
import {toast} from "@/shared/components/toast/toast";
import {ROUTES} from "@/shared/lib/route";

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
    "clinicPhone",
    "coverageProvince",
    "coverageZones",
    "daysOfAttention",
    "fromBusinessHours",
    "toBusinessHours",
    "onlinePlatform",
  ],
];

interface VetFormProps {
  currentStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isLastStep: boolean;
}

export function useVetForm({currentStep, goToNextStep}: VetFormProps) {
  const router = useRouter();

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
      clinicPhone: "",
      coverageProvince: "",
      coverageZones: [],
      daysOfAttention: [],
      fromBusinessHours: "",
      toBusinessHours: "",
      onlinePlatform: [],
    },
  });

  const {executeAsync, isPending} = useAction(signupVet, {
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

  async function handleNext() {
    const isValid = await form.trigger(STEP_FIELDS[currentStep - 1]);

    if (isValid) goToNextStep();
  }

  async function onSubmit(data: FormVetValues) {
    await executeAsync(data);
  }

  return {form, handleNext, onSubmit, isPending};
}
