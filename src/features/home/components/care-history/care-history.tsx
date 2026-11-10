import {Button} from "@/shared/components/button/button";
import {Heading} from "@/shared/components/heading/heading";

import {PatientActivityCard} from "../card/patient-activity.card";
import {AppointmentData} from "../../data/appointment.data";

export const CareHistory = ({data}: {data: AppointmentData[]}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading variant="subtitle.3">Últimas atenciones</Heading>
        <Button isHighlight size="sm" variant="tertiary">
          Ver todas
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {data.map((appointment) => (
          <PatientActivityCard key={appointment.name} data={appointment} />
        ))}
      </div>
    </div>
  );
};
