"use client";

import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";
import {Input} from "@/shared/components/input/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/components/input-group/input-group";

interface TimeInputFieldProps<T extends FieldValues> extends React.ComponentProps<typeof Input> {
  label?: string;
  name: FieldPath<T>;
  placeholder?: string;
  icon?: React.ReactNode;
}

function formatTimeString(value: string, previousValue = ""): string {
  const numbers = value.replace(/\D/g, "").slice(0, 4);
  const previousNumbers = previousValue.replace(/\D/g, "");

  // Backspace on "HH:" removes the last hour digit instead of re-inserting the colon
  if (
    numbers.length === 2 &&
    previousNumbers.length === 2 &&
    previousValue.endsWith(":") &&
    !value.includes(":")
  ) {
    return numbers.slice(0, 1);
  }

  if (numbers.length === 0) return "";
  if (numbers.length <= 2) return numbers.length === 2 ? `${numbers}:` : numbers;

  return `${numbers.slice(0, 2)}:${numbers.slice(2)}`;
}

export function TimeInputField<T extends FieldValues>({
  label,
  name,
  placeholder = "00:00",
  className,
  icon,
  ...props
}: TimeInputFieldProps<T>) {
  const {control} = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => {
        const inputProps = {
          ...props,
          ...field,
          "aria-invalid": fieldState.invalid,
          className,
          id: field.name,
          inputMode: "numeric" as const,
          maxLength: 5,
          placeholder,
          type: "text" as const,
          value: field.value ?? "",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(formatTimeString(e.target.value, field.value ?? ""));
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
