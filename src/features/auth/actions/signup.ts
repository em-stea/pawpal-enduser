"use server";

import {APIError} from "better-auth";
import {headers} from "next/headers";

import {auth} from "@/app/auth";
import {actionClient} from "@/features/auth/lib/safe-action";
import {tutorFormSchema} from "@/features/auth/schemas/tutor-schema";
import {vetFormSchema} from "@/features/auth/schemas/vet-schema";

export const signupTutor = actionClient
  .inputSchema(tutorFormSchema)
  .action(async ({parsedInput}) => {
    try {
      const result = await auth.api.signUpEmail({
        body: {
          email: parsedInput.email,
          password: parsedInput.password,
          name: `${parsedInput.nombre} ${parsedInput.apellido}`,
        },
        headers: await headers(),
      });

      return {userId: result.user.id};
    } catch (error) {
      if (error instanceof APIError) {
        throw new Error(error.message || "No se pudo crear la cuenta");
      }

      throw error;
    }
  });

export const signupVet = actionClient.inputSchema(vetFormSchema).action(async ({parsedInput}) => {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        email: parsedInput.email,
        password: parsedInput.password,
        name: `${parsedInput.name} ${parsedInput.lastName}`,
      },
      headers: await headers(),
    });

    return {userId: result.user.id};
  } catch (error) {
    if (error instanceof APIError) {
      throw new Error(error.message || "No se pudo crear la cuenta");
    }

    throw error;
  }
});
