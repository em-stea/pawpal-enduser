"use client";

import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";
import {
  ToggleGroup,
  ToggleGroupItem,
  type ToggleGroupProps,
} from "@/shared/components/toggle-group/toggle-group";

interface ToggleGroupFieldProps<T extends FieldValues> extends Omit<
  ToggleGroupProps,
  "value" | "onValueChange" | "defaultValue" | "className"
> {
  name: FieldPath<T>;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function ToggleGroupField<T extends FieldValues>({
  name,
  label,
  children,
  className,
  ...props
}: ToggleGroupFieldProps<T>) {
  const {control} = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          {label && <FieldLabel>{label}</FieldLabel>}

          <ToggleGroup value={field.value} onValueChange={field.onChange} {...props}>
            {children}
          </ToggleGroup>

          {fieldState.invalid && (
            <FieldError className="text-red-400" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}

export {ToggleGroupItem};
