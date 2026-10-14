import {cva} from "class-variance-authority";

const commonClassnames = ["font-secondary"];

export const textVariants = cva(commonClassnames, {
  variants: {
    variant: {
      "body.1": "leading-6.4 lg:leading-6.4 text-3.5 lg:text-4.5",
      "body.2": "leading-6.4 lg:leading-6.4 text-4 font-semibold tracking-wide lg:text-4",
      "body.3": "leading-6.4 lg:leading-6.4 text-4 font-normal tracking-wide lg:text-4",
      button: "leading-6.4 lg:leading-6.4 text-4 font-bold tracking-wide lg:text-4",
    },
  },
  defaultVariants: {
    variant: "body.1",
  },
});
