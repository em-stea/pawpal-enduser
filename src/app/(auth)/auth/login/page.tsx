import {AppWindowIcon} from "lucide-react";

import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";
import {Logo} from "@/shared/components/logo/logo";
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/shared/components/tabs/tabs";
import {Text} from "@/shared/components/text/text";

export default function LoginPage() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <Heading className="py-6" variant="title.1">
          ¡Crea tu cuenta!
        </Heading>
        <Text className="text-center" variant="body.1">
          Gestiona la salud y bienestar de tus mascotas o pacientes en un solo lugar.
        </Text>
        <Tabs>
          <TabsList variant="line">
            <TabsTrigger value="register-tutor">
              <AppWindowIcon />
              Soy Tutor
            </TabsTrigger>
            <TabsTrigger value="register-vet">Soy Veterinario</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent value="register-tutor">
            <div>
              <Heading variant="title.1">Soy Tutor</Heading>
            </div>
          </TabsContent>
          <TabsContent value="register-vet">
            <div>
              <Heading variant="title.1">Soy Vet</Heading>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}
