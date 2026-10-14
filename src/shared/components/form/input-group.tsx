"use client";

import type {VariantProps} from "class-variance-authority";

import * as React from "react";
import {Input as InputPrimitive} from "@base-ui/react/input";

import {cn} from "@/shared/lib/tw-merge/utils";
import {Textarea} from "@/shared/components/form/textarea";

import {Button} from "../button/button";

import {
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  inputGroupInputVariants,
  inputGroupTextareaVariants,
  inputGroupTextVariants,
  inputGroupVariants,
} from "./input-group.styles";
import {inputVariants} from "./input.styles";

function InputGroup({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(inputGroupVariants(), className)}
      data-slot="input-group"
      role="group"
      {...props}
    />
  );
}

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      className={cn(inputGroupAddonVariants({align}), className)}
      data-align={align}
      data-slot="input-group-addon"
      role="group"
      {...props}
    />
  );
}

function InputGroupButton({
  className,
  type = "button",
  variant = "icon",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset";
  }) {
  return (
    <Button
      className={cn(inputGroupButtonVariants({size}), className)}
      data-size={size}
      type={type}
      variant={variant}
      {...props}
    />
  );
}

function InputGroupText({className, ...props}: React.ComponentProps<"span">) {
  return <span className={cn(inputGroupTextVariants(), className)} {...props} />;
}

function InputGroupInput({className, ...props}: React.ComponentProps<typeof InputPrimitive>) {
  return (
    <InputPrimitive
      className={cn(inputVariants(), inputGroupInputVariants(), className)}
      data-slot="input-group-control"
      {...props}
    />
  );
}

function InputGroupTextarea({className, ...props}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      className={cn(inputGroupTextareaVariants(), className)}
      data-slot="input-group-control"
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
