import type {ComponentType, SVGProps} from "react";

import {Ambulance, BookOpenText, BriefcaseMedical, Calendar1} from "lucide-react";

type TagData = "1 Alerta" | "Mañana";

type ShortcutIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface ShortcutCardData {
  id: number;
  title: string;
  description: string;
  icon: {
    component: ShortcutIcon;
    color: string;
    backgroundColor: string;
  };
  tag?: TagData;
}

export const SHORTCUT_CARD_DATA: ShortcutCardData[] = [
  {
    id: 1,
    title: "Libreta Digital",
    description: "Vacunas y Pipetas",
    icon: {
      component: BookOpenText,
      color: "text-primary-300",
      backgroundColor: "bg-primary-300/30",
    },
    tag: "1 Alerta",
  },
  {
    id: 2,
    title: "Mis Turnos",
    description: "Dr.Gómez (10.30hs)",
    icon: {
      component: Calendar1,
      color: "text-secondary-500",
      backgroundColor: "bg-secondary-200/30",
    },
    tag: "Mañana",
  },
  {
    id: 3,
    title: "A Domicilio",
    description: "Zona Norte/ CABA",
    icon: {
      component: Ambulance,
      color: "text-primary-500",
      backgroundColor: "bg-primary-700/30",
    },
  },
  {
    id: 4,
    title: "Primeros Auxilios",
    description: "Guía de Toxicidad",
    icon: {
      component: BriefcaseMedical,
      color: "text-red-200",
      backgroundColor: "bg-red-600/30",
    },
  },
];
