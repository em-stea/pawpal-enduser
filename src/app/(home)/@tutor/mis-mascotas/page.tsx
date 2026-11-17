import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

export default function MisMascotasPage() {
  return (
    <div>
      <Container>
        <Heading variant="title.2">Mis Mascotas</Heading>
        <Text className="pt-1 pb-3 text-tertiary-400">2 perfiles vinculados</Text>
      </Container>
    </div>
  );
}
