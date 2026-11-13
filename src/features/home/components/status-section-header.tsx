import {Building, Check, Video} from "lucide-react";

import {Badge} from "@/shared/components/badge/badge";
import {Heading} from "@/shared/components/heading/heading";
import {cn} from "@/shared/lib/tw-merge/utils";

import {ShiftStatus} from "../contexts/vet.context";

import {
  AppointmentMode,
  AppointmentModeType,
} from "./card/current-appointment-card/appointment-mode";

export type HeaderBadgeVariant = AppointmentModeType | "al-dia";

interface StatusSectionHeaderProps {
  badgeType: HeaderBadgeVariant;
  title?: string;
  shiftStatus?: ShiftStatus;
}

const BADGE_CONFIG = {
  [AppointmentMode.ONLINE]: {
    icon: <Video className="h-4 w-4" />,
    label: "ONLINE",
    color: "primary",
    variant: "opal",
  },
  [AppointmentMode.PRESENCIAL]: {
    icon: <Building className="h-4 w-4" />,
    label: "PRESENCIAL",
    color: "muted",
    variant: "opal",
  },
  "al-dia": {
    icon: <Check className="h-4 w-4" />,
    label: "AL DÍA",
    color: "secondaryOutline",
    variant: "default",
  },
} as const;

export function StatusSectionHeader({badgeType, title, shiftStatus}: StatusSectionHeaderProps) {
  const currentBadge = BADGE_CONFIG[badgeType];

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
      <Badge color={currentBadge.color} variant="opal">
        {currentBadge.icon}
        {currentBadge.label}
      </Badge>
    </div>
  );
}
