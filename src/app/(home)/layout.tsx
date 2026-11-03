import {BottomNavigation} from "@/shared/components/bottom-navigation/bottom-navigation";
import {Container} from "@/shared/components/container/container";
import {Navbar} from "@/shared/components/navbar/navbar";

export type Role = "vet" | "tutor";

function getRole(): Role {
  // TODO: replace with session/role endpoint
  return "vet";
}

export default function HomeLayout({tutor, vet}: {tutor: React.ReactNode; vet: React.ReactNode}) {
  const role = getRole();

  return (
    <>
      <Container>
        <Navbar hasNotifications={true} role={role} />
      </Container>
      <div className="pb-(--bottom-nav-height)">{role === "vet" ? vet : tutor}</div>
      <BottomNavigation />
    </>
  );
}
