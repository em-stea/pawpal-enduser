import {cva} from "class-variance-authority";

import {textVariants} from "../text/text.styles";

export const progressVariants = cva("flex flex-wrap gap-3 rounded-lg bg-tertiary-850 px-3 py-5");

export const progressTrackVariants = cva(
  "relative flex h-1.5 w-full items-center overflow-x-hidden rounded-full bg-tertiary-800",
);

export const progressIndicatorVariants = cva("h-full bg-secondary-500 transition-all");

export const progressLabelVariants = cva(["text-tertiary-500", textVariants({variant: "body.1"})]);

export const progressValueVariants = cva("text-muted-foreground ml-auto text-sm tabular-nums");
