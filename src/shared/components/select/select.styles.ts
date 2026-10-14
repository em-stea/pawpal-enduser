import {cva} from "class-variance-authority";

import {textVariants} from "@/shared/components/text/text.styles";

export const selectGroupVariants = cva("scroll-my-1 p-1");

export const selectValueVariants = cva([
  "flex flex-1 text-left",
  textVariants({variant: "body.3"}),
]);

export const selectTriggerVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex w-fit items-center justify-between gap-2.5 rounded-lg border border-tertiary-500 bg-transparent py-3 pr-4 pl-3 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 data-placeholder:text-tertiary-500 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
);

export const selectTriggerIconVariants = cva("pointer-events-none size-5 text-tertiary-500");

export const selectPositionerVariants = cva("isolate z-50");

export const selectContentVariants = cva(
  "ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 relative bottom-1 isolate z-50 max-h-[min(34rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-tertiary-850 text-tertiary-200 shadow-md ring-1 duration-100 data-[align-trigger=true]:animate-none",
);

export const selectLabelVariants = cva([
  "px-3 py-1.5 text-tertiary-200",
  textVariants({variant: "body.3"}),
]);

export const selectItemVariants = cva([
  "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground relative flex w-full cursor-default items-start gap-2 rounded-sm px-3 py-1.5 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
  textVariants({variant: "body.3"}),
]);

export const selectItemTextVariants = cva("flex max-w-[22rem] min-w-0 flex-1 gap-2 break-words");

export const selectItemIndicatorVariants = cva(
  "pointer-events-none absolute top-2.5 right-2 flex size-4 items-center justify-center",
);

export const selectSeparatorVariants = cva("bg-border pointer-events-none -mx-1 my-1 h-px");

export const selectScrollButtonVariants = cva(
  "bg-popover z-10 flex w-full cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      direction: {
        up: "top-0",
        down: "bottom-0",
      },
    },
  },
);
