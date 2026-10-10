import {Heading} from "../heading/heading";
import {Isotipo} from "../icons/isotipo/isotipo";

export function Logo() {
  return (
    <div className="flex items-end gap-2 py-2">
      <Heading variant="title.1">Pawpal</Heading>
      <Isotipo className="text-primary.100 size-16 lg:size-20" />
    </div>
  );
}
