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
  onChange,
  onBlur,
  ...props
}: InputFieldProps<T>) {
  const {control} = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => {
        const inputProps = {
          ...field,
          ...props,
          "aria-invalid": fieldState.invalid,
          className,
          id: field.name,
          placeholder,
          type,
          value: field.value ?? "",
          onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
            field.onBlur();
            onBlur?.(event);
          },
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event);
            onChange?.(event);
          },
        };

        return (
          <Field data-invalid={fieldState.invalid}>
            {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}

            {icon ? (
              <InputGroup>
                <InputGroupInput {...inputProps} />
                <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>
              </InputGroup>
            ) : (
              <Input {...inputProps} />
            )}

            {fieldState.invalid && (
              <FieldError className="text-red-400" errors={[fieldState.error]} />
            )}
          </Field>
        );
      }}
    />
  );
}
