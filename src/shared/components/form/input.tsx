"use client";

import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";
import {Input as InputPrimitive} from "@base-ui/react/input";

import {cn} from "@/shared/lib/tw-merge/utils";
import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";

import {inputVariants} from "./input.styles";

interface InputFieldProps<T extends FieldValues> extends React.ComponentProps<
  typeof InputPrimitive
> {
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
}

export function InputField<T extends FieldValues>({
  label,
  name,
  placeholder,
  className,
  type = "text",
  ...props
}: InputFieldProps<T>) {
  const {control} = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}

          <InputPrimitive
            {...field}
            aria-invalid={fieldState.invalid}
            className={cn(inputVariants(), className)}
            data-slot="input"
            id={field.name}
            placeholder={placeholder}
            type={type}
            value={field.value ?? ""}
            {...props}
          />

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
