import {cn} from "@/shared/lib/tw-merge/utils";

export const Separator = ({className}: {className?: string}) => {
  return <div className={cn("my-1 h-px w-full bg-tertiary-700", className)} />;
};
