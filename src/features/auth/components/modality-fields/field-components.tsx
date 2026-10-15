"use client";

import {InputField} from "@/shared/components/form/input-field";
import {InputTagsField} from "@/shared/components/form/input-tags-field";

import {BusinessHours} from "../business-hours/business-hours";
import {
  FieldVariant,
  ModalityField,
  ScheduleModalityField,
  TagsModalityField,
  TextModalityField,
} from "../../data/care-modality";

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

function ModalityInputTagsField({field}: {field: TagsModalityField}) {
  return (
    <InputTagsField
      icon={field.icon}
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
  tags: ModalityInputTagsField,
  schedule: ModalityScheduleField,
};
