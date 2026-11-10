import {Text} from "@/shared/components/text/text";

import {AppointmentData} from "../../data/appointment.data";
import {PatientActivityCard} from "../card/patient-activity.card";

export const UpcomingAppointments = ({data}: {data: AppointmentData[]}) => {
  return (
    <div className="flex flex-col">
      <Text className="pb-2 uppercase" variant="eyebrow">
        A continuación hoy
      </Text>
      <div className="flex flex-col gap-3">
        {data.map((appointment) => (
          <PatientActivityCard key={appointment.name} data={appointment} />
        ))}
      </div>
    </div>
  );
};
