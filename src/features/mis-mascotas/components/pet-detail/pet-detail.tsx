import {Card, CardHeader} from "@/shared/components/card/card";
import {PetAvatar} from "@/shared/components/pet-avatar/pet-avatar";

import {MyPet} from "../../data/my-pets.data";

export const PetDetail = ({pet}: {pet: MyPet}) => {
  return (
    <Card>
      <CardHeader>
        <PetAvatar image={pet.image} name={pet.name} />
      </CardHeader>
    </Card>
  );
};
