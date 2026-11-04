import Image from "next/image";
import {User} from "lucide-react";

import {Card, CardContent, CardHeader} from "@/shared/components/card/card";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";
import {Separator} from "@/shared/components/separator/separator";

import {CurrentAppointmentData} from "../../data/current-appointment.data";

export default function CurrentAppointmentCard({data}: {data: CurrentAppointmentData}) {
  const {name, animalType, breed, age, image, reason, tutor} = data;

  return (
    <div className="flex flex-col gap-3 pt-6">
      <div className="flex flex-row items-center gap-3 pl-2">
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-secondary-500" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-500" />
        </div>
        <Heading variant="subtitle.2">Turno en Curso</Heading>
      </div>

      <Card variant="petCard">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex h-21 w-18 items-center justify-center overflow-hidden rounded-lg">
            <Image alt={name} height={100} src={image} width={100} />
          </div>
          <div>
            <div className="flex flex-row items-center justify-between gap-2">
              <Heading variant="subtitle.2">{name}</Heading>
              <Text className="text-secondary-500" variant="caption.1.bold">
                10.30hs
              </Text>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Text className="text-tertiary-500" variant="body.3">
                {animalType}
              </Text>
              <div className="mx-.5 h-1.5 w-1.5 rounded-full bg-tertiary-500" />
              <Text className="text-tertiary-500" variant="body.3">
                {breed}
              </Text>
              <Text className="text-tertiary-500" variant="body.3">
                ({age} {age === 1 ? "año" : "años"})
              </Text>
            </div>
            <div className="flex flex-row items-center gap-2 pt-1">
              <User className="h-4 w-4 text-tertiary-500" />
              <Text className="text-tertiary-500" variant="body.3">
                {tutor}
              </Text>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Separator />
          <Text className="pt-2 pb-2" variant="caption.2">
            MOTIVO DE CONSULTA
          </Text>
          <Text className="text-tertiary-500" variant="body.3">
            {reason}
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}
