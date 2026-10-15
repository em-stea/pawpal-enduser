import {CircleCheckBig, IdCard, X} from "lucide-react";
import {Fragment} from "react/jsx-runtime";
import {useFormContext, useWatch} from "react-hook-form";

import {CARE_COVERAGE_OPTIONS} from "@/features/auth/data/care-coverage";
import {VETERINARY_COLLEGES} from "@/features/auth/data/veterinary-colleges";
import {VETERINARY_SPECIALTIES_GROUPS} from "@/features/auth/data/veterinary-specialties";
import {type FormVetValues} from "@/features/auth/schemas/vet-schema";
import {Badge} from "@/shared/components/badge/badge";
import {Button} from "@/shared/components/button/button";
import {InputField} from "@/shared/components/form/input-field";
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
import {RadioGroupFieldCard} from "@/shared/components/form/radio-group-field-card";
import {CARE_MODALITY} from "@/features/auth/data/care-modality";

import {ModalityFields} from "../../field-components/modality-fields";

export const SecondStep = () => {
  const {control, setValue} = useFormContext<FormVetValues>();

  const selectedCobertura = useWatch({control, name: "cobertura"});
  const countCobertura = selectedCobertura.length;

  const selectedEspecialidades = useWatch({control, name: "especialidad"});
  const countEspecialidades = selectedEspecialidades.length;

  function handleRemoveEspecialidad(especialidad: string) {
    setValue(
      "especialidad",
      selectedEspecialidades.filter((e) => e !== especialidad),
    );
  }

  return (
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

      <div className="mb-6.5 flex flex-wrap items-center gap-2">
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

      <RadioGroupFieldCard
        label="Modalidad de Atención"
        name="modalidad_atencion"
        options={CARE_MODALITY}
        renderContent={(modality) => <ModalityFields fields={modality.fields} />}
      />
    </>
  );
};
