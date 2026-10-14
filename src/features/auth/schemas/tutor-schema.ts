import {z} from "zod";

export const tutorFormSchema = z
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Las contraseñas no coinciden.",
  });
