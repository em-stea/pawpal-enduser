import {Building, Video} from "lucide-react";

import {Badge} from "@/shared/components/badge/badge";
import {Heading} from "@/shared/components/heading/heading";
import {cn} from "@/shared/lib/tw-merge/utils";

import {ShiftStatus} from "../contexts/vet.context";

import {
  AppointmentMode,
  AppointmentModeType,
} from "./card/current-appointment-card/appointment-mode";

interface StatusSectionHeaderProps {
  appointmentMode: AppointmentModeType;
  title?: string;
  shiftStatus?: ShiftStatus;
}

export function StatusSectionHeader({
  appointmentMode,
  title,
  shiftStatus,
}: StatusSectionHeaderProps) {
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
    <div className="flex flex-row items-center justify-between pl-2">
      <div className="flex flex-row items-center gap-3">
        <div className="relative flex items-center justify-center">
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full bg-secondary-500",
              shiftStatus === ShiftStatus.IN_PROGRESS && "animate-ping-slow",
            )}
          />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-500" />
        </div>
        <Heading className="whitespace-nowrap" variant="subtitle.2">
          {title}
        </Heading>
      </div>
      <Badge color={modalityBadge[appointmentMode].color} variant="opal">
        {modalityBadge[appointmentMode].icon}
        {modalityBadge[appointmentMode].label}
      </Badge>
    </div>
  );
}
