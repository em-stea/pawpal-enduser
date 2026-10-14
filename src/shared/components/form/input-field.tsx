"use client";

import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";
import {Input} from "@/shared/components/input/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/components/input-group/input-group";

interface InputFieldProps<T extends FieldValues> extends React.ComponentProps<typeof Input> {
  label?: string;
  name: FieldPath<T>;
  placeholder?: string;
  icon?: React.ReactNode;
}

export function InputField<T extends FieldValues>({
  label,
  name,
  placeholder,
  className,
  type = "text",
  icon,
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

          {icon ? (
            <InputGroup>
              <InputGroupInput
                {...field}
                aria-invalid={fieldState.invalid}
                className={className}
                id={field.name}
                placeholder={placeholder}
                type={type}
                value={field.value ?? ""}
                {...props}
              />
              <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>
            </InputGroup>
          ) : (
            <Input
              {...field}
              aria-invalid={fieldState.invalid}
              className={className}
              id={field.name}
              placeholder={placeholder}
              type={type}
              value={field.value ?? ""}
              {...props}
            />
          )}

          {fieldState.invalid && (
            <FieldError className="text-red-400" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
