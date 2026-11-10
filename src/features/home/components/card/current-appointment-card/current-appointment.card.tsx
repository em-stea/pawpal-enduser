import {Building, Video} from "lucide-react";

import {Badge} from "@/shared/components/badge/badge";
import {Card, CardContent, CardFooter, CardHeader} from "@/shared/components/card/card";
import {Heading} from "@/shared/components/heading/heading";
import {Separator} from "@/shared/components/separator/separator";
import {Text} from "@/shared/components/text/text";

import {CurrentAppointmentData} from "../../../data/current-appointment.data";

import {AppointmentMode, AppointmentModeType} from "./appointment-mode";
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
  const modalityBadge = {
    [AppointmentMode.ONLINE]: {
      icon: <Video className="h-4 w-4" />,
      label: "ONLINE",
      color: "primary",
    },
    [AppointmentMode.PRESENCIAL]: {
      icon: <Building className="h-4 w-4" />,
      label: "PRESENCIAL",
      color: "muted",
    },
  } as const;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between pl-2">
        <div className="flex flex-row items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-secondary-500" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-500" />
          </div>
          <Heading className="whitespace-nowrap" variant="subtitle.2">
            Turno en Curso
          </Heading>
        </div>
        <Badge color={modalityBadge[appointmentMode].color} variant="opal">
          {modalityBadge[appointmentMode].icon}
          {modalityBadge[appointmentMode].label}
        </Badge>
      </div>

      <Card variant="petCard">
        <CardHeader className="flex flex-row items-center">
          <CurrentAppointmentHeaderCard data={data} />
        </CardHeader>
        <CardContent>
          <Separator />
          <Text className="pt-2 pb-2" variant="eyebrow">
            MOTIVO DE CONSULTA
          </Text>
          <Text className="text-tertiary-500" variant="body.3">
            {data.reason}
          </Text>
        </CardContent>
        <CardFooter className="pt-2">
          <CurrentAppointmentFooterCard appointmentMode={appointmentMode} />
        </CardFooter>
      </Card>
    </div>
  );
}
