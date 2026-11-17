"use client";

import {Text} from "@/shared/components/text/text";

import {AppointmentData} from "../../data/appointment.data";
import {PatientActivityCard} from "../card/patient-activity.card";
import {ShiftStatus, useVet} from "../../contexts/vet.context";

export const UpcomingAppointments = ({data}: {data: AppointmentData[]}) => {
  const {shiftStatus} = useVet();

  return (
    <div className="flex flex-col">
      <Text className="pb-2 uppercase" variant="eyebrow">
        {shiftStatus === ShiftStatus.IN_PROGRESS ? "A continuación hoy" : "Próximos turnos mañana"}
      </Text>
      <div className="flex flex-col gap-3">
        {data.map((appointment) => (
          <PatientActivityCard key={appointment.name} data={appointment} />
        ))}
      </div>
    </div>
  );
};
