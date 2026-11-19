import {Card, CardHeader} from "@/shared/components/card/card";
import {PetAvatar} from "@/shared/components/pet-avatar/pet-avatar";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";
import {healthTag} from "@/shared/data/health-tag.data";
import {Button} from "@/shared/components/button/button";
import {cn} from "@/shared/lib/tw-merge/utils";

import {MyPet} from "../../data/my-pets.data";

interface MyPetCardProps {
  pet: MyPet;
  isSelected: boolean;
  onSelect: () => void;
}

export const MyPetCard = ({pet, isSelected, onSelect}: MyPetCardProps) => {
  const {name, image, healthState} = pet;

  const {label, dotColor, textColor} = healthTag[healthState];

  return (
    <Button asChild size="fullWidth" variant="ghost-outline" onClick={onSelect}>
      <Card className={cn(isSelected && "bg-tertiary-800")} variant="petCard">
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
    </Button>
  );
};
