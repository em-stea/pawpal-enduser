"use client";

import {Toggle as TogglePrimitive} from "@base-ui/react/toggle";
import {type VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/tw-merge/utils";

import {toggleVariants} from "./toggle.styles";

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      className={cn(toggleVariants({variant, size, className}))}
      data-slot="toggle"
      {...props}
    />
  );
}

export {Toggle, toggleVariants};
