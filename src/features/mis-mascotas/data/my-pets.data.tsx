import {Pet} from "@/features/home/types/pet.types";

export type MyPet = Pick<Pet, "id" | "name" | "image" | "breed" | "age" | "healthState" | "weight">;

export const MY_PETS_DATA: MyPet[] = [
  {
    id: 1,
    name: "Menta",
    image: "/images/menta.jpg",
    breed: "Común Europeo",
    age: 5,
    healthState: "upToDate",
    weight: 6,
  },
  {
    id: 2,
    name: "Limón",
    image: "/images/limon.jpg",
    breed: "Pelo Largo Doméstico",
    age: 1,
    healthState: "dewormingPending",
    weight: 2,
  },
];
