"use client";

import {ShiftStatus, useVet} from "../../contexts/vet.context";
import {CURRENT_APPOINTMENT_DATA} from "../../data/current-appointment.data";
import {AppointmentMode} from "../card/current-appointment-card/appointment-mode";
import CurrentAppointmentCard from "../card/current-appointment-card/current-appointment.card";
import {StatusSectionHeader} from "../status-section-header";

export const LaborDayModule = () => {
  const {shiftHours, shiftStatus} = useVet();

  return shiftStatus === ShiftStatus.IN_PROGRESS ? (
    <div className="flex flex-col gap-3">
      <StatusSectionHeader appointmentMode={AppointmentMode.ONLINE} title="Turno en Curso" />
      <CurrentAppointmentCard
        appointmentMode={AppointmentMode.ONLINE}
        data={CURRENT_APPOINTMENT_DATA}
      />
    </div>
  ) : (
    <div className="flex flex-col gap-3">
      <StatusSectionHeader
        appointmentMode={AppointmentMode.ONLINE}
        shiftStatus={shiftStatus}
        title="Jornada Finalizada"
      />
    </div>
  );
};
