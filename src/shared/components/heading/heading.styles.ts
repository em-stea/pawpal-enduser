import {cva} from "class-variance-authority";

const commonClassnames = ["font-primary"];

export const headingVariants = cva(commonClassnames, {
  variants: {
    variant: {
      "title.1": "text-10 leading-12 font-semibold lg:text-14 lg:leading-17",
      "title.2": "text-8 leading-10 font-semibold lg:text-10 lg:leading-13",
      "subtitle.1": "text-4 leading-10 font-semibold tracking-wide lg:text-5 lg:leading-12",
      "subtitle.2": "text-6 leading-10 font-semibold tracking-wide lg:text-8 lg:leading-12",
    },
  },
  defaultVariants: {
    variant: "title.1",
  },
});
