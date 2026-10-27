export type HealthState =
  | "upToDate"
  | "vaccinePending"
  | "vaccineOverdue"
  | "dewormingPending"
  | "checkupPending"
  | "inTreatment"
  | "noData";

export interface Pet {
  id: number;
  name: string;
  image: string;
  age: number;
  breed: string;
  gender: string;
  size: string;
  weight: number;
  color: string;
  personality: string;
  temperament: string;
  healthState: HealthState;
}
