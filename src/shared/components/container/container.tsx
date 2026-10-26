import {cn} from "@/shared/lib/tw-merge/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-1180px px-4 md:px-6", className)}>{children}</div>;
};
