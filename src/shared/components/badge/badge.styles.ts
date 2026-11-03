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
        default: "",
        health: textVariants({variant: "caption.1.bold"}),
        bolder: textVariants({variant: "body.1.bold"}),
        opal: ["uppercase", textVariants({variant: "caption.2"})],
      },
      color: {
        solid: "bg-primary-600 text-tertiary-200",
        primary: "bg-primary-500/30 text-primary-200",
        primaryMuted: "bg-primary-500/15 text-primary-300",
        secondary: "bg-secondary-500/30 text-secondary-500",
        secondaryMuted: "bg-secondary-500/15 text-secondary-500",
        danger: "bg-red-600/30 text-red-200",
        dangerMuted: "bg-red-500/15 text-red-300",
        dangerStrong: "bg-red-500/25 text-red-300",
        warning: "bg-amber-500/15 text-amber-300",
        muted: "bg-tertiary-600/30 text-tertiary-200",
        neutral: "bg-tertiary-700 text-tertiary-300",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "solid",
    },
  },
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
