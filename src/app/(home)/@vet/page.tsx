import {AppointmentMode} from "@/features/home/components/card/current-appointment-card/appointment-mode";
import CurrentAppointmentCard from "@/features/home/components/card/current-appointment-card/current-appointment.card";
import {CareHistory} from "@/features/home/components/care-history/care-history";
import {QuickActionModule} from "@/features/home/components/quick-action-module/quick-action-module";
import {UpcomingAppointments} from "@/features/home/components/upcoming-appointments/upcoming-appointments";
import {VetWelcomeModule} from "@/features/home/components/vet-welcome-module/vet-welcome-module";
import {APPOINTMENT_DATA} from "@/features/home/data/appointment.data";
import {CARE_HISTORY_DATA} from "@/features/home/data/care-history.data";
import {CURRENT_APPOINTMENT_DATA} from "@/features/home/data/current-appointment.data";
import {SHORTCUT_VET_DATA} from "@/features/home/data/shortcut-card-vet.data";
import {Container} from "@/shared/components/container/container";

export default function VetPage() {
  return (
    <Container className="flex flex-col gap-10">
      <VetWelcomeModule />

      <CurrentAppointmentCard
        appointmentMode={AppointmentMode.ONLINE}
        data={CURRENT_APPOINTMENT_DATA}
      />

      <UpcomingAppointments data={APPOINTMENT_DATA} />

      <QuickActionModule data={SHORTCUT_VET_DATA} />
      <CareHistory data={CARE_HISTORY_DATA} />
    </Container>
  );
}
