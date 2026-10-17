"use client";

import {FieldPath, FieldValues} from "react-hook-form";
import {Fragment} from "react/jsx-runtime";
import {CircleCheckBig} from "lucide-react";

import {SelectBase} from "@/shared/components/form/select.form";
import {RemovableBadge} from "@/features/auth/components/removable-badge/removable-badge";

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

export interface SelectedBadgesConfig {
  selectedItems: string[];
  onRemove: (item: string) => void;
}

export interface SelectFieldProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  multiple?: boolean;
  disabled?: boolean;
  valueLabel?: React.ReactNode;
  showSelectedBadges?: SelectedBadgesConfig;
}

export function SelectField<T extends FieldValues>({
  label,
  name,
  options,
  placeholder = "Selecciona una opción",
  className,
  multiple,
  disabled,
  valueLabel,
  showSelectedBadges,
}: SelectFieldProps<T>) {
  const isEmptyValue = (value: unknown) =>
    value == null || value === "" || (Array.isArray(value) && value.length === 0);

  return (
    <SelectBase
      className={className}
      disabled={disabled}
      items={options}
      label={label}
      multiple={multiple}
      name={name}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder}>
          {valueLabel != null
            ? (value) => (isEmptyValue(value) ? placeholder : valueLabel)
            : undefined}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
      {showSelectedBadges && (
        <SelectedBadges
          selectedItems={showSelectedBadges.selectedItems}
          onRemove={showSelectedBadges.onRemove}
        />
      )}
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
  showSelectedBadges?: SelectedBadgesConfig;
}

export function SelectGroupField<T extends FieldValues>({
  label,
  name,
  groups,
  placeholder,
  valueLabel,
  className,
  multiple,
  showSelectedBadges,
}: SelectGroupFieldProps<T>) {
  const items = groups.flatMap((group) => group.items);

  const isEmptyValue = (value: unknown) =>
    value == null || value === "" || (Array.isArray(value) && value.length === 0);

  return (
    <SelectBase className={className} items={items} label={label} multiple={multiple} name={name}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder}>
          {valueLabel != null
            ? (value) => (isEmptyValue(value) ? placeholder : valueLabel)
            : undefined}
        </SelectValue>
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
      {showSelectedBadges && (
        <SelectedBadges
          selectedItems={showSelectedBadges.selectedItems}
          onRemove={showSelectedBadges.onRemove}
        />
      )}
    </SelectBase>
  );
}

const SelectedBadges = ({
  selectedItems,
  onRemove,
}: {
  selectedItems: string[];
  onRemove: (item: string) => void;
}) => {
  if (!selectedItems.length) return null;

  return (
    <div className="mb-1 flex flex-wrap items-center gap-2">
      {selectedItems.map((item) => (
        <RemovableBadge
          key={item}
          icon={CircleCheckBig}
          value={item}
          onRemove={() => onRemove(item)}
        />
      ))}
    </div>
  );
};
