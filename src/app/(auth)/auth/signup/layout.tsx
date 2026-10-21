import {FormHeader} from "@/features/auth/components/form-header/form-header";
import RoleTab from "@/features/auth/components/role-tab/role-tab";
import {Container} from "@/shared/components/container/container";

export default function SignupLayout({children}: {children: React.ReactNode}) {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <FormHeader
          description="Gestiona la salud y bienestar de tus mascotas o pacientes en un solo lugar."
          title="¡Crea tu cuenta!"
        />
        <RoleTab />
        {children}
      </div>
    </Container>
  );
}
