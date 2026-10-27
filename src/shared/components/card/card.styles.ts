import {cva, type VariantProps} from "class-variance-authority";

import {headingVariants} from "../heading/heading.styles";

export const cardVariants = cva(
  "group/card text-card-foreground flex flex-col overflow-hidden rounded-xl py-(--card-spacing) text-sm shadow-xs [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  {
    variants: {
      variant: {
        default: "bg-card",
        petCard: "gap-4 bg-tertiary-850",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type CardVariantProps = VariantProps<typeof cardVariants>;

export const cardHeaderVariants = cva(
  "group/card-header @container/card-header gap-4 rounded-t-xl px-(--card-spacing)",
  {
    variants: {
      variant: {
        default:
          "grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        petCard: "flex flex-row items-center",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const cardTitleVariants = cva("", {
  variants: {
    variant: {
      default: "text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",
      petCard: headingVariants({variant: "subtitle.3"}),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const cardDescriptionVariants = cva("text-muted-foreground text-sm");

export const cardActionVariants = cva(
  "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
);

export const cardContentVariants = cva("flex flex-col gap-3 px-(--card-spacing)");

export const cardFooterVariants = cva("flex items-center rounded-b-xl px-(--card-spacing)");
