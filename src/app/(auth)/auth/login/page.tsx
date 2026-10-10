import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";
import {Pet} from "@/shared/components/icons/other/pet";
import {Logo} from "@/shared/components/logo/logo";
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/shared/components/tabs/tabs";
import {Text} from "@/shared/components/text/text";
import {Vet} from "@/shared/components/icons/other/vet";

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
            <TabsTrigger className="data-active:text-secondary-500" value="register-tutor">
              <Pet className="t mr-2" />
              Soy Tutor
            </TabsTrigger>
            <TabsTrigger className="data-active:text-secondary-500" value="register-vet">
              <Vet className="mr-2" />
              Soy Veterinario
            </TabsTrigger>
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
