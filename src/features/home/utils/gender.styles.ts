import type {PetGender} from "../types/pet.types";

export const genderBar: Record<PetGender, string> = {
  Hembra: "bg-primary-500",
  Macho: "bg-secondary-500",
};

export const genderBadge: Record<PetGender, string> = {
  Hembra: "bg-primary-500/15 text-primary-300",
  Macho: "bg-secondary-500/15 text-secondary-500",
};
