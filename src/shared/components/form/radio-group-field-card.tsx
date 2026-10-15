"use client";

import {Controller, FieldPath, FieldValues, useFormContext, useWatch} from "react-hook-form";

import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldError,
} from "@/shared/components/field/field";
import {cn} from "@/shared/lib/tw-merge/utils";

import {RadioGroup, RadioGroupItem} from "../radio-group/radio-group";

interface RadioGroupCardOption {
  label: string;
  description?: string;
  value: string;
}

interface RadioGroupFieldCardProps<T extends FieldValues> extends React.ComponentProps<
  typeof RadioGroup
> {
  name: FieldPath<T>;
  label?: string;
  options: RadioGroupCardOption[];
  className?: string;
}

export function RadioGroupFieldCard<T extends FieldValues>({
  name,
  label,
  options,
  className,
  ...props
}: RadioGroupFieldCardProps<T>) {
  const {control} = useFormContext<T>();
  const selectedValue = useWatch({control, name});

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          {label && <FieldLabel>{label}</FieldLabel>}

          <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
            {...props}
          >
            {options.map((option) => {
              const itemId = `${name}-${option.value}`;

              return (
                <FieldLabel
                  key={option.value}
                  className={cn(
                    "cursor-pointer border-tertiary-500",
                    selectedValue === option.value &&
                      "border-2! border-primary-500 bg-tertiary-800",
                  )}
                  htmlFor={itemId}
                >
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>{option.label}</FieldTitle>
                      {option.description && (
                        <FieldDescription>{option.description}</FieldDescription>
                      )}
                    </FieldContent>
                    <RadioGroupItem id={itemId} value={option.value} />
                  </Field>
                </FieldLabel>
              );
            })}
          </RadioGroup>

          {fieldState.invalid && (
            <FieldError className="text-red-400" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
