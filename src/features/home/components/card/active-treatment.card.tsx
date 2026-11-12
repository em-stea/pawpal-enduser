import type {PetGender} from "@/features/home/types/pet.types";

import {AlarmClock, CalendarArrowRight, CircleCheck} from "lucide-react";

import {genderBadge} from "@/features/home/utils/gender.styles";
import {Badge} from "@/shared/components/badge/badge";
import {Button} from "@/shared/components/button/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/shared/components/card/card";
import {Text} from "@/shared/components/text/text";
import {truncateText} from "@/shared/utils/truncate-text";
import {Heading} from "@/shared/components/heading/heading";

export function ActiveTreatmentCard({
  petName = "Menta",
  gender = "Hembra",
}: {
  petName?: string;
  gender?: PetGender;
}) {
  return (
    <Card variant="treatmentCard">
      <CardHeader>
        <CardTitle>Tratamiento activo</CardTitle>
        <Badge color={genderBadge[gender]} variant="health">
          {petName}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center rounded-2xl bg-secondary-500/20 p-2.5">
          <AlarmClock className="text-secondary-500" />
        </div>
        <div className="flex flex-col gap-1">
          <Text className="line-clamp-1" variant="body.2">
            {truncateText("Amoxicilina + Clavulánico", 21)}
          </Text>
          <div className="flex items-center gap-2.5">
            <Text variant="body.1">250 mg</Text>
            <div className="h-1.5 w-1.5 rounded-full bg-tertiary-400" />
            <Text variant="body.1">Con comida</Text>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Heading className="text-secondary-500" variant="subtitle.2">
            14:00hs
          </Heading>
          <Text variant="body.1">en 45 min</Text>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="gap-2.5" size="fullWidth">
          <CircleCheck />
          Marcar dosis tomada
        </Button>
        <Button isHighlight className="h-14.5" variant="icon">
          <CalendarArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
