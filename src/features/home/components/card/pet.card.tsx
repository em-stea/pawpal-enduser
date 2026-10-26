import Image from "next/image";

import {Card, CardFooter, CardHeader, CardTitle} from "@/shared/components/card/card";

import {Pet} from "../../types/pet.types";

export const PetCard = ({pet}: {pet: Pet}) => {
  return (
    <Card variant="petCard">
      <CardHeader>
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl">
          <Image alt={pet.name} height={100} src={pet.image} width={100} />
        </div>
        <CardTitle>{pet.name}</CardTitle>
      </CardHeader>
      <CardFooter />
    </Card>
  );
};
