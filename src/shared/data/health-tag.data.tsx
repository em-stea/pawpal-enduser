import type {BadgeVariantProps} from "@/shared/components/badge/badge.styles";

import {CheckCircle2, Clock, AlertTriangle, Pill, HelpCircle, LucideIcon} from "lucide-react";

import {HealthState} from "../../features/home/types/pet.types";

interface HealthStyle {
  label: string;
  icon: LucideIcon;
  dotColor: string;
  textColor: string;
  badgeColor: NonNullable<BadgeVariantProps["color"]>;
}

export const healthTag: Record<HealthState, HealthStyle> = {
  upToDate: {
    label: "Al día",
    icon: CheckCircle2,
    dotColor: "bg-status-success",
    textColor: "text-status-success",
    badgeColor: "secondaryMuted",
  },
  vaccinePending: {
    label: "Vacuna pendiente",
    icon: Clock,
    dotColor: "bg-status-danger",
    textColor: "text-status-danger",
    badgeColor: "dangerMuted",
  },
  vaccineOverdue: {
    label: "Vacuna vencida",
    icon: AlertTriangle,
    dotColor: "bg-status-danger",
    textColor: "text-status-danger",
    badgeColor: "dangerStrong",
  },
  dewormingPending: {
    label: "Desparasitación pendiente",
    icon: Clock,
    dotColor: "bg-status-warning",
    textColor: "text-status-warning",
    badgeColor: "warning",
  },
  checkupPending: {
    label: "Control pendiente",
    icon: Clock,
    dotColor: "bg-status-warning",
    textColor: "text-status-warning",
    badgeColor: "warning",
  },
  inTreatment: {
    label: "En tratamiento",
    icon: Pill,
    dotColor: "bg-status-info",
    textColor: "text-status-info",
    badgeColor: "primaryMuted",
  },
  noData: {
    label: "Sin datos",
    icon: HelpCircle,
    dotColor: "bg-status-neutral",
    textColor: "text-status-neutral",
    badgeColor: "neutral",
  },
};
