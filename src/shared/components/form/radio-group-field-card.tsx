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
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupFieldCardProps<
  T extends FieldValues,
  O extends RadioGroupCardOption,
> extends React.ComponentProps<typeof RadioGroup> {
  name: FieldPath<T>;
  label?: string;
  options: O[];
  className?: string;
  renderContent?: (option: O) => React.ReactNode;
  onValueChange?: (value: string) => void;
}

export function RadioGroupFieldCard<T extends FieldValues, O extends RadioGroupCardOption>({
  name,
  label,
  options,
  className,
  renderContent,
  onValueChange,
  ...props
}: RadioGroupFieldCardProps<T, O>) {
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
            onValueChange={(value) => {
              field.onChange(value);
              onValueChange?.(value as string);
            }}
            {...props}
          >
            {options.map((option) => {
              const itemId = `${name}-${option.value}`;
              const isSelected = selectedValue === option.value;

              return (
                <div key={option.value}>
                  <FieldLabel
                    className={cn(
                      "cursor-pointer",
                      isSelected && "border-2 border-primary-500 bg-tertiary-800",
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

                  {isSelected && renderContent && (
                    <div className="px-3.5 py-4">{renderContent(option)}</div>
                  )}
                </div>
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
