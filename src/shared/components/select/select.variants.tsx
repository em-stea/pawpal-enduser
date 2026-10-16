"use client";

import {FieldPath, FieldValues} from "react-hook-form";
import {Fragment} from "react/jsx-runtime";

import {SelectBase} from "@/shared/components/form/select.form";

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectOptionGroup {
  label: string;
  items: SelectOption[];
}

export interface SelectFieldProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export function SelectField<T extends FieldValues>({
  label,
  name,
  options,
  placeholder = "Selecciona una opción",
  className,
}: SelectFieldProps<T>) {
  return (
    <SelectBase className={className} items={options} label={label} name={name}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectBase>
  );
}

export interface SelectGroupFieldProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  groups: SelectOptionGroup[];
  placeholder?: string;
  valueLabel?: React.ReactNode;
  className?: string;
  multiple?: boolean;
}

export function SelectGroupField<T extends FieldValues>({
  label,
  name,
  groups,
  placeholder = "Selecciona una opción",
  valueLabel,
  className,
  multiple,
}: SelectGroupFieldProps<T>) {
  const items = groups.flatMap((group) => group.items);

  return (
    <SelectBase className={className} items={items} label={label} multiple={multiple} name={name}>
      <SelectTrigger className="w-full">
        <SelectValue>{valueLabel ?? placeholder}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {groups.map((group) => (
          <Fragment key={group.label}>
            <SelectGroup>
              <SelectLabel>{group.label}</SelectLabel>
              {group.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
          </Fragment>
        ))}
      </SelectContent>
    </SelectBase>
  );
}
