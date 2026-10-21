import {FormFooterLogin} from "@/features/auth/components/form-footer-login/form-footer-login";
import {FormHeader} from "@/features/auth/components/form-header/form-header";
import {LoginForm} from "@/features/auth/components/form/login-form/login-form";
import {Container} from "@/shared/components/container/container";

export default function LoginPage() {
  return (
    <Container>
      <FormHeader
        description="Accede a la gestión de salud integral de tus mascotas y pacientes"
        title="¡Hola de nuevo!"
      />
      <LoginForm />
      <FormFooterLogin />
    </Container>
  );
}
