import {Container} from "@/shared/components/container/container";
import {TutorNavbar} from "@/shared/components/navbar/tutor.navbar";

export default function TutorLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Container>
        <TutorNavbar hasNotifications={true} />
      </Container>
      {children}
    </>
  );
}
