import {MyPetsCarousel} from "@/features/mis-mascotas/components/carousel/my-pets.carousel";
import {HeaderSection} from "@/features/mis-mascotas/components/header-section/header-section";
import {MY_PETS_DATA} from "@/features/mis-mascotas/data/my-pets.data";
import {Container} from "@/shared/components/container/container";

export default function MisMascotasPage() {
  return (
    <>
      <Container>
        <HeaderSection />
      </Container>
      <MyPetsCarousel pets={MY_PETS_DATA} />
    </>
  );
}
