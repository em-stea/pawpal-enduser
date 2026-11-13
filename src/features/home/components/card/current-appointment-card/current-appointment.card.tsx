import {Card, CardContent, CardFooter, CardHeader} from "@/shared/components/card/card";
import {Separator} from "@/shared/components/separator/separator";
import {Text} from "@/shared/components/text/text";

import {CurrentAppointmentData} from "../../../data/current-appointment.data";

import {AppointmentModeType} from "./appointment-mode";
import CurrentAppointmentFooterCard from "./current-appointment-footer.card";
import CurrentAppointmentHeaderCard from "./current-appointment-header.card";

interface CurrentAppointmentCardProps {
  data: CurrentAppointmentData;
  appointmentMode: AppointmentModeType;
}

export default function CurrentAppointmentCard({
  data,
  appointmentMode,
}: CurrentAppointmentCardProps) {
  return (
    <Card variant="petCard">
      <CardHeader className="flex flex-row items-center">
        <CurrentAppointmentHeaderCard data={data} />
      </CardHeader>
      <CardContent>
        <Separator className="my-2" />
        <Text className="pt-2 pb-2" variant="eyebrow">
          MOTIVO DE CONSULTA
        </Text>
        <Text className="text-tertiary-500" variant="body.1">
          {data.reason}
        </Text>
      </CardContent>
      <CardFooter className="pt-2">
        <CurrentAppointmentFooterCard appointmentMode={appointmentMode} />
      </CardFooter>
    </Card>
  );
}
