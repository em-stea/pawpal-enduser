import {VariantProps} from "class-variance-authority";

import {cn} from "@/shared/lib/tw-merge/utils";

import {textVariants} from "./text.styles";

type TextVariants = VariantProps<typeof textVariants>;

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, TextVariants {
  as?: "p" | "span";
}

export const Text: React.FC<TextProps> = ({
  as: TextTag = "p",
  children,
  variant,
  color,
  className,
  ...props
}) => {
  return (
    <TextTag
      className={cn(textVariants({variant}), color && `text-${color}`, className)}
      {...props}
    >
      {children}
    </TextTag>
  );
};
