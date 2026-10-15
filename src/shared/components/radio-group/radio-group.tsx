"use client";

import {Radio as RadioPrimitive} from "@base-ui/react/radio";
import {RadioGroup as RadioGroupPrimitive} from "@base-ui/react/radio-group";

import {cn} from "@/shared/lib/tw-merge/utils";

import {
  radioGroupDotVariants,
  radioGroupIndicatorVariants,
  radioGroupItemVariants,
  radioGroupVariants,
} from "./radio-group.styles";

function RadioGroup({className, ...props}: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      className={cn(radioGroupVariants(), className)}
      data-slot="radio-group"
      {...props}
    />
  );
}

function RadioGroupItem({className, ...props}: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      className={cn(radioGroupItemVariants(), className)}
      data-slot="radio-group-item"
      {...props}
    >
      <RadioPrimitive.Indicator
        className={cn(radioGroupIndicatorVariants())}
        data-slot="radio-group-indicator"
      >
        <span className={cn(radioGroupDotVariants())} />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export {RadioGroup, RadioGroupItem};
