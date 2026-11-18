import Image from "next/image";

export const PetAvatar = ({image, name}: {image: string; name: string}) => {
  return (
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl">
      <Image alt={name} height={100} src={image} width={100} />
    </div>
  );
};
