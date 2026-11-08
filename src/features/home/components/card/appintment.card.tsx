import Image from "next/image";

import {Card, CardContent, CardHeader} from "@/shared/components/card/card";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

import {AppointmentData} from "../../data/appointment.data";

interface AppointmentCardProps {
  data: AppointmentData;
}

export const AppointmentCard = ({data}: AppointmentCardProps) => {
  const {name, image, reason, time} = data;

  return (
    <Card variant="appointmentCard">
      <CardHeader>
        <Image alt={name} height={100} src={image} width={100} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center justify-between">
          <Heading variant="subtitle.2">{name}</Heading>
          <Text className="text-secondary-500" variant="caption.1.bold">
            {time}
          </Text>
        </div>
        <Text className="line-clamp-2 text-tertiary-500" variant="body.3">
          {reason}
        </Text>
      </CardContent>
    </Card>
  );
};
