"use client";

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

function ModalitySelectGroupField({field}: {field: SelectGroupModalityField}) {
  return (
    <SelectGroupField
      groups={field.data}
      label={field.label}
      name={field.name}
      placeholder={field.placeholder}
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
