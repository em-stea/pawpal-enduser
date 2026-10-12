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
});
