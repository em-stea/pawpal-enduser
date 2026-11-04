import {Pet} from "../types/pet.types";

export type CurrentAppointmentData = Pick<
  Pet,
  "name" | "animalType" | "breed" | "age" | "image"
> & {
  tutor: string;
  reason: string;
};

export const CURRENT_APPOINTMENT_DATA: CurrentAppointmentData = {
  name: "Menta",
  animalType: "Felino",
  breed: "Común Europeo",
  age: 5,
  image: "/images/menta.jpg",
  tutor: "Emilia Stea",
  reason: "Control post-quirúrgico herida limpia & Vacuna Antirrábica obligatoria anual.",
};
