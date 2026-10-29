import type {ComponentProps} from "react";

import {cn} from "@/shared/lib/tw-merge/utils";

export type ContainerProps = ComponentProps<"div">;

export function Container({children, className, ...props}: ContainerProps) {
  return (
    <div className={cn("max-w-1180px px-4 md:px-6", className)} {...props}>
      {children}
    </div>
  );
}
