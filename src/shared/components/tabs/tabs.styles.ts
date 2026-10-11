import {cva} from "class-variance-authority";

import {headingVariants} from "@/shared/components/heading/heading.styles"; // ajustá la ruta a donde esté tu archivo

export const tabsVariants = cva("group/tabs my-4 flex w-full flex-col gap-2");

export const tabsListVariants = cva(
  "group/tabs-list text-muted-foreground relative inline-flex items-center justify-center rounded-lg group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-tertiary-800",
        line: "gap-1 bg-neutral-800 px-3 pb-3 before:pointer-events-none before:absolute before:inset-x-3 before:bottom-3 before:h-1 before:rounded-full before:bg-neutral-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const tabsIndicatorVariants = cva(
  "absolute rounded-full bg-secondary-500 transition-[translate,width,height] duration-300 ease-out data-[orientation=horizontal]:bottom-3 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-(--active-tab-width) data-[orientation=horizontal]:translate-x-(--active-tab-left) data-[orientation=vertical]:top-0 data-[orientation=vertical]:right-0 data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:translate-y-(--active-tab-top) motion-reduce:transition-none",
);

export const tabsTriggerVariants = cva([
  "hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:text-muted-foreground dark:hover:text-foreground relative inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-4 text-sm font-medium whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
  "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
  headingVariants({variant: "subtitle.1"}),
]);

// export const tabsIndicatorVariants = cva(
//   "absolute bg-secondary-500 transition-[translate,width,height] duration-300 ease-out data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-(--active-tab-width) data-[orientation=horizontal]:translate-x-(--active-tab-left) data-[orientation=vertical]:top-0 data-[orientation=vertical]:right-0 data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:translate-y-(--active-tab-top) motion-reduce:transition-none",
// );

export const tabsContentVariants = cva("flex-1 text-sm outline-none");
