import type {ModalityField} from "../../data/care-modality";

import {FIELD_COMPONENTS} from "./field-components";

export function ModalityFields({fields}: {fields?: ModalityField[]}) {
  if (!fields?.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {fields.map((singleField) => {
        const Component = FIELD_COMPONENTS[singleField.variant] as React.ComponentType<{
          field: ModalityField;
        }>;

        return <Component key={singleField.name} field={singleField} />;
      })}
    </div>
  );
}
