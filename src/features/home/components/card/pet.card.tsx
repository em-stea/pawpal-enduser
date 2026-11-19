import {BadgeCheck} from "lucide-react";

import {Pet} from "@/features/home/types/pet.types";
import {genderBar} from "@/features/home/utils/gender.styles";
import {Badge} from "@/shared/components/badge/badge";
import {Card, CardFooter, CardHeader, CardTitle} from "@/shared/components/card/card";
import {Separator} from "@/shared/components/separator/separator";
import {Text} from "@/shared/components/text/text";
import {cn} from "@/shared/lib/tw-merge/utils";
import {PetAvatar} from "@/shared/components/pet-avatar/pet-avatar";

import {healthTag} from "../../../../shared/data/health-tag.data";

export const PetCard = ({pet}: {pet: Pet}) => {
  const {label, icon: Icon, badgeColor} = healthTag[pet.healthState];

  const ageUnit = pet.age === 1 ? "año" : "años";

  return (
    <Card className="px-5" variant="petCard">
      <span className={cn("absolute inset-y-0 left-0 w-1.5", genderBar[pet.gender])} />
      <CardHeader>
        <PetAvatar image={pet.image} name={pet.name} />
        <div>
          <div className="flex items-center gap-3">
            <CardTitle>{pet.name}</CardTitle>
            <BadgeCheck className="size-5 fill-secondary-500 stroke-secondary-500 [&>path:last-child]:stroke-black" />
          </div>

          <Text className="text-tertiary-500" variant="caption.1.bold">
            {pet.breed}
          </Text>
        </div>
      </CardHeader>
      <CardFooter>
        <Separator />
        <div className="mb-4 flex w-full flex-row items-center justify-between pt-2">
          <div className="flex flex-row items-center gap-1">
            <Text className="text-tertiary-500" variant="caption.1">
              {pet.age} {ageUnit}
            </Text>
            <Text className="mx-1 text-tertiary-500" variant="caption.1">
              •
            </Text>
            <Text className="text-tertiary-500" variant="caption.1">
              {pet.gender}
            </Text>
          </div>
          <div>
            <Text className="text-tertiary-500" variant="caption.1">
              {pet.weight} kg
            </Text>
          </div>
        </div>

        <Badge color={badgeColor} variant="health">
          <Icon className="size-4" />
          {label}
        </Badge>
      </CardFooter>
    </Card>
  );
};
