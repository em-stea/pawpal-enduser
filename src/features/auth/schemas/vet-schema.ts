import {z} from "zod";

export const vetFormSchema = z
  .object({
    nombre: z
      .string()
      .min(5, "El nombre debe tener al menos 5 caracteres.")
      .max(32, "El nombre debe tener como máximo 32 caracteres."),
    apellido: z
      .string()
      .min(5, "El apellido debe tener al menos 5 caracteres.")
      .max(32, "El apellido debe tener como máximo 32 caracteres."),
    telefono: z
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
    matricula: z
      .string()
      .min(3, "Ingresá tu matrícula.")
      .max(6, "La matrícula debe tener como máximo 6 números.")
      .regex(/^\d+$/, "La matrícula solo puede contener números."),
    colegio: z
      .string()
      .min(1, "Ingresá el nombre del colegio.")
      .max(100, "El colegio debe tener como máximo 100 caracteres.")
      .regex(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/, "El colegio solo puede contener letras y espacios."),
    cobertura: z.array(z.string()).min(1, "Selecciona al menos una opción"),
    especialidad: z.array(z.string()).min(1, "Ingresa al menos una especialidad."),
    modalidad_atencion: z.string().min(1, "Selecciona una modalidad de atención."),
    clinic_name: z.string(),
    address: z.string(),
    coverage_zones: z.array(z.string()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Las contraseñas no coinciden.",
  })
  .superRefine((data, ctx) => {
    const needsClinic =
      data.modalidad_atencion === "at_veterinary_clinic" || data.modalidad_atencion === "hybrid";
    const needsHome = data.modalidad_atencion === "at_home" || data.modalidad_atencion === "hybrid";

    if (needsClinic) {
      if (!data.clinic_name.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["clinic_name"],
          message: "Ingresá el nombre del centro o clínica.",
        });
      }

      if (!data.address.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["address"],
          message: "Ingresá la dirección de atención.",
        });
      }
    }

    if (needsHome && data.coverage_zones.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["coverage_zones"],
        message: "Agregá al menos una zona de cobertura.",
      });
    }
  });

export type FormVetValues = z.output<typeof vetFormSchema>;
