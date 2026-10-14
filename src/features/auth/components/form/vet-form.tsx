/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import {
  ArrowRightIcon,
  Award,
  CircleCheckBig,
  Cross,
  IdCard,
  LockKeyhole,
  LockKeyholeOpen,
  Mail,
  Phone,
  UserIcon,
  X,
} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Fragment} from "react/jsx-runtime";

import {Button} from "@/shared/components/button/button";
import {CheckboxField} from "@/shared/components/form/checkbox-field";
import {Form} from "@/shared/components/form/form";
import {InputField} from "@/shared/components/form/input-field";
import {InputPasswordField} from "@/shared/components/form/input-password-field";
import {SelectField} from "@/shared/components/form/select-field";
import {ToggleGroupField, ToggleGroupItem} from "@/shared/components/form/toggle-group-field";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/select/select";
import {Text} from "@/shared/components/text/text";
import {toast} from "@/shared/components/toast/toast";
import {Badge} from "@/shared/components/badge/badge";

import {CARE_COVERAGE_OPTIONS} from "../../data/care-coverage";
import {VETERINARY_COLLEGES} from "../../data/veterinary-colleges";
import {VETERINARY_SPECIALTIES_GROUPS} from "../../data/veterinary-specialties";
import {vetFormSchema} from "../../schemas/vet-schema";

type FormValues = z.output<typeof vetFormSchema>;

const STEP_FIELDS: (keyof FormValues)[][] = [
  ["nombre", "apellido", "email", "telefono", "password", "confirmPassword", "acceptTerms"],
  ["matricula", "colegio", "cobertura", "especialidad"],
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
    },
  });

  const selectedCobertura = form.watch("cobertura");
  const countCobertura = selectedCobertura.length;

  const selectedEspecialidades = form.watch("especialidad");
  const countEspecialidades = selectedEspecialidades.length;

  async function handleNext() {
    const isValid = await form.trigger(STEP_FIELDS[currentStep - 1]);

    if (isValid) goToNextStep();
  }

  function handleRemoveEspecialidad(especialidad: string) {
    form.setValue(
      "especialidad",
      selectedEspecialidades.filter((e) => e !== especialidad),
    );
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
            <InputPasswordField
              icon={<LockKeyholeOpen />}
              label="Contraseña"
              name="password"
              placeholder="********"
            />
            <InputPasswordField
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
            <div className="flex items-center justify-between gap-2">
              <Text variant="body.2">Cobertura de Atención</Text>
              <Text className="text-tertiary-500" variant="body.1">
                {countCobertura} {countCobertura === 1 ? "Seleccionado" : "Seleccionados"}
              </Text>
            </div>
            <ToggleGroupField multiple className="mb-6.5" name="cobertura" variant="fill">
              {CARE_COVERAGE_OPTIONS.map((option) => (
                <ToggleGroupItem
                  key={option.value as string}
                  value={option.value as string}
                  variant="fullColor"
                >
                  <div className="flex items-center gap-2">
                    {option.icon}
                    <Text variant="button">{option.label}</Text>
                  </div>
                </ToggleGroupItem>
              ))}
            </ToggleGroupField>

            <InputField
              icon={<IdCard />}
              label="Matrícula Veterinaria (M.V.)"
              name="matricula"
              placeholder="12345"
              type="number"
            />

            <SelectField items={VETERINARY_COLLEGES} label="Colegio Veterinario" name="colegio">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un colegio" />
              </SelectTrigger>
              <SelectContent>
                {VETERINARY_COLLEGES.map((college) => (
                  <SelectItem key={college.value} value={college.value}>
                    {college.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectField>

            <SelectField
              multiple
              items={VETERINARY_SPECIALTIES_GROUPS}
              label="Área de Especialidad"
              name="especialidad"
            >
              <SelectTrigger className="w-full">
                <SelectValue>
                  {` Especialidad ${countEspecialidades === 0 ? "" : `(${countEspecialidades.toString()})`}`}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {VETERINARY_SPECIALTIES_GROUPS.map((group) => (
                  <Fragment key={group.label}>
                    <SelectGroup>
                      <SelectLabel>{group.label}</SelectLabel>
                      {group.items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectSeparator />
                  </Fragment>
                ))}
              </SelectContent>
            </SelectField>
            <div className="flex flex-wrap items-center gap-2">
              {selectedEspecialidades.map((especialidad) => (
                <Badge key={especialidad} variant="default">
                  <CircleCheckBig /> {especialidad}{" "}
                  <Button
                    size="intrinsic"
                    variant="icon"
                    onClick={() => handleRemoveEspecialidad(especialidad)}
                  >
                    <X className="ml-2 size-4.5 stroke-[2.5]" />
                  </Button>
                </Badge>
              ))}
            </div>
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
