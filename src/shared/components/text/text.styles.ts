import {cva} from "class-variance-authority";

const commonClassnames = ["font-secondary"];

export const textVariants = cva(commonClassnames, {
  variants: {
    variant: {
      "body.1": "leading-6.4 lg:leading-6.4 text-3.5 lg:text-4.5",
    },
  },
  defaultVariants: {
    variant: "body.1",
  },
});
