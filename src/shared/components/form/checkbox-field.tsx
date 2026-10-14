"use client";

import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Checkbox} from "@/shared/components/checkbox/checkbox";
import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";

interface CheckboxFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  children: React.ReactNode;
  className?: string;
}

export function CheckboxField<T extends FieldValues>({
  name,
  children,
  className,
}: CheckboxFieldProps<T>) {
  const {control} = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          <FieldLabel className="flex cursor-pointer items-start gap-2 font-normal">
            <Checkbox
              aria-invalid={fieldState.invalid}
              checked={Boolean(field.value)}
              className="mt-1"
              inputRef={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              onCheckedChange={(checked) => field.onChange(checked)}
            />
            {children}
          </FieldLabel>

          {fieldState.invalid && (
            <FieldError className="text-red-400" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
