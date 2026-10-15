import {useFormContext, useWatch} from "react-hook-form";
import {Clock} from "lucide-react";

import {FieldLabel} from "@/shared/components/field/field";
import {ToggleGroupField, ToggleGroupItem} from "@/shared/components/form/toggle-group-field";
import {Text} from "@/shared/components/text/text";
import {TimeInputField} from "@/shared/components/form/time-input-field";
import {Separator} from "@/shared/components/separator/separator";

import {DAYS_OF_ATTENTION} from "../../data/days-attention";
import {FormVetValues} from "../../schemas/vet-schema";

interface BusinessHoursProps {
  icon: React.ReactNode;
}

export const BusinessHours = ({icon}: BusinessHoursProps) => {
  const {control} = useFormContext<FormVetValues>();
  const selectedDaysOfAttention = useWatch({control, name: "daysOfAttention"});
  const countDaysOfAttention = selectedDaysOfAttention.length;

  return (
    <div className="my-2 flex flex-col gap-2 rounded-lg border border-tertiary-500 pt-4">
      <div className="px-4">
        <FieldLabel count={countDaysOfAttention} icon={icon}>
          Horarios de Atención
        </FieldLabel>
      </div>
      <Separator />
      <div className="px-4 pb-4">
        <Text className="mt-4 mb-2 font-medium" variant="body.2">
          Días Disponibles
        </Text>

        <ToggleGroupField multiple className="mb-10" name="daysOfAttention" variant="fill-wide">
          {DAYS_OF_ATTENTION.map((option) => (
            <ToggleGroupItem key={option.value} size="sm" value={option.value} variant="fill">
              <Text variant="button">{option.label}</Text>
            </ToggleGroupItem>
          ))}
        </ToggleGroupField>

        <div className="gap-0">
          <Text className="font-medium" variant="body.2">
            Franja Horaria
          </Text>

          <Text className="mb-4 text-tertiary-400" variant="body.1">
            Formato 24 hs (ej: 08:00 a 20:00)
          </Text>
        </div>
        <div className="flex gap-2">
          <TimeInputField
            icon={<Clock />}
            label="Desde"
            name="fromBusinessHours"
            placeholder="00:00"
          />
          <TimeInputField
            icon={<Clock />}
            label="Hasta"
            name="toBusinessHours"
            placeholder="00:00"
          />
        </div>
      </div>
    </div>
  );
};
