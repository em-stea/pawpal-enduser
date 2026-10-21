import {cva} from "class-variance-authority";

import {textVariants} from "../text/text.styles";

const commonClassnames = [
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded-lg",
  "hover:cursor-pointer",
  textVariants({variant: "button"}),
];

export const buttonVariants = cva(commonClassnames, {
  variants: {
    variant: {
      primary:
        "loading:cursor-wait bg-secondary-500 py-4 text-tertiary-900 hover:bg-secondary-600 hover:outline hover:outline-none disabled:cursor-not-allowed disabled:bg-gray-400",
      secondary:
        "flex size-10 h-auto items-center justify-center border border-secondary-500 bg-transparent py-4 text-secondary-500 focus-within:border-secondary-500 hover:border-secondary-500 focus:border-secondary-500 disabled:pointer-events-none disabled:opacity-40",
      // "text-link":
      //   "tracking-1.6 text-foreground hover:text-highlight flex items-center gap-2 disabled:text-gray-400",
      ghost: "flex size-10 h-auto items-center justify-center bg-tertiary-850 py-4",
      // "ghost-outline":
      //   "group dark:border-basic-00 dark:text-basic-00 flex items-center justify-center rounded-full border border-gray-800 p-1 text-gray-800 transition-colors hover:border-blue-600 hover:text-blue-600 active:border-blue-600 active:text-blue-600 disabled:pointer-events-none disabled:opacity-40 dark:hover:border-blue-200 dark:hover:text-blue-200 dark:active:border-blue-200 dark:active:text-blue-200",
      icon: "flex size-10 h-auto items-center justify-center bg-transparent",
      tertiary: "flex flex-col items-start bg-transparent text-left text-tertiary-200",
    },
    size: {
      sm: "px-0.9 py-0.9",
      md: "w-auto max-w-fit px-6 py-3",
      xs: "w-auto max-w-fit px-4.25 py-2.25",
      intrinsic: "w-fit",
      fullWidth: "w-full",
    },
    loading: {
      true: "cursor-wait",
    },
    active: {
      true: "",
      false: "",
    },
    isHighlight: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "tertiary",
      isHighlight: true,
      className: "whitespace-nowrap text-secondary-500 hover:text-secondary-600",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    loading: false,
    active: false,
    isHighlight: false,
  },
});
