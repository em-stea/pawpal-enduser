import {cn} from "@/shared/lib/tw-merge/utils";

export const Separator = ({
  className,
  orientation,
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  return (
    <div
      className={cn(
        "my-1 h-px w-full bg-tertiary-700",
        orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        className,
      )}
    />
  );
};
