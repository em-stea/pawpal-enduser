import {Card, CardHeader} from "@/shared/components/card/card";
import {PetAvatar} from "@/shared/components/pet-avatar/pet-avatar";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

import {MyPet} from "../../data/my-pets.data";

export const PetDetail = ({pet}: {pet: MyPet}) => {
  const {name, breed, age, image, healthState} = pet;

  return (
    <Card>
      <CardHeader>
        <PetAvatar image={image} name={name} />
        <div className="flex flex-col gap-1">
          <Heading variant="subtitle.2">{name}</Heading>
          <div className="flex items-center gap-2.5 text-tertiary-500">
            <Text>{breed}</Text>
            <div className="h-1.5 w-1.5 rounded-full bg-tertiary-500" />
            <Text>{age} años</Text>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
