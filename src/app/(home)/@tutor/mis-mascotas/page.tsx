import {HeaderSection} from "@/features/mis-mascotas/components/header-section/header-section";
import {PetsSection} from "@/features/mis-mascotas/components/pets-section/pets-section";
import {MY_PETS_DATA} from "@/features/mis-mascotas/data/my-pets.data";
import {Container} from "@/shared/components/container/container";

export default function MisMascotasPage() {
  return (
    <>
      <Container>
        <HeaderSection />
      </Container>

      <PetsSection pets={MY_PETS_DATA} />
    </>
  );
}
