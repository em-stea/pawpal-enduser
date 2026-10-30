export type HealthState =
  | "upToDate"
  | "vaccinePending"
  | "vaccineOverdue"
  | "dewormingPending"
  | "checkupPending"
  | "inTreatment"
  | "noData";

export type PetGender = "Hembra" | "Macho";

export interface Pet {
  id: number;
  name: string;
  image: string;
  age: number;
  breed: string;
  gender: PetGender;
  size: string;
  weight: number;
  color: string;
  personality: string;
  temperament: string;
  healthState: HealthState;
}
