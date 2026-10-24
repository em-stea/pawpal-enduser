import {cn} from "@/shared/lib/tw-merge/utils";

import {Heading} from "../heading/heading";
import {Isotipo} from "../icons/isotipo/isotipo";

const sizes = {
  sm: {
    heading: "text-6 lg:text-8",
    isotipo: "size-8 lg:size-12",
  },
  md: {
    heading: "text-8 lg:text-10",
    isotipo: "size-12 lg:size-16",
  },
  lg: {
    heading: "text-10 lg:text-14",
    isotipo: "size-16 lg:size-20",
  },
} as const;

interface LogoProps {
  size?: keyof typeof sizes;
  className?: string;
}

export function Logo({size = "lg", className}: LogoProps) {
  const sizeOptions = sizes[size];

  return (
    <div className={cn("flex items-end gap-2 py-2", className)}>
      <Heading className={sizeOptions.heading}>Pawpal</Heading>
      <Isotipo className={cn("text-primary.100", sizeOptions.isotipo)} />
    </div>
  );
}
