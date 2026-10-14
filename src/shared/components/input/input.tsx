"use client";

import {Input as InputPrimitive} from "@base-ui/react/input";

import {cn} from "@/shared/lib/tw-merge/utils";

import {inputVariants} from "./input.styles";

function Input({className, ...props}: React.ComponentProps<typeof InputPrimitive>) {
  return <InputPrimitive className={cn(inputVariants(), className)} data-slot="input" {...props} />;
}

export {Input};
