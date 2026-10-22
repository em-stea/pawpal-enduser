import {headers} from "next/headers";
import {createSafeActionClient} from "next-safe-action";

import {auth} from "@/app/auth";

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    console.error("Action error:", e.message);

    return e.message;
  },
});

export const authActionClient = actionClient.use(async ({next}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  return next({ctx: {user: session.user, session}});
});
