import {mergeProps} from "@base-ui/react/merge-props";
import {useRender} from "@base-ui/react/use-render";

import {cn} from "@/shared/lib/tw-merge/utils";

import {badgeVariants, type BadgeVariantProps} from "./badge.styles";

export type BadgeProps = useRender.ComponentProps<"span"> & BadgeVariantProps;

function Badge({className, variant = "default", render, ...props}: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({variant}), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export {Badge};
