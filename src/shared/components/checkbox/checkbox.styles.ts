import {cva} from "class-variance-authority";

export const checkboxVariants = cva(
  "peer -inputborder group-has-[:focus-visible]/field-label:not-data-checked:border-input focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 aria-invalid:aria-checked:border-secondary-500 data-checked:border-secondary-500 data-checked:bg-secondary-500 group-has-[:focus-visible]/field-label:data-checked:border-secondary-500 dark:data-checked:bg-secondary-500",
);

export const checkboxIndicatorVariants = cva(
  "grid place-content-center text-tertiary-800 transition-none [&>svg]:size-3.5",
);
