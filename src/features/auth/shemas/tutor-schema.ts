import {z} from "zod";

export const tutorFormSchema = z.object({
  nombre: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name title must be at most 32 characters."),
  apellido: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name title must be at most 32 characters."),
  telefono: z
    .string()
    .min(10, "Phone must be at least 10 characters.")
    .max(15, "Phone must be at most 15 characters."),
  email: z.email("Email must be a valid email address."),
});
