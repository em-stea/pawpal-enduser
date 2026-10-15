"use client";

import * as React from "react";
import {ToggleGroup as ToggleGroupPrimitive} from "@base-ui/react/toggle-group";
import {type VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/tw-merge/utils";
import {Toggle, toggleVariants} from "@/shared/components/toggle/toggle";

import {toggleGroupItemVariants, toggleGroupVariants} from "./toggle-group.styles";

export type ToggleGroupProps = ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleGroupVariants> & {
    size?: VariantProps<typeof toggleVariants>["size"];
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  };

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 2,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive
      className={cn(toggleGroupVariants({variant}), className)}
      data-orientation={orientation}
      data-size={size}
      data-slot="toggle-group"
      data-spacing={spacing}
      data-variant={variant}
      style={{"--gap": spacing} as React.CSSProperties}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive>
  );
}

export type ToggleGroupItemProps = React.ComponentProps<typeof Toggle> &
  VariantProps<typeof toggleVariants>;

function ToggleGroupItem({className, children, variant, size, ...props}: ToggleGroupItemProps) {
  return (
    <Toggle
      className={cn(toggleGroupItemVariants(), className)}
      data-size={size}
      data-slot="toggle-group-item"
      data-variant={variant}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </Toggle>
  );
}

export {ToggleGroup, ToggleGroupItem};
