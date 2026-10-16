"use client";

import {Select as SelectPrimitive} from "@base-ui/react/select";
import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";
import {Select} from "@/shared/components/select/select";

export type SelectBaseProps<
  T extends FieldValues,
  Value = string,
  Multiple extends boolean | undefined = false,
> = Omit<
  SelectPrimitive.Root.Props<Value, Multiple>,
  "value" | "onValueChange" | "defaultValue" | "name"
> & {
  name: FieldPath<T>;
  children: React.ReactNode;
  className?: string;
  label?: string;
};

export function SelectBase<
  T extends FieldValues,
  Value = string,
  Multiple extends boolean | undefined = false,
>({name, children, className, label, ...props}: SelectBaseProps<T, Value, Multiple>) {
  const {control} = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}
          <Select
            name={field.name}
            value={field.value ?? null}
            onValueChange={field.onChange}
            {...props}
          >
            {children}
          </Select>

          {fieldState.invalid && (
            <FieldError className="text-red-400" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
