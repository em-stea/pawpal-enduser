import {redirect} from "next/navigation";

import {auth} from "@/app/auth";
import {ROUTES} from "@/shared/lib/route";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect(ROUTES.login);
  }

  return <div>Home</div>;
}
