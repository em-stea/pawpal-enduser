import {IdCard} from "lucide-react";

import {CARE_COVERAGE_OPTIONS} from "@/features/auth/data/care-coverage";
import {CARE_MODALITY} from "@/features/auth/data/care-modality";
import {VETERINARY_COLLEGES} from "@/features/auth/data/veterinary-colleges";
import {VETERINARY_SPECIALTIES_GROUPS} from "@/features/auth/data/veterinary-specialties";
import {useVetFormSelectors} from "@/features/auth/hooks/use-vet-form-selectors";
import {FieldLabel} from "@/shared/components/field/field";
import {InputField} from "@/shared/components/form/input-field.form";
import {RadioGroupFieldCard} from "@/shared/components/form/radio-group-field-card.form";
import {ToggleGroupField, ToggleGroupItem} from "@/shared/components/form/toggle-group-field.form";
import {SelectField, SelectGroupField} from "@/shared/components/select/select.variants";
import {Text} from "@/shared/components/text/text";

import {ModalityFields} from "../../modality-fields/modality-fields";

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

      <SelectField label="Colegio Veterinario" name="college" options={VETERINARY_COLLEGES} />

      <SelectGroupField
        multiple
        groups={VETERINARY_SPECIALTIES_GROUPS}
        label="Área de Especialidad"
        name="specialty"
        placeholder="Especialidad"
        showSelectedBadges={{
          selectedItems: selectedEspecialidades,
          onRemove: handleRemoveEspecialidad,
        }}
        valueLabel={`Especialidad ${countEspecialidades === 0 ? "" : `(${countEspecialidades.toString()})`}`}
      />

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
