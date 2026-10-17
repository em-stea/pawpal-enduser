import {useFormContext, useWatch} from "react-hook-form";

import {FormVetValues} from "../schemas/vet-schema";
import {SelectModalityField} from "../data/care-modality";

export const useMultipleSelectField = ({field}: {field: SelectModalityField}) => {
  type StringArrayField = {
    [K in keyof FormVetValues]: FormVetValues[K] extends string[] ? K : never;
  }[keyof FormVetValues];

  const name = field.name as StringArrayField;

  const {control, setValue} = useFormContext<FormVetValues>();

  const rawValue = useWatch({control, name});
  const selectedItems = Array.isArray(rawValue)
    ? rawValue
    : typeof rawValue === "string"
      ? [rawValue]
      : [];

  const countItems = selectedItems.length;

  function handleRemove(item: string) {
    if (!field.multiple) {
      setValue(name, [] as string[]);

      return;
    }

    setValue(
      name,
      selectedItems.filter((i) => i !== item),
    );
  }
  const showBadges = field.multiple ? {selectedItems, onRemove: handleRemove} : undefined;

  const valueLabel = field.multiple
    ? `${field.placeholder}${countItems === 0 ? "" : ` (${countItems.toString()})`}`
    : undefined;

  return {
    showBadges,
    valueLabel,
  };
};
