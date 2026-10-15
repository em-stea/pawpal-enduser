import {useFormContext, useWatch} from "react-hook-form";

import {FieldLabel} from "@/shared/components/field/field";
import {ToggleGroupField, ToggleGroupItem} from "@/shared/components/form/toggle-group-field";
import {Text} from "@/shared/components/text/text";

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
    <div className="flex flex-col gap-2">
      <FieldLabel count={countDaysOfAttention} icon={icon}>
        Horarios de Atención
      </FieldLabel>
      <Text className="mt-2 mb-1" variant="body.1">
        Días de Atención
      </Text>

      <ToggleGroupField multiple className="mb-6.5" name="daysOfAttention" variant="fill-wide">
        {DAYS_OF_ATTENTION.map((option) => (
          <ToggleGroupItem key={option.value} size="sm" value={option.value} variant="fill">
            <div className="flex items-center gap-2">
              <Text variant="button">{option.label}</Text>
            </div>
          </ToggleGroupItem>
        ))}
      </ToggleGroupField>
    </div>
  );
};
