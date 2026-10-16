import {z} from "zod";

export const vetFormSchema = z
  .object({
    name: z
      .string()
      .min(5, "El nombre debe tener al menos 5 caracteres.")
      .max(32, "El nombre debe tener como máximo 32 caracteres."),
    lastName: z
      .string()
      .min(5, "El apellido debe tener al menos 5 caracteres.")
      .max(32, "El apellido debe tener como máximo 32 caracteres."),
    phone: z
      .string()
      .min(10, "El teléfono debe tener al menos 10 números.")
      .max(15, "El teléfono debe tener como máximo 15 números.")
      .regex(/^\d+$/, "El teléfono solo puede contener números."),
    email: z.email("Ingresá un email válido."),
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres."),
    confirmPassword: z.string().min(1, "Confirmá tu contraseña."),
    acceptTerms: z.boolean().refine((value) => value, {
      error: "Debés aceptar los términos y condiciones.",
    }),
    enrollment: z
      .string()
      .min(3, "Ingresá tu matrícula.")
      .max(6, "La matrícula debe tener como máximo 6 números.")
      .regex(/^\d+$/, "La matrícula solo puede contener números."),
    college: z
      .string()
      .min(1, "Ingresá el nombre del colegio.")
      .max(100, "El colegio debe tener como máximo 100 caracteres.")
      .regex(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/, "El colegio solo puede contener letras y espacios."),
    animalTypes: z.array(z.string()).min(1, "Selecciona al menos una opción"),
    specialty: z.array(z.string()).min(1, "Ingresa al menos una especialidad."),
    modality: z.string().min(1, "Selecciona una modalidad de atención."),
    clinicName: z.string(),
    clinicAddress: z.string(),
    clinicPhone: z.string(),
    coverageZones: z.array(z.string()),
    daysOfAttention: z.array(z.string()),
    fromBusinessHours: z.string(),
    toBusinessHours: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Las contraseñas no coinciden.",
  })
  .superRefine((data, ctx) => {
    const needsClinic = data.modality === "at_veterinary_clinic" || data.modality === "hybrid";
    const needsHome = data.modality === "at_home" || data.modality === "hybrid";

    if (needsClinic) {
      if (!data.clinicName.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["clinicName"],
          message: "Ingresa el nombre del centro o clínica.",
        });
      }
      if (!data.clinicAddress.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["clinicAddress"],
          message: "Ingresa la dirección de atención.",
        });
      }
      if (!/^\d{10,15}$/.test(data.clinicPhone)) {
        ctx.addIssue({
          code: "custom",
          path: ["clinicPhone"],
          message: "El teléfono debe tener entre 10 y 15 números.",
        });
      }
      if (!data.daysOfAttention.length) {
        ctx.addIssue({
          code: "custom",
          path: ["daysOfAttention"],
          message: "Selecciona al menos un día de atención.",
        });
      }
      if (!data.fromBusinessHours.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["fromBusinessHours"],
          message: "Ingresa el horario de atención.",
        });
      }
      if (!data.toBusinessHours.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["toBusinessHours"],
          message: "Ingresa el horario de atención.",
        });
      }
    }

    if (needsHome && data.coverageZones.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["coverageZones"],
        message: "Agrega al menos una zona de cobertura.",
      });
    }
  });

export type FormVetValues = z.output<typeof vetFormSchema>;
