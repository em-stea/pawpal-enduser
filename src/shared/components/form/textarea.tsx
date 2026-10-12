import * as React from "react";

import {cn} from "@/shared/lib/tw-merge/utils";

import {textareaVariants} from "./textarea.styles";

function Textarea({className, ...props}: React.ComponentProps<"textarea">) {
  return <textarea className={cn(textareaVariants(), className)} data-slot="textarea" {...props} />;
}

export {Textarea};
