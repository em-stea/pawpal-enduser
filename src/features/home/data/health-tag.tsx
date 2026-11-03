import {CheckCircle2, Clock, AlertTriangle, Pill, HelpCircle, LucideIcon} from "lucide-react";

import type {BadgeVariantProps} from "@/shared/components/badge/badge.styles";

import {HealthState} from "../types/pet.types";

export const healthTag: Record<
  HealthState,
  {label: string; color: NonNullable<BadgeVariantProps["color"]>; icon: LucideIcon}
> = {
  upToDate: {
    label: "Al día",
    color: "secondaryMuted",
    icon: CheckCircle2,
  },
  vaccinePending: {
    label: "Vacuna pendiente",
    color: "dangerMuted",
    icon: Clock,
  },
  vaccineOverdue: {
    label: "Vacuna vencida",
    color: "dangerStrong",
    icon: AlertTriangle,
  },
  dewormingPending: {
    label: "Desparasitación pendiente",
    color: "warning",
    icon: Clock,
  },
  checkupPending: {
    label: "Control pendiente",
    color: "warning",
    icon: Clock,
  },
  inTreatment: {
    label: "En tratamiento",
    color: "primaryMuted",
    icon: Pill,
  },
  noData: {
    label: "Sin datos",
    color: "neutral",
    icon: HelpCircle,
  },
};
