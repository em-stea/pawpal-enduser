import {useFormContext, useWatch} from "react-hook-form";

import {FormVetValues} from "../schemas/vet-schema";
import {PROVINCES_LIST} from "../data/provinces-list";
import {SelectBadgeModalityField} from "../data/care-modality";

export function useLocationGroups(field: SelectBadgeModalityField) {
  type StringArrayField = {
    [K in keyof FormVetValues]: FormVetValues[K] extends string[] ? K : never;
  }[keyof FormVetValues];

  const {control, setValue} = useFormContext<FormVetValues>();

  const selectedProvince = useWatch({
    control,
    name: "coverageProvince",
  });

  const provinceLabel = PROVINCES_LIST.find(
    (province) => province.value === selectedProvince,
  )?.label;

  const isCaba = provinceLabel === PROVINCES_LIST[1].label;
  const cityLabel = isCaba ? "Barrio" : "Ciudad";

  const filteredData = provinceLabel
    ? field.data.filter((group) => group.label === provinceLabel)
    : [];

  const name = field.name as StringArrayField;
  const selectedItems = useWatch({control, name});
  const count = selectedItems.length;
  const isProvinceSelected = Boolean(selectedProvince);

  function handleRemove(item: string) {
    setValue(
      name,
      selectedItems.filter((value) => value !== item),
    );
  }

  return {
    filteredData,
    count,
    selectedItems,
    isProvinceSelected,
    handleRemove,
    cityLabel,
  };
}
