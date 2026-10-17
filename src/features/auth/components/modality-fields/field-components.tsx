"use client";

import {Button} from "@/shared/components/button/button";
import {InputField} from "@/shared/components/form/input-field.form";
import {SelectField} from "@/shared/components/select/select.variants";
import {Text} from "@/shared/components/text/text";

import {
  FieldVariant,
  ModalityField,
  PlacesModalityField,
  ScheduleModalityField,
  SelectBadgeModalityField,
  SelectModalityField,
  TextModalityField,
} from "../../data/care-modality";
import {useLocationGroups} from "../../hooks/use-location-groups";
import {useMultipleSelectField} from "../../hooks/use-multiple-select-field";
import {usePlaceAutocomplete} from "../../hooks/use-place-autocomplete";
import {BusinessHours} from "../business-hours/business-hours";

function ModalityInputTextField({field}: {field: TextModalityField}) {
  return (
    <InputField
      icon={field.icon}
      label={field.label}
      name={field.name}
      placeholder={field.placeholder}
      type={field.inputType}
    />
  );
}

function ModalitySelectField({field}: {field: SelectModalityField}) {
  const {showBadges, valueLabel} = useMultipleSelectField({field});

  return (
    <SelectField
      label={field.label}
      multiple={field.multiple}
      name={field.name}
      options={field.items}
      placeholder={field.placeholder}
      showSelectedBadges={showBadges}
      valueLabel={valueLabel}
    />
  );
}

function ModalitySelectGroupBadgesField({field}: {field: SelectBadgeModalityField}) {
  const {filteredData, count, selectedItems, isProvinceSelected, handleRemove, cityLabel} =
    useLocationGroups(field);

  return (
    <SelectField
      disabled={!isProvinceSelected}
      label={cityLabel}
      multiple={field.multiple}
      name={field.name}
      options={filteredData[0]?.items ?? []}
      placeholder={cityLabel}
      showSelectedBadges={{selectedItems, onRemove: handleRemove}}
      valueLabel={`${cityLabel}${count === 0 ? "" : ` (${count.toString()})`}`}
    />
  );
}

function ModalityScheduleField({field}: {field: ScheduleModalityField}) {
  return <BusinessHours icon={field.icon} />;
}

function ModalityPlacesField({field}: {field: PlacesModalityField}) {
  const {containerRef, suggestions, setIsOpen, showSuggestions, handleSelect} =
    usePlaceAutocomplete(field);

  return (
    <div ref={containerRef} className="relative w-full">
      <InputField
        autoComplete="off"
        icon={field.icon}
        label={field.label}
        name={field.name}
        placeholder={field.placeholder}
        onChange={() => {
          setIsOpen(true);
        }}
        onFocus={() => {
          setIsOpen(true);
        }}
      />

      {showSuggestions ? (
        <ul
          className="absolute z-50 mt-1.5 max-h-90 w-full overflow-auto rounded-lg border border-tertiary-500 bg-tertiary-850 p-1 text-tertiary-200 shadow-md"
          role="listbox"
        >
          {suggestions.map((item) => (
            <li key={item.placeId} aria-selected={false} role="option">
              <Button
                className="gap-1"
                type="button"
                variant="tertiary"
                onClick={() => {
                  handleSelect(item);
                }}
              >
                <Text variant="button">{item.mainText}</Text>
                {item.secondaryText && <Text variant="body.1">{item.secondaryText}</Text>}
              </Button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export type FieldComponentMap = {
  [K in FieldVariant]: React.ComponentType<{field: Extract<ModalityField, {variant: K}>}>;
};

export const FIELD_COMPONENTS: FieldComponentMap = {
  text: ModalityInputTextField,
  select: ModalitySelectField,
  places: ModalityPlacesField,
  selectGroup: ModalitySelectGroupBadgesField,
  schedule: ModalityScheduleField,
};
