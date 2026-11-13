"use client";

import {ShiftStatus, useVet} from "../../contexts/vet.context";
import {CURRENT_APPOINTMENT_DATA} from "../../data/current-appointment.data";
import {AppointmentMode} from "../card/current-appointment-card/appointment-mode";
import CurrentAppointmentCard from "../card/current-appointment-card/current-appointment.card";
import {DailyCompletionCard} from "../card/daily-completion.card";
import {StatusSectionHeader} from "../status-section-header";

export const LaborDayModule = () => {
  const {shiftStatus} = useVet();

  return shiftStatus === ShiftStatus.IN_PROGRESS ? (
    <div className="flex flex-col gap-3">
      <StatusSectionHeader badgeType={AppointmentMode.ONLINE} title="Turno en Curso" />
      <CurrentAppointmentCard
        appointmentMode={AppointmentMode.ONLINE}
        data={CURRENT_APPOINTMENT_DATA}
      />
    </div>
  ) : (
    <div className="flex flex-col gap-3">
      <StatusSectionHeader
        badgeType="al-dia"
        shiftStatus={shiftStatus}
        title="Jornada Finalizada"
      />
      <DailyCompletionCard />
    </div>
  );
};
