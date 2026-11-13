import {CareHistory} from "@/features/home/components/care-history/care-history";
import {LaborDayModule} from "@/features/home/components/labor-day-module/labor-day-module";
import {QuickActionModule} from "@/features/home/components/quick-action-module/quick-action-module";
import {UpcomingAppointments} from "@/features/home/components/upcoming-appointments/upcoming-appointments";
import {VetWelcomeModule} from "@/features/home/components/vet-welcome-module/vet-welcome-module";
import {APPOINTMENT_DATA} from "@/features/home/data/appointment.data";
import {CARE_HISTORY_DATA} from "@/features/home/data/care-history.data";
import {SHORTCUT_VET_DATA} from "@/features/home/data/shortcut-card-vet.data";
import {Container} from "@/shared/components/container/container";

export default function VetPage() {
  return (
    <Container className="flex flex-col gap-10">
      <VetWelcomeModule />

      <LaborDayModule />
      <UpcomingAppointments data={APPOINTMENT_DATA} />

      <QuickActionModule data={SHORTCUT_VET_DATA} />
      <CareHistory data={CARE_HISTORY_DATA} />
    </Container>
  );
}
