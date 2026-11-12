import {BellPlus, FileText, MessageSquareText, Share2} from "lucide-react";

import {ShortcutCardData} from "./shortcut-card-tutor.data";

export type PendingMessages = "2";

export const SHORTCUT_VET_DATA: ShortcutCardData[] = [
  {
    id: 1,
    title: "Nueva Receta",
    description: "Firma y descarga",
    icon: {
      component: FileText,
      color: "text-primary-200",
      backgroundColor: "bg-primary-600/30",
    },
  },
  {
    id: 2,
    title: "Compartir HC",
    description: "Derivación a colega",
    icon: {
      component: Share2,
      color: "text-tertiary-100",
      backgroundColor: "bg-tertiary-100/10",
    },
  },
  {
    id: 3,
    title: "Recordatorios",
    description: "Vacunas y pipetas",
    icon: {
      component: BellPlus,
      color: "text-secondary-400",
      backgroundColor: "bg-secondary-800/50",
    },
  },
  {
    id: 4,
    title: "Consultas",
    description: "Chat con tutores",
    icon: {
      component: MessageSquareText,
      color: "text-red-200",
      backgroundColor: "bg-red-600/30",
    },
    badgeCount: "2",
  },
];
