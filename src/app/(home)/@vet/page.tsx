import CurrentAppointmentCard from "@/features/home/components/card/current-appointment-card/current-appointment.card";
import {GuardStatusCard} from "@/features/home/components/card/guard-status.card";
import {CURRENT_APPOINTMENT_DATA} from "@/features/home/data/current-appointment.data";
import {AppointmentMode} from "@/features/home/types/appointment-mode";
import {Badge} from "@/shared/components/badge/badge";
import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";

export default function VetPage() {
  return (
    <Container className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-4">
        <Badge color="primary" variant="opal">
          Médico Veterinario
          <div className="h-1.5 w-1.5 rounded-full bg-primary-200" />
          M.P. 4821
        </Badge>
        <Heading variant="title.2">Hola, Dr. Martínez Paz</Heading>
      </div>

      <GuardStatusCard />

      <CurrentAppointmentCard
        appointmentMode={AppointmentMode.ONLINE}
        data={CURRENT_APPOINTMENT_DATA}
      />
    </Container>
  );
}
