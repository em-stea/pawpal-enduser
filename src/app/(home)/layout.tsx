type Role = "vet" | "tutor";

function getRole(): Role {
  // TODO: replace with session/role endpoint
  return "tutor";
}

export default function HomeLayout({tutor, vet}: {tutor: React.ReactNode; vet: React.ReactNode}) {
  const role = getRole();

  return role === "vet" ? vet : tutor;
}
