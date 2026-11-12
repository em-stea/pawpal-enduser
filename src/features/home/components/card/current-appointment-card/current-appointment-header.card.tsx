import {User} from "lucide-react";
import Image from "next/image";

import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";
import {CurrentAppointmentData} from "@/features/home/data/current-appointment.data";

interface CurrentAppointmentHeaderCardProps {
  data: CurrentAppointmentData;
}

export default function CurrentAppointmentHeaderCard({data}: CurrentAppointmentHeaderCardProps) {
  const {name, animalType, breed, age, image, tutor} = data;

  return (
    <>
      <div className="flex h-21 w-18 min-w-18 items-center justify-center overflow-hidden rounded-lg">
        <Image alt={name} height={100} src={image} width={100} />
      </div>
      <div className="w-full">
        <div className="flex flex-row items-center justify-between pb-1">
          <Heading className="font-semibold" variant="subtitle.3">
            {name}
          </Heading>
          <Text className="text-secondary-500" variant="caption.1.bold">
            10.30hs
          </Text>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Text className="text-tertiary-500" variant="body.1">
            {animalType}
          </Text>
          <div className="mx-.5 h-1.5 w-1.5 rounded-full bg-tertiary-500" />
          <Text className="text-tertiary-500" variant="body.1">
            {breed}
          </Text>
          <Text className="text-tertiary-500" variant="body.1">
            ({age} {age === 1 ? "año" : "años"})
          </Text>
        </div>
        <div className="flex flex-row items-center gap-2 pt-1">
          <User className="h-4 w-4 text-tertiary-500" />
          <Text className="text-tertiary-500" variant="body.1">
            {tutor}
          </Text>
        </div>
      </div>
    </>
  );
}
