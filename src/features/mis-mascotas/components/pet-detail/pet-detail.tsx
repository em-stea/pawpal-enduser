import {Card, CardHeader} from "@/shared/components/card/card";
import {PetAvatar} from "@/shared/components/pet-avatar/pet-avatar";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

import {MyPet} from "../../data/my-pets.data";

export const PetDetail = ({pet}: {pet: MyPet}) => {
  const {name, breed, age, image, healthState} = pet;

  return (
    <Card variant="mediaSummary">
      <CardHeader>
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <PetAvatar isFullSize image={image} name={name} />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/0"
          />
        </div>

        <div className="absolute bottom-7 flex flex-col gap-1 px-4">
          <Heading variant="subtitle.2">{name}</Heading>
          <div className="flex items-center gap-2.5 text-tertiary-500">
            <Text>{breed}</Text>
            <div className="h-1.5 w-1.5 rounded-full bg-tertiary-500" />
            <Text>{age} años</Text>
          </div>
        </div>
        <div className="absolute right-4 bottom-7 bg-tertiary-950 px-2 text-secondary-500">
          Peso actual
        </div>
      </CardHeader>
    </Card>
  );
};
