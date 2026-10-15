import {cva, type VariantProps} from "class-variance-authority";

export const radioGroupVariants = cva("grid w-full gap-3");

export const radioGroupItemVariants = cva(
  "group/radio-group-item peer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 relative flex aspect-square size-5 shrink-0 rounded-full border border-tertiary-500 outline-none group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-tertiary-500 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 aria-invalid:aria-checked:border-primary-600 data-checked:border-primary-600 data-checked:bg-tertiary-200 data-checked:text-primary-600 group-has-[:focus-visible]/field-label:data-checked:border-primary-600",
);

export const radioGroupIndicatorVariants = cva("flex size-5 items-center justify-center");

export const radioGroupDotVariants = cva(
  "absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600",
);

export type RadioGroupItemVariantProps = VariantProps<typeof radioGroupItemVariants>;
