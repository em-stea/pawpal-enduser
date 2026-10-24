import {cva} from "class-variance-authority";

export const carouselVariants = cva("relative");

export const carouselViewportVariants = cva("overflow-hidden");

export const carouselContentVariants = cva("flex", {
  variants: {
    orientation: {
      horizontal: "-ml-4",
      vertical: "-mt-4 flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const carouselItemVariants = cva("min-w-0 shrink-0 grow-0 basis-full", {
  variants: {
    orientation: {
      horizontal: "pl-4",
      vertical: "pt-4",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const carouselPreviousVariants = cva("absolute touch-manipulation rounded-full", {
  variants: {
    orientation: {
      horizontal: "inset-y-0 -left-12 my-auto",
      vertical: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const carouselNextVariants = cva("absolute touch-manipulation rounded-full", {
  variants: {
    orientation: {
      horizontal: "inset-y-0 -right-12 my-auto",
      vertical: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
