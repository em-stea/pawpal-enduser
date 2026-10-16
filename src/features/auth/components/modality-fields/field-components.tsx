"use client";

import {useFormContext, useWatch} from "react-hook-form";

import {InputField} from "@/shared/components/form/input-field.form";
import {SelectField, SelectGroupField} from "@/shared/components/select/select.variants";

import {
  FieldVariant,
  ModalityField,
  ScheduleModalityField,
  SelectGroupModalityField,
  SelectModalityField,
  TextModalityField,
} from "../../data/care-modality";
import {BusinessHours} from "../business-hours/business-hours";
import {FormVetValues} from "../../schemas/vet-schema";

function ModalityInputTextField({field}: {field: TextModalityField}) {
  return (
    <InputField
      icon={field.icon}
      label={field.label}
      name={field.name}
      placeholder={field.placeholder}
      type={field.inputType}
    />
  );
}

function ModalitySelectField({field}: {field: SelectModalityField}) {
  return (
    <SelectField
      label={field.label}
      name={field.name}
      options={field.items}
      placeholder={field.placeholder}
    />
  );
}

type StringArrayField = {
  [K in keyof FormVetValues]: FormVetValues[K] extends string[] ? K : never;
}[keyof FormVetValues];

function ModalitySelectGroupField({field}: {field: SelectGroupModalityField}) {
  const {control, setValue} = useFormContext<FormVetValues>();
  const name = field.name as StringArrayField;

  const selectedItems = useWatch({control, name});
  const count = selectedItems.length;

  function handleRemove(item: string) {
    setValue(
      name,
      selectedItems.filter((value) => value !== item),
    );
  }

  return (
    <SelectGroupField
      showSelectedBadges
      groups={field.data}
      label={field.label}
      multiple={field.multiple}
      name={name}
      placeholder={field.placeholder}
      selectedItems={selectedItems}
      valueLabel={`${field.label}${count === 0 ? "" : ` (${count.toString()})`}`}
      onRemove={handleRemove}
    />
  );
}

function ModalityScheduleField({field}: {field: ScheduleModalityField}) {
  return <BusinessHours icon={field.icon} />;
}

export type FieldComponentMap = {
  [K in FieldVariant]: React.ComponentType<{field: Extract<ModalityField, {variant: K}>}>;
};

export const FIELD_COMPONENTS: FieldComponentMap = {
  text: ModalityInputTextField,
  select: ModalitySelectField,
  selectGroup: ModalitySelectGroupField,
  schedule: ModalityScheduleField,
};
