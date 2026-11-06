export const AppointmentMode = {
  ONLINE: "online",
  PRESENCIAL: "presencial",
} as const;

export type AppointmentModeType = (typeof AppointmentMode)[keyof typeof AppointmentMode];
