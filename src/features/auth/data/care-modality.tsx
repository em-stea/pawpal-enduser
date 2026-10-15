import type {FormVetValues} from "../schemas/vet-schema";

import {Hospital, Map, Navigation} from "lucide-react";

export type FieldType = "text" | "tags";

export type ModalityFieldName = Extract<
  keyof FormVetValues,
  "clinic_name" | "address" | "coverage_zones"
>;

export interface ModalityField {
  name: ModalityFieldName;
  label: string;
  type: FieldType;
  placeholder: string;
  icon: React.ReactNode;
}

export interface CareModality {
  value: string;
  label: string;
  description: string;
  fields?: ModalityField[];
}

const CLINIC_FIELDS: ModalityField[] = [
  {
    name: "clinic_name",
    label: "Nombre del Centro / Clínica",
    placeholder: "Centro Veterinario San Juan",
    type: "text",
    icon: <Hospital />,
  },
  {
    name: "address",
    label: "Dirección de Atención Física",
    placeholder: "Calle 123, Ciudad",
    type: "text",
    icon: <Map />,
  },
];

const HOME_FIELDS: ModalityField[] = [
  {
    name: "coverage_zones",
    label: "Zonas y Barrios de Cobertura",
    type: "tags",
    placeholder: "Agregar barrio",
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
