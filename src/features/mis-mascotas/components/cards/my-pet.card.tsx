import {Card, CardHeader} from "@/shared/components/card/card";
import {PetAvatar} from "@/shared/components/pet-avatar/pet-avatar";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";
import {healthTag} from "@/shared/data/health-tag.data";

import {MyPet} from "../../data/my-pets.data";

export const MyPetCard = ({pet}: {pet: MyPet}) => {
  const {name, image, healthState} = pet;

  const {label, dotColor, textColor} = healthTag[healthState];

  return (
    <Card variant="petCard">
      <CardHeader>
        <PetAvatar image={image} name={name} />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Heading variant="subtitle.4">{name}</Heading>
            <span className={`h-2.5 w-2.5 rounded-full ${dotColor}`} />
          </div>
          <Text className={textColor}>{label}</Text>
        </div>
      </CardHeader>
    </Card>
  );
};
