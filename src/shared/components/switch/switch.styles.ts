import {cva, type VariantProps} from "class-variance-authority";

export const switchVariants = cva(
  "peer group/switch focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 aria-invalid:ring-3 data-checked:bg-secondary-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-unchecked:bg-tertiary-700",
  {
    variants: {
      size: {
        default: "h-[26px] w-[50px]",
        sm: "h-[14px] w-[24px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-tertiary-900 ring-0 transition-transform data-checked:translate-x-[calc(100%--5px)] data-unchecked:translate-x-[2px]",
  {
    variants: {
      size: {
        default: "size-5",
        sm: "size-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export type SwitchVariantProps = VariantProps<typeof switchVariants>;
