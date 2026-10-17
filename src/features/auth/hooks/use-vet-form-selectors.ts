import {useFormContext, useWatch} from "react-hook-form";

import {FormVetValues} from "../schemas/vet-schema";

export const useVetFormSelectors = () => {
  const {control, setValue, resetField} = useFormContext<FormVetValues>();

  const selectedCobertura = useWatch({control, name: "animalTypes"});
  const countCobertura = selectedCobertura.length;

  const selectedEspecialidades = useWatch({control, name: "specialty"});
  const countEspecialidades = selectedEspecialidades.length;

  function handleRemoveEspecialidad(especialidad: string) {
    setValue(
      "specialty",
      selectedEspecialidades.filter((e) => e !== especialidad),
    );
  }

  function handleModalityChange() {
    resetField("clinicName");
    resetField("clinicAddress");
    resetField("clinicPhone");
    resetField("coverageProvince");
    resetField("coverageZones");
    resetField("onlinePlatform");
    resetField("daysOfAttention");
    resetField("fromBusinessHours");
    resetField("toBusinessHours");
    resetField("onlinePlatform");
  }

  return {
    countCobertura,
    selectedEspecialidades,
    countEspecialidades,
    handleRemoveEspecialidad,
    handleModalityChange,
  };
};
