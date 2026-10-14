/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {
  ArrowRightIcon,
  IdCard,
  LockKeyhole,
  LockKeyholeOpen,
  Mail,
  Phone,
  UserIcon,
} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/shared/components/button/button";
import {CheckboxField} from "@/shared/components/checkbox/checkbox-field";
import {Form} from "@/shared/components/form/form";
import {InputField} from "@/shared/components/form/input";
import {InputPassword} from "@/shared/components/form/input-password";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/form/select";
import {Text} from "@/shared/components/text/text";
import {toast} from "@/shared/components/toast/toast";

import {VETERINARY_COLLEGES} from "../../data/veterinary-colleges";
import {tutorFormSchema} from "../../schemas/tutor-schema";

type FormValues = z.output<typeof tutorFormSchema>;

const STEP_FIELDS: (keyof FormValues)[][] = [
  ["nombre", "apellido", "email", "telefono", "password", "confirmPassword", "acceptTerms"],
  ["matricula", "colegio"],
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
      matricula: "",
      colegio: "",
    },
  });

  async function handleNext() {
    const isValid = await form.trigger(STEP_FIELDS[currentStep - 1]);

    if (isValid) goToNextStep();
  }

  function onSubmit(data: FormValues) {
    const {confirmPassword, acceptTerms, ...rest} = data;

    console.log(rest);

    toast.add({type: "success", title: "Formulario enviado"});
  }

  return (
    <Form form={form} onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 py-10">
        {currentStep === 1 && (
          <>
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
            />
            <InputPassword
              icon={<LockKeyhole />}
              label="Confirmar Contraseña"
              name="confirmPassword"
              placeholder="********"
            />
            <CheckboxField name="acceptTerms">
              <Text variant="body.1">
                Acepto los Términos y Condiciones y las Políticas de Privacidad.
              </Text>
            </CheckboxField>
          </>
        )}

        {currentStep === 2 && (
          <>
            <InputField
              icon={<IdCard />}
              label="Matrícula Veterinaria (M.V.)"
              name="matricula"
              placeholder="12345"
              type="number"
            />
            {/* <InputField
              icon={<Landmark />}
              label="Colegio Veterinario"
              name="colegio"
              placeholder="Colegio"
            /> */}
            <Select
              // icon={<Landmark />}
              // label="Colegio Veterinario"
              items={VETERINARY_COLLEGES}
              name="colegio"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Colegio" />
              </SelectTrigger>
              <SelectContent>
                {VETERINARY_COLLEGES.map((college) => (
                  <SelectItem key={college.value} value={college.value}>
                    {college.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )}

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
