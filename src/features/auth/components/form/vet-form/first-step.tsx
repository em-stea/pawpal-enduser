import {LockKeyhole, LockKeyholeOpen, Mail, Phone, UserIcon} from "lucide-react";

import {InputField} from "@/shared/components/form/input-field.form";
import {InputPasswordField} from "@/shared/components/form/input-password-field.form";
import {CheckboxField} from "@/shared/components/form/checkbox-field.form";
import {Text} from "@/shared/components/text/text";

export const FirstStep = () => {
  return (
    <>
      <InputField icon={<UserIcon />} label="Nombre" name="name" placeholder="Jordan" />
      <InputField icon={<UserIcon />} label="Apellido" name="lastName" placeholder="Lee" />
      <InputField
        icon={<Mail />}
        label="Email"
        name="email"
        placeholder="name@example.com"
        type="email"
      />
      <InputField
        icon={<Phone />}
        label="Teléfono"
        name="phone"
        placeholder="(+54) 11-1234-5678"
        type="tel"
      />
      <InputPasswordField
        icon={<LockKeyholeOpen />}
        label="Contraseña"
        name="password"
        placeholder="********"
      />
      <InputPasswordField
        icon={<LockKeyhole />}
        label="Confirmar Contraseña"
        name="confirmPassword"
        placeholder="********"
      />
      <CheckboxField name="acceptTerms">
        <Text variant="body.1">
          Acepto los Términos y Condiciones y las Políticas de Privacidad.
        </Text>
      </CheckboxField>
    </>
  );
};
