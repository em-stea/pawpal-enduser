"use client";

import {createContext, use} from "react";

export type ShiftStatus = "in_progress" | "completed";

export const ShiftStatus = {
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
} as const;

interface ShiftSchedule {
  start: string;
  end: string;
}

interface VetContextType {
  shiftHours: ShiftSchedule;
  shiftStatus: ShiftStatus;
}

const VetContext = createContext<VetContextType | undefined>(undefined);

export function VetProvider({
  children,
  shiftHours,
  shiftStatus,
}: {
  children: React.ReactNode;
  shiftHours: ShiftSchedule;
  shiftStatus: ShiftStatus;
}) {
  return <VetContext value={{shiftHours, shiftStatus}}>{children}</VetContext>;
}

export const useVet = () => {
  const context = use(VetContext);

  if (!context) throw new Error("useVet must be used within a VetProvider");

  return context;
};
