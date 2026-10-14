"use client";

import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Button} from "@/shared/components/button/button";
import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/components/input-group/input-group";

interface InputPasswordFieldProps<T extends FieldValues> extends Omit<
  React.ComponentProps<typeof InputGroupInput>,
  "type" | "name"
> {
  label?: string;
  name: FieldPath<T>;
  placeholder?: string;
  icon?: React.ReactNode;
}

export function InputPasswordField<T extends FieldValues>({
  label,
  name,
  placeholder,
  className,
  icon,
  ...props
}: InputPasswordFieldProps<T>) {
  const {control} = useFormContext<T>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}

          <InputGroup>
            <InputGroupInput
              {...field}
              aria-invalid={fieldState.invalid}
              className={className}
              id={field.name}
              placeholder={placeholder}
              type={showPassword ? "text" : "password"}
              value={field.value ?? ""}
              {...props}
            />
            {Boolean(icon) && <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>}
            <InputGroupAddon align="inline-end">
              <Button
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                className="flex cursor-pointer items-center"
                size="intrinsic"
                type="button"
                variant="icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOff className="mr-2 size-5" />
                ) : (
                  <Eye className="mr-2 size-5" />
                )}
              </Button>
            </InputGroupAddon>
          </InputGroup>

          {fieldState.invalid && (
            <FieldError className="text-red-400" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
