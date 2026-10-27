import {cva, type VariantProps} from "class-variance-authority";

import {textVariants} from "../text/text.styles";

export const badgeVariants = cva(
  [
    "group/badge focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent px-2.5 py-1 whitespace-nowrap transition-all focus-visible:ring-[3px] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:pointer-events-none [&>svg]:size-4! [&>svg]:stroke-[2.5]",
    textVariants({variant: "body.1"}),
  ],
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-tertiary-200",
        health: textVariants({variant: "caption.1.bold"}),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
