import {Calendar, Hospital, Map, Navigation, Phone} from "lucide-react";

import {PROVINCES_LIST} from "./provinces-list";
import {CITIES_AND_REGIONS_GROUPS} from "./cities-list";
import {ONLINE_PLATFORMS} from "./online-platforms";

export interface ModalitySection {
  title?: string;
  fields: ModalityField[];
}

export interface CareModality {
  value: string;
  label: string;
  description: string;
  sections?: ModalitySection[];
}

export interface BaseModalityField {
  name: string;
  label: string;
  icon: React.ReactNode;
}

export interface TextModalityField extends BaseModalityField {
  variant: "text";
  inputType?: "text" | "tel" | "email";
  placeholder: string;
}

export interface SelectModalityField extends BaseModalityField {
  variant: "select";
  multiple?: boolean;
  items: {label: string; value: string}[];
  placeholder: string;
}

export interface SelectBadgeModalityField extends BaseModalityField {
  variant: "selectGroup";
  multiple?: boolean;
  data: {
    label: string;
    items: {label: string; value: string}[];
  }[];
}

export interface ScheduleModalityField extends BaseModalityField {
  variant: "schedule";
}

export interface PlacesModalityField extends BaseModalityField {
  variant: "places";
  placeholder: string;
}

export type ModalityField =
  | TextModalityField
  | SelectModalityField
  | SelectBadgeModalityField
  | ScheduleModalityField
  | PlacesModalityField;

export type FieldVariant = ModalityField["variant"];

const CLINIC_FIELDS: ModalityField[] = [
  {
    name: "clinicName",
    label: "Nombre del Centro / Clínica",
    placeholder: "Centro Veterinario San Juan",
    variant: "places",
    icon: <Hospital />,
  },

  {
    name: "clinicPhone",
    label: "Teléfono del Centro",
    placeholder: "(+54) 11-1234-5678",
    variant: "text",
    inputType: "tel",
    icon: <Phone />,
  },
  {
    name: "daysOfAttention",
    label: "Horarios de Atención",
    variant: "schedule",
    icon: <Calendar />,
  },
];

const HOME_FIELDS: ModalityField[] = [
  {
    name: "coverageProvince",
    label: "Provincia",
    variant: "select",
    placeholder: "Buenos Aires",
    items: PROVINCES_LIST,
    icon: <Navigation />,
  },
  {
    name: "coverageZones",
    label: "Ciudad / Barrio",
    variant: "selectGroup",
    multiple: true,
    data: CITIES_AND_REGIONS_GROUPS,
    icon: <Navigation />,
  },
];

const ONLINE_FIELDS: ModalityField[] = [
  {
    name: "onlinePlatform",
    label: "Plataforma de Consulta",
    placeholder: "Medio de Contacto",
    variant: "select",
    multiple: true,
    items: ONLINE_PLATFORMS,
    icon: <Navigation />,
  },
  {
    name: "daysOfAttention",
    label: "Horarios de Atención",
    variant: "schedule",
    icon: <Calendar />,
  },
];

export const CARE_MODALITY: CareModality[] = [
  {
    value: "at_veterinary_clinic",
    label: "En Veterinaria / Consultorio",
    description: "Atención en sede física fija habilitada con sala clínica",
    sections: [{fields: CLINIC_FIELDS}],
  },
  {
    value: "at_home",
    label: "Atención a Domicilio",
    description: "Visitas domiciliarias programadas con radio geográfico móvil",
    sections: [{fields: HOME_FIELDS}],
  },
  {
    value: "online",
    label: "Online",
    description: "Atención a través de videollamadas o consultas en línea",
    sections: [{fields: ONLINE_FIELDS}],
  },
  {
    value: "hybrid",
    label: "Modalidad Mixta (Sede & Visita)",
    description: "Flexibilidad completa combinando consultorio y consultas móviles",
    sections: [
      {
        title: "Datos del Consultorio",
        fields: CLINIC_FIELDS,
      },
      {
        title: "Zona de Atención a Domicilio",
        fields: HOME_FIELDS,
      },
    ],
  },
];
