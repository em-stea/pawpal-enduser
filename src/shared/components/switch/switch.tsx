"use client";

import {Switch as SwitchPrimitive} from "@base-ui/react/switch";

import {cn} from "@/shared/lib/tw-merge/utils";

import {switchThumbVariants, switchVariants, type SwitchVariantProps} from "./switch.styles";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & SwitchVariantProps) {
  return (
    <SwitchPrimitive.Root
      className={cn(switchVariants({size}), className)}
      data-size={size}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb className={switchThumbVariants({size})} data-slot="switch-thumb" />
    </SwitchPrimitive.Root>
  );
}

export {Switch};
