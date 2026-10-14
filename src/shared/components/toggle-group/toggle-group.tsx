"use client";

import * as React from "react";
import {Toggle as TogglePrimitive} from "@base-ui/react/toggle";
import {ToggleGroup as ToggleGroupPrimitive} from "@base-ui/react/toggle-group";
import {type VariantProps} from "class-variance-authority";
import {cn} from "cn";

import {toggleVariants} from "@/shared/components/toggle/toggle";

import {toggleGroupItemVariants, toggleGroupVariants} from "./toggle-group.styles";

interface ToggleGroupContextValue {
  itemVariant?: VariantProps<typeof toggleVariants>["variant"];
  size?: VariantProps<typeof toggleVariants>["size"];
  spacing?: number;
  orientation?: "horizontal" | "vertical";
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  size: "default",
  itemVariant: "default",
  spacing: 2,
  orientation: "horizontal",
});

export type ToggleGroupProps = ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleGroupVariants> & {
    itemVariant?: VariantProps<typeof toggleVariants>["variant"];
    size?: VariantProps<typeof toggleVariants>["size"];
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  };

function ToggleGroup({
  className,
  variant,
  itemVariant,
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
      <ToggleGroupContext value={{itemVariant, size, spacing, orientation}}>
        {children}
      </ToggleGroupContext>
    </ToggleGroupPrimitive>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.use(ToggleGroupContext);

  const finalVariant = variant ?? context.itemVariant;
  const finalSize = context.size ?? size;

  return (
    <TogglePrimitive
      className={cn(
        toggleGroupItemVariants,
        toggleVariants({
          variant: finalVariant,
          size: finalSize,
        }),
        className,
      )}
      data-size={finalSize}
      data-slot="toggle-group-item"
      data-spacing={context.spacing}
      data-variant={finalVariant}
      {...props}
    >
      {children}
    </TogglePrimitive>
  );
}

export {ToggleGroup, ToggleGroupItem};
