"use client";

import {Select as SelectPrimitive} from "@base-ui/react/select";
import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Field, FieldError} from "@/shared/components/field/field";
import {Select} from "@/shared/components/select/select";

interface SelectFieldProps<T extends FieldValues> extends Omit<
  SelectPrimitive.Root.Props<string>,
  "value" | "onValueChange" | "defaultValue" | "name"
> {
  name: FieldPath<T>;
  children: React.ReactNode;
  className?: string;
}

export function SelectField<T extends FieldValues>({
  name,
  children,
  className,
  ...props
}: SelectFieldProps<T>) {
  const {control} = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          <Select name={field.name} value={field.value} onValueChange={field.onChange} {...props}>
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
