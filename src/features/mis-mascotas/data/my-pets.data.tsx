import {Pet} from "@/features/home/types/pet.types";

export type MyPet = Pick<Pet, "id" | "name" | "image" | "healthState">;

export const MY_PETS_DATA: MyPet[] = [
  {
    id: 1,
    name: "Menta",
    image: "/images/menta.jpg",
    healthState: "upToDate",
  },
  {
    id: 2,
    name: "Limón",
    image: "/images/limon.jpg",
    healthState: "vaccinePending",
  },
];
