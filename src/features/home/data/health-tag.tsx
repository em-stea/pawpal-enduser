import {CheckCircle2, Clock, AlertTriangle, Pill, HelpCircle, LucideIcon} from "lucide-react";

import {HealthState} from "../types/pet.types";

export const healthTag: Record<HealthState, {label: string; className: string; icon: LucideIcon}> =
  {
    upToDate: {
      label: "Al día",
      className: "bg-secondary-500/15 text-secondary-500",
      icon: CheckCircle2,
    },
    vaccinePending: {
      label: "Vacuna pendiente",
      className: "bg-red-500/15 text-red-300",
      icon: Clock,
    },
    vaccineOverdue: {
      label: "Vacuna vencida",
      className: "bg-red-500/25 text-red-300",
      icon: AlertTriangle,
    },
    dewormingPending: {
      label: "Desparasitación pendiente",
      className: "bg-amber-500/15 text-amber-300",
      icon: Clock,
    },
    checkupPending: {
      label: "Control pendiente",
      className: "bg-amber-500/15 text-amber-300",
      icon: Clock,
    },
    inTreatment: {
      label: "En tratamiento",
      className: "bg-primary-500/15 text-primary-300",
      icon: Pill,
    },
    noData: {
      label: "Sin datos",
      className: "bg-tertiary-700 text-tertiary-300",
      icon: HelpCircle,
    },
  };
