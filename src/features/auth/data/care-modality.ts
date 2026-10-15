interface CareModality {
  value: string;
  label: string;
  description: string;
}

export const CARE_MODALITY: CareModality[] = [
  {
    value: "at_veterinary_clinic",
    label: "En Veterinaria/Consultorio",
    description: "Atención en sede física fija habilitada con sala clínica",
  },
  {
    value: "at_home",
    label: "Atención a Domicilio",
    description: "Visitas domiciliarias programadas con radio geográfico.",
  },
  {
    value: "online",
    label: "Online",
    description: "Atención online a través de videollamadas o consultas en línea.",
  },
  {
    value: "hybrid",
    label: "Modalida Mixta (Sede & Visita)",
    description: "Flexibilidad completa combinando consultorio y consultas móviles",
  },
];
