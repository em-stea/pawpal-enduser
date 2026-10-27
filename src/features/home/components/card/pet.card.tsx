import Image from "next/image";
import {BadgeCheck} from "lucide-react";

import {Card, CardFooter, CardHeader, CardTitle} from "@/shared/components/card/card";
import {Text} from "@/shared/components/text/text";

import {Pet} from "../../types/pet.types";

export const PetCard = ({pet}: {pet: Pet}) => {
  return (
    <Card variant="petCard">
      <CardHeader>
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl">
          <Image alt={pet.name} height={100} src={pet.image} width={100} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <CardTitle>{pet.name}</CardTitle>
            <BadgeCheck className="size-5 fill-secondary-500 stroke-secondary-500 [&>path:last-child]:stroke-black" />
          </div>
          <Text className="text-tertiary-500" variant="caption.1">
            {pet.breed}
          </Text>
        </div>
      </CardHeader>
      <CardFooter />
    </Card>
  );
};
