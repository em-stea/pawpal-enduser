"use client";

import {InputField} from "@/shared/components/form/input-field.form";
import {SelectField} from "@/shared/components/select/select.variants";

import {
  FieldVariant,
  ModalityField,
  ScheduleModalityField,
  SelectBadgeModalityField,
  SelectModalityField,
  TextModalityField,
} from "../../data/care-modality";
import {useLocationGroups} from "../../hooks/use-location-groups";
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

function ModalitySelectBadgesField({field}: {field: SelectBadgeModalityField}) {
  const {filteredData, count, selectedItems, isProvinceSelected, handleRemove, cityLabel} =
    useLocationGroups(field);

  return (
    <SelectField
      disabled={!isProvinceSelected}
      label={cityLabel}
      multiple={field.multiple}
      name={field.name}
      options={filteredData[0]?.items ?? []}
      placeholder={cityLabel}
      showSelectedBadges={{selectedItems, onRemove: handleRemove}}
      valueLabel={`${cityLabel}${count === 0 ? "" : ` (${count.toString()})`}`}
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
  selectGroup: ModalitySelectBadgesField,
  schedule: ModalityScheduleField,
};
