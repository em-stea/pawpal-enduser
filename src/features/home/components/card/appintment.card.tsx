import Image from "next/image";

import {Card, CardHeader} from "@/shared/components/card/card";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

import {AppointmentData} from "../../data/appointment.data";

interface AppointmentCardProps {
  data: AppointmentData;
}

export const AppointmentCard = ({data}: AppointmentCardProps) => {
  const {name, image, reason} = data;

  return (
    <Card variant="petCard">
      <CardHeader>
        <div className="flex h-21 w-18 min-w-18 items-center justify-center overflow-hidden rounded-lg">
          <Image alt={name} height={100} src={image} width={100} />
        </div>
        <div className="flex flex-col items-start">
          <Heading variant="subtitle.2">{name}</Heading>
          <Text className="text-tertiary-500" variant="body.3">
            {reason}
          </Text>
        </div>
      </CardHeader>
    </Card>
  );
};
