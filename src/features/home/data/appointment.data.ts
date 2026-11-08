import {Pet} from "../types/pet.types";

export type AppointmentData = Pick<Pet, "name" | "animalType" | "breed" | "age" | "image"> & {
  tutor: string;
  reason: string;
  time: string;
};

export const APPOINTMENT_DATA: AppointmentData[] = [
  {
    name: "Menta",
    animalType: "Felino",
    breed: "Común Europeo",
    age: 5,
    image: "/images/menta.jpg",
    tutor: "Emilia Stea",
    reason: "Control post-quirúrgico herida limpia & Vacuna Antirrábica obligatoria anual.",
    time: "10.30hs",
  },
  {
    name: "Limón",
    animalType: "Felino",
    breed: "Pelo Largo",
    age: 5,
    image: "/images/limon.jpg",
    tutor: "Emilia Stea",
    reason: "Desparasitación interna y externa",
    time: "11.30hs",
  },
];
