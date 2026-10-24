import {cva, type VariantProps} from "class-variance-authority";

export const cardVariants = cva(
  "group/card text-card-foreground flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl py-(--card-spacing) text-sm shadow-xs [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  {
    variants: {
      variant: {
        default: "bg-card",
        petCard: "bg-tertiary-850",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type CardVariantProps = VariantProps<typeof cardVariants>;

export const cardHeaderVariants = cva(
  "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
);

export const cardTitleVariants = cva(
  "text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",
);

export const cardDescriptionVariants = cva("text-muted-foreground text-sm");

export const cardActionVariants = cva(
  "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
);

export const cardContentVariants = cva("flex flex-col gap-3 px-(--card-spacing)");

export const cardFooterVariants = cva("flex items-center rounded-b-xl px-(--card-spacing)");
