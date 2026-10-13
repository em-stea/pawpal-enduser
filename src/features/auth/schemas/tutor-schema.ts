import {z} from "zod";

export const tutorFormSchema = z
  .object({
    nombre: z
      .string()
      .min(5, "Name must be at least 5 characters.")
      .max(32, "Name must be at most 32 characters."),
    apellido: z
      .string()
      .min(5, "Last name must be at least 5 characters.")
      .max(32, "Last name must be at most 32 characters."),
    telefono: z
      .string()
      .min(10, "Phone must be at least 10 numbers.")
      .max(15, "Phone must be at most 15 numbers."),
    email: z.email("Email must be a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
    acceptTerms: z.boolean().refine((value) => value, {
      error: "You must accept the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Passwords do not match.",
  });
