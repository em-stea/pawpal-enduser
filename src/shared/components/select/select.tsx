"use client";

import * as React from "react";
import {Select as SelectPrimitive} from "@base-ui/react/select";
import {cn} from "cn";
import {ChevronDownIcon, CheckIcon, ChevronUpIcon} from "lucide-react";

import {
  selectContentVariants,
  selectGroupVariants,
  selectItemIndicatorVariants,
  selectItemTextVariants,
  selectItemVariants,
  selectLabelVariants,
  selectPositionerVariants,
  selectScrollButtonVariants,
  selectSeparatorVariants,
  selectTriggerIconVariants,
  selectTriggerVariants,
  selectValueVariants,
} from "./select.styles";

const Select = SelectPrimitive.Root;

function SelectGroup({className, ...props}: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      className={cn(selectGroupVariants(), className)}
      data-slot="select-group"
      {...props}
    />
  );
}

function SelectValue({className, ...props}: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      className={cn(selectValueVariants(), className)}
      data-slot="select-value"
      {...props}
    />
  );
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      className={cn(selectTriggerVariants(), className)}
      data-size={size}
      data-slot="select-trigger"
      {...props}
    >
      {children}
      <SelectPrimitive.Icon render={<ChevronDownIcon className={selectTriggerIconVariants()} />} />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        alignOffset={alignOffset}
        className={selectPositionerVariants()}
        side={side}
        sideOffset={sideOffset}
      >
        <SelectPrimitive.Popup
          className={cn(selectContentVariants(), className)}
          data-align-trigger={alignItemWithTrigger}
          data-slot="select-content"
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({className, ...props}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      className={cn(selectLabelVariants(), className)}
      data-slot="select-label"
      {...props}
    />
  );
}

function SelectItem({className, children, ...props}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      className={cn(selectItemVariants(), className)}
      data-slot="select-item"
      {...props}
    >
      <SelectPrimitive.ItemText className={selectItemTextVariants()}>
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator render={<span className={selectItemIndicatorVariants()} />}>
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({className, ...props}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      className={cn(selectSeparatorVariants(), className)}
      data-slot="select-separator"
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      className={cn(selectScrollButtonVariants({direction: "up"}), className)}
      data-slot="select-scroll-up-button"
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      className={cn(selectScrollButtonVariants({direction: "down"}), className)}
      data-slot="select-scroll-down-button"
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
