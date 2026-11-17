import {
  Calendar,
  FileText,
  Hospital,
  House,
  LucideIcon,
  MessagesSquare,
  PawPrint,
  User,
} from "lucide-react";

import {Role} from "@/app/(home)/layout";
import {ROUTES} from "@/shared/lib/route";

export const navigation: {role: Role; items: {label: string; href: string; icon: LucideIcon}[]}[] =
  [
    {
      role: "tutor",
      items: [
        {
          label: "Home",
          href: ROUTES.home,
          icon: House,
        },
        {
          label: "Mis Mascotas",
          href: ROUTES.misMascotas,
          icon: PawPrint,
        },
        {
          label: "Turnos",
          href: ROUTES.turnos,
          icon: Calendar,
        },
        {
          label: "Clínicas",
          href: ROUTES.clinicas,
          icon: Hospital,
        },
        {
          label: "Perfil",
          href: ROUTES.perfil,
          icon: User,
        },
      ],
    },
    {
      role: "vet",
      items: [
        {
          label: "Agenda",
          href: ROUTES.agenda,
          icon: Calendar,
        },
        {
          label: "Pacientes",
          href: ROUTES.pacientes,
          icon: PawPrint,
        },
        {
          label: "Recetas",
          href: ROUTES.recetas,
          icon: FileText,
        },
        {
          label: "Mensajes",
          href: ROUTES.mensajes,
          icon: MessagesSquare,
        },
        {
          label: "Perfil",
          href: ROUTES.perfil,
          icon: User,
        },
      ],
    },
  ];
