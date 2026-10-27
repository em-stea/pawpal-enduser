import {PetsCarousel} from "@/features/home/components/carousel/pets.carousel";
import {PETS_CAROUSEL_DATA} from "@/features/home/data/pet-carousel.data";
import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

export default function TutorPage() {
  return (
    <div>
      <Container>
        <Heading variant="title.2">Hola, Juan.</Heading>
        <Text className="pt-1 pb-3 text-tertiary-500">Tus mascotas y cuidados al día</Text>
      </Container>

      <PetsCarousel pets={PETS_CAROUSEL_DATA} />
    </div>
  );
}
