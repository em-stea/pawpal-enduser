import type {ElementType} from "react";

import {VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/tw-merge/utils";

import {textVariants} from "./text.styles";

type TextVariants = VariantProps<typeof textVariants>;

interface TextProps extends React.HTMLAttributes<HTMLElement>, TextVariants {
  as?: "p" | "span" | "label";
  htmlFor?: string;
}

export const Text: React.FC<TextProps> = ({
  as = "p",
  children,
  variant,
  color,
  className,
  ...props
}) => {
  const TextTag: ElementType = as;

  return (
    <TextTag
      className={cn(textVariants({variant}), color && `text-${color}`, className)}
      {...props}
    >
      {children}
    </TextTag>
  );
};
