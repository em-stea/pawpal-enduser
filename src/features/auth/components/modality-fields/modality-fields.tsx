import type {CareModality, ModalityField} from "../../data/care-modality";

import {Text} from "@/shared/components/text/text";

import {FIELD_COMPONENTS} from "./field-components";

export function ModalityFields({selectedModality}: {selectedModality: CareModality}) {
  if (!selectedModality.sections?.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {selectedModality.sections.map((section, index) => {
        return (
          <div key={section.title ?? index} className="space-y-4">
            {section.title && (
              <Text
                className="border-b border-primary-500 pt-2 pb-1 tracking-wider text-primary-300 uppercase"
                variant="button"
              >
                {section.title}
              </Text>
            )}
            {section.fields.map((field) => {
              const Component = FIELD_COMPONENTS[field.variant] as React.ComponentType<{
                field: ModalityField;
              }>;

              return <Component key={field.name} field={field} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
