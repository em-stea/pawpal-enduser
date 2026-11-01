import {BottomNavigation} from "@/shared/components/bottom-navigation/bottom-navigation";

type Role = "vet" | "tutor";

function getRole(): Role {
  // TODO: replace with session/role endpoint
  return "tutor";
}

export default function HomeLayout({tutor, vet}: {tutor: React.ReactNode; vet: React.ReactNode}) {
  const role = getRole();

  return (
    <>
      <div className="pb-(--bottom-nav-height)">{role === "vet" ? vet : tutor}</div>
      <BottomNavigation />
    </>
  );
}
