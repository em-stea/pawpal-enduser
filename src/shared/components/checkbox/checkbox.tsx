"use client";

import {Checkbox as CheckboxPrimitive} from "@base-ui/react/checkbox";
import {CheckIcon} from "lucide-react";

import {cn} from "@/shared/lib/tw-merge/utils";

import {checkboxIndicatorVariants, checkboxVariants} from "./checkbox.styles";

function Checkbox({className, name, ...props}: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      className={cn(checkboxVariants(), className)}
      data-slot="checkbox"
      name={name}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={checkboxIndicatorVariants()}
        data-slot="checkbox-indicator"
      >
        <CheckIcon strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export {Checkbox};
