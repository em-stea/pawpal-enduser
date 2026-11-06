import {Folder, Phone, Video} from "lucide-react";

import {Button} from "@/shared/components/button/button";

import {AppointmentMode, AppointmentModeType} from "../../../types/appointment-mode";

export default function CurrentAppointmentFooterCard({
  appointmentMode,
}: {
  appointmentMode: AppointmentModeType;
}) {
  const isOnline = appointmentMode === AppointmentMode.ONLINE;

  const buttonContent = {
    [AppointmentMode.ONLINE]: {
      icon: <Video className="h-5.5 w-5.5" />,
      label: "Unirse a Videollamada",
    },
    [AppointmentMode.PRESENCIAL]: {
      icon: <Folder className="h-5 w-5" />,
      label: "Ver HC",
    },
  };

  return (
    <>
      <Button className="gap-2" size="fullWidth" variant="primary">
        {buttonContent[appointmentMode].icon}
        {buttonContent[appointmentMode].label}
      </Button>

      {isOnline && (
        <div className="flex w-full flex-row items-center gap-2 pt-3">
          <Button className="gap-2" size="fullWidth" variant="secondary">
            <Folder className="h-5 w-5" />
            Ver HC
          </Button>
          <Button className="gap-2" size="fullWidth" variant="secondary">
            <Phone className="h-5 w-5" />
            Llamar Tutor
          </Button>
        </div>
      )}
    </>
  );
}
