import RoleTab from "@/features/auth/components/role-tab/role-tab";
import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";
import {Logo} from "@/shared/components/logo/logo";
import {Text} from "@/shared/components/text/text";

export default function LoginPage() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <Heading className="py-6" variant="title.2">
          ¡Crea tu cuenta!
        </Heading>
        <Text className="text-center" variant="body.1">
          Gestiona la salud y bienestar de tus mascotas o pacientes en un solo lugar.
        </Text>
        <RoleTab />
      </div>
    </Container>
  );
}
