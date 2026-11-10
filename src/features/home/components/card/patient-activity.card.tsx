import Image from "next/image";

import {Card, CardContent, CardHeader} from "@/shared/components/card/card";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

import {AppointmentData} from "../../data/appointment.data";

interface PatientActivityCardProps {
  data: AppointmentData;
}

export const PatientActivityCard = ({data}: PatientActivityCardProps) => {
  const {name, image, reason, time} = data;

  return (
    <Card variant="patientActivity">
      <CardHeader>
        <Image alt={name} height={100} src={image} width={100} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center justify-between">
          <Heading variant="subtitle.4">{name}</Heading>
          <Text className="text-secondary-500" variant="caption.1.bold">
            {time}
          </Text>
        </div>
        <Text className="line-clamp-2 text-tertiary-500">{reason}</Text>
      </CardContent>
    </Card>
  );
};
