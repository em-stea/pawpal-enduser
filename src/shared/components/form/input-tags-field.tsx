"use client";

import {useState} from "react";
import {Controller, FieldPath, FieldValues, useFormContext} from "react-hook-form";

import {RemovableBadge} from "@/features/auth/components/removable-badge/removable-badge";
import {Field, FieldError, FieldLabel} from "@/shared/components/field/field";
import {Input} from "@/shared/components/input/input";

import {InputGroup, InputGroupAddon, InputGroupInput} from "../input-group/input-group";
import {Text} from "../text/text";

interface TagsFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  countItems?: number;
}

export function InputTagsField<T extends FieldValues>({
  name,
  label,
  placeholder,
  className,
  icon,
}: TagsFieldProps<T>) {
  const {control} = useFormContext<T>();
  const [draft, setDraft] = useState("");

  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => {
        const tags = Array.isArray(field.value) ? (field.value as string[]) : [];

        const add = () => {
          const next = draft.trim();

          if (next && !tags.includes(next)) {
            field.onChange([...tags, next]);
          }
          setDraft("");
        };

        const handleRemove = (tag: string) => {
          field.onChange(tags.filter((item) => item !== tag));
        };

        return (
          <Field className={className} data-invalid={fieldState.invalid}>
            {label && (
              <FieldLabel count={tags.length} htmlFor={field.name}>
                {label}
              </FieldLabel>
            )}

            {icon ? (
              <InputGroup>
                <InputGroupInput
                  {...field}
                  aria-invalid={fieldState.invalid}
                  className={className}
                  id={field.name}
                  placeholder={placeholder}
                  value={draft}
                  onBlur={field.onBlur}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      add();
                    }
                  }}
                />
                <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>
              </InputGroup>
            ) : (
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                placeholder={placeholder}
                value={draft}
                onBlur={field.onBlur}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    add();
                  }
                }}
              />
            )}

            {tags.length > 0 && (
              <div className="my-2 flex flex-wrap items-center gap-2">
                {tags.map((tag) => (
                  <RemovableBadge key={tag} value={tag} onRemove={() => handleRemove(tag)} />
                ))}
              </div>
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
