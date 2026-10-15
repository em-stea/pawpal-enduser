"use client";

import {InputField} from "@/shared/components/form/input-field";
import {TagsField} from "@/shared/components/form/tags-field";

import {FieldType, ModalityField} from "../../data/care-modality";

export interface FieldComponentProps {
  field: ModalityField;
}

function TextField({field}: FieldComponentProps) {
  return (
    <InputField
      icon={field.icon}
      label={field.label}
      name={field.name}
      placeholder={field.placeholder}
    />
  );
}

function TagsModalityField({field}: FieldComponentProps) {
  return (
    <TagsField
      icon={field.icon}
      label={field.label}
      name={field.name}
      placeholder={field.placeholder}
    />
  );
}

export const FIELD_COMPONENTS: Record<FieldType, React.ComponentType<FieldComponentProps>> = {
  text: TextField,
  tags: TagsModalityField,
};
