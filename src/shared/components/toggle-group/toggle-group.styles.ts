import {cva} from "class-variance-authority";

export const toggleGroupVariants = cva(
  "group/toggle-group w-full gap-[--spacing(var(--gap))] rounded-md data-[spacing=0]:data-[variant=outline]:shadow-xs",
  {
    variants: {
      variant: {
        default:
          "flex w-fit flex-row flex-wrap items-center data-vertical:flex-col data-vertical:items-stretch",
        fill: "grid w-full cursor-pointer grid-cols-2",
        "fill-wide": "grid cursor-pointer grid-cols-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const toggleGroupItemVariants = cva(
  [
    "min-w-0 shrink-0 focus:z-10 focus-visible:z-10",
    "group-data-[variant=fill]/toggle-group:last:odd:col-span-2",
    "group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:shadow-none",
    "group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5",
    "group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md",
    "group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md",
    "group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0",
    "group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
  ].join(" "),
);
