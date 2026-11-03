import type {PetGender} from "../types/pet.types";
import type {BadgeVariantProps} from "@/shared/components/badge/badge.styles";

export const genderBar: Record<PetGender, string> = {
  Hembra: "bg-primary-500",
  Macho: "bg-secondary-500",
};

export const genderBadge: Record<PetGender, NonNullable<BadgeVariantProps["color"]>> = {
  Hembra: "primaryMuted",
  Macho: "secondaryMuted",
};
