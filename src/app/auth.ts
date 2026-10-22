import {passkey} from "@better-auth/passkey";
import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {nextCookies} from "better-auth/next-js";

import {prisma} from "@/shared/lib/prisma";

const baseURL = process.env.AUTH_URL ?? "http://localhost:3000";

function getRelayingParty() {
  const url = new URL(baseURL);

  return {
    rpName: "PawPal",
    rpID: url.hostname,
    origin: url.origin,
  };
}

export const auth = betterAuth({
  baseURL,
  secret: process.env.AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },
  plugins: [passkey(getRelayingParty()), nextCookies()],
});
