"use client";

import {Input as InputPrimitive} from "@base-ui/react/input";
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {Field, FieldError, FieldLabel} from "@/shared/components/form/field";

import {Button} from "../button/button";

import {InputGroup, InputGroupAddon, InputGroupInput} from "./input-group";

interface InputFieldProps<T extends FieldValues> extends React.ComponentProps<
  typeof InputPrimitive
> {
  label?: string;
  name: FieldPath<T>;
  placeholder?: string;
  icon?: React.ReactNode;
}

export function InputPassword<T extends FieldValues>({
  label,
  name,
  placeholder,
  className,
  type = "text",
  icon,
  ...props
}: InputFieldProps<T>) {
  const {control} = useFormContext<T>();
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

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
              type={inputType}
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
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
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
