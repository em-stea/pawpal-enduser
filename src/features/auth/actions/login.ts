"use server";

import {APIError} from "better-auth";
import {headers} from "next/headers";

import {auth} from "@/app/auth";
import {actionClient} from "@/features/auth/lib/safe-action";

import {loginFormSchema} from "../schemas/login-schema";

export const loginUser = actionClient.inputSchema(loginFormSchema).action(async ({parsedInput}) => {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email: parsedInput.email,
        password: parsedInput.password,
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
