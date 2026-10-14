import {redirect} from "next/navigation";

import {ROUTES} from "@/shared/lib/route";

export default function SignupPage() {
  redirect(ROUTES.signupTutor);
}
