"use client";

import Link from "next/link";

import {Button} from "@/shared/components/button/button";
import {Google} from "@/shared/components/icons";
import {Separator} from "@/shared/components/separator/separator";
import {Text} from "@/shared/components/text/text";
import {toast} from "@/shared/components/toast/toast";
import {authClient} from "@/shared/lib/auth-client";
import {ROUTES} from "@/shared/lib/route";

export const FormFooterLogin = () => {
  async function handleGoogleSignIn() {
    const {error} = await authClient.signIn.social({
      provider: "google",
      callbackURL: ROUTES.home,
    });

    if (error) {
      toast.add({
        type: "error",
        title: error.message ?? "No se pudo iniciar sesión con Google",
      });
    }
  }

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="my-6 flex w-full flex-row items-center justify-center">
          <Separator />
          <Text className="px-3 whitespace-nowrap text-tertiary-500" variant="eyebrow">
            o continúa con
          </Text>
          <Separator />
        </div>

        <Button
          className="gap-4"
          size="fullWidth"
          type="button"
          variant="ghost"
          onClick={() => {
            void handleGoogleSignIn();
          }}
        >
          <Google />
          Continue with Google
        </Button>
      </div>

      <div className="mt-4 flex flex-row items-center justify-center gap-2">
        <Text className="whitespace-nowrap" variant="body.3">
          ¿No tienes una cuenta aún?
        </Text>
        <Button asChild isHighlight size="intrinsic" variant="tertiary">
          <Link href={ROUTES.signupTutor}>Regístrate aquí</Link>
        </Button>
      </div>
    </div>
  );
};
