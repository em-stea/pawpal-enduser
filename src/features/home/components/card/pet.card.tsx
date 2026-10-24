import {Card, CardHeader, CardTitle} from "@/shared/components/card/card";

import {Pet} from "../../types/pet.types";

export const PetCard = ({pet}: {pet: Pet}) => {
  return (
    <Card variant="petCard">
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
      </CardHeader>
    </Card>
  );
};
