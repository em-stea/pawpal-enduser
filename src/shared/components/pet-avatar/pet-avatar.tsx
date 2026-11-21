import Image from "next/image";

import {cn} from "@/shared/lib/tw-merge/utils";

interface PetAvatarProps {
  isFullSize?: boolean;
  image: string;
  name: string;
}

export const PetAvatar = ({image, name, isFullSize = false}: PetAvatarProps) => {
  return (
    <div
      className={cn(
        "flex h-16 w-16 items-center justify-center overflow-hidden rounded-md",
        isFullSize && "h-full w-full",
      )}
    >
      <Image
        alt={name}
        className="h-full w-full object-cover"
        height={100}
        src={image}
        width={100}
      />
    </div>
  );
};
