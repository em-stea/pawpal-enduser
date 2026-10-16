import {Calendar, Hospital, Map, Navigation, Phone} from "lucide-react";

import {PROVINCES_LIST} from "./provinces-list";
import {CITIES_AND_REGIONS_GROUPS} from "./cities-list";

export interface CareModality {
  value: string;
  label: string;
  description: string;
  fields?: ModalityField[];
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
  items: {label: string; value: string}[];
  placeholder: string;
}

export interface SelectGroupModalityField extends BaseModalityField {
  variant: "selectGroup";
  placeholder: string;
  multiple?: boolean;
  data: {
    label: string;
    items: {label: string; value: string}[];
  }[];
}

export interface ScheduleModalityField extends BaseModalityField {
  variant: "schedule";
}

export type ModalityField =
  | TextModalityField
  | SelectModalityField
  | SelectGroupModalityField
  | ScheduleModalityField;

export type FieldVariant = ModalityField["variant"];

const CLINIC_FIELDS: ModalityField[] = [
  {
    name: "clinicName",
    label: "Nombre del Centro / Clínica",
    placeholder: "Centro Veterinario San Juan",
    variant: "text",
    inputType: "text",
    icon: <Hospital />,
  },
  {
    name: "clinicAddress",
    label: "Dirección del Centro",
    placeholder: "Calle 123, Ciudad",
    variant: "text",
    inputType: "text",
    icon: <Map />,
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
    label: "Barrios",
    variant: "selectGroup",
    placeholder: "Barrio",
    multiple: true,
    data: CITIES_AND_REGIONS_GROUPS,
    icon: <Navigation />,
  },
];

export const CARE_MODALITY: CareModality[] = [
  {
    value: "at_veterinary_clinic",
    label: "En Veterinaria / Consultorio",
    description: "Atención en sede física fija habilitada con sala clínica",
    fields: CLINIC_FIELDS,
  },
  {
    value: "at_home",
    label: "Atención a Domicilio",
    description: "Visitas domiciliarias programadas con radio geográfico móvil",
    fields: HOME_FIELDS,
  },
  {
    value: "online",
    label: "Online",
    description: "Atención a través de videollamadas o consultas en línea",
  },
  {
    value: "hybrid",
    label: "Modalidad Mixta (Sede & Visita)",
    description: "Flexibilidad completa combinando consultorio y consultas móviles",
    fields: [...CLINIC_FIELDS, ...HOME_FIELDS],
  },
];
