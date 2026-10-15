import {CircleCheckBig, IdCard} from "lucide-react";
import {Fragment} from "react/jsx-runtime";

import {CARE_COVERAGE_OPTIONS} from "@/features/auth/data/care-coverage";
import {CARE_MODALITY} from "@/features/auth/data/care-modality";
import {VETERINARY_COLLEGES} from "@/features/auth/data/veterinary-colleges";
import {VETERINARY_SPECIALTIES_GROUPS} from "@/features/auth/data/veterinary-specialties";
import {useVetFormSelectors} from "@/features/auth/hooks/use-vet-form-selectors";
import {FieldLabel} from "@/shared/components/field/field";
import {InputField} from "@/shared/components/form/input-field";
import {RadioGroupFieldCard} from "@/shared/components/form/radio-group-field-card";
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

import {ModalityFields} from "../../modality-fields/modality-fields";
import {RemovableBadge} from "../../removable-badge/removable-badge";

export const SecondStep = () => {
  const {
    countCobertura,
    selectedEspecialidades,
    countEspecialidades,
    handleRemoveEspecialidad,
    handleModalityChange,
  } = useVetFormSelectors();

  return (
    <>
      <FieldLabel count={countCobertura}>Cobertura de Atención</FieldLabel>

      <ToggleGroupField multiple className="mb-6.5" name="animalTypes" variant="fill">
        {CARE_COVERAGE_OPTIONS.map((option) => (
          <ToggleGroupItem key={option.value} size="lg" value={option.value} variant="fill">
            <div className="flex items-center gap-2">
              {option.icon}
              <Text variant="button">{option.label}</Text>
            </div>
          </ToggleGroupItem>
        ))}
      </ToggleGroupField>

      <InputField
        icon={<IdCard />}
        inputMode="numeric"
        label="Matrícula Veterinaria (M.V.)"
        name="enrollment"
        placeholder="12345"
        type="text"
      />

      <SelectField items={VETERINARY_COLLEGES} label="Colegio Veterinario" name="college">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona un Colegio" />
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
        name="specialty"
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
          <RemovableBadge
            key={especialidad}
            icon={CircleCheckBig}
            value={especialidad}
            onRemove={() => handleRemoveEspecialidad(especialidad)}
          />
        ))}
      </div>

      <RadioGroupFieldCard
        label="Modalidad de Atención"
        name="modality"
        options={CARE_MODALITY}
        renderContent={(modality) => <ModalityFields fields={modality.fields} />}
        onValueChange={handleModalityChange}
      />
    </>
  );
};
