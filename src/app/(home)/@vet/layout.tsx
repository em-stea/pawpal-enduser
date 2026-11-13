import {ShiftStatus, VetProvider} from "@/features/home/contexts/vet.context";

export default function VetSectionLayout({children}: {children: React.ReactNode}) {
  const initialShiftData = {
    shiftHours: {start: "09:00", end: "18:00"},
    shiftStatus: "completed" as ShiftStatus,
  };

  return <VetProvider {...initialShiftData}>{children}</VetProvider>;
}
