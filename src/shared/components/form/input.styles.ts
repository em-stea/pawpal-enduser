import {cva} from "class-variance-authority";

import {textVariants} from "../text/text.styles";

export const inputVariants = cva([
  "file:text-foreground w-full min-w-0 rounded-md border border-tertiary-500 bg-transparent px-4 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-tertiary-500 focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-400 md:text-sm",
  textVariants({variant: "body.3"}),
]);
