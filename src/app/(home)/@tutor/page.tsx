import {ActiveTreatmentCard} from "@/features/home/components/card/active-treatment.card";
import {OnCallServiceCard} from "@/features/home/components/card/on-call-service.card";
import {PetsCarousel} from "@/features/home/components/carousel/pets.carousel";
import {PETS_CAROUSEL_DATA} from "@/features/home/data/pet-carousel.data";
import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

const MOCK_NEAREST_CLINIC = {
  placeId: "mock-vet-24h",
  name: "Veterinaria Guardia Palermo",
  address: "Av. Santa Fe 3253, CABA",
  location: {latitude: -34.5875, longitude: -58.4108},
  distanceMeters: 850,
  distanceLabel: "850 m",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&origin=Av.+Santa+Fe+2450,+CABA&destination=-34.5875,-58.4108&travelmode=driving",
};

export default function TutorPage() {
  return (
    <div>
      <Container>
        <Heading variant="title.2">Hola, Juan.</Heading>
        <Text className="pt-1 pb-3 text-tertiary-400">Tus mascotas y cuidados al día</Text>
      </Container>

      <PetsCarousel pets={PETS_CAROUSEL_DATA} />

      <Container className="flex flex-col gap-6 pt-6">
        <OnCallServiceCard clinic={MOCK_NEAREST_CLINIC} />
        <ActiveTreatmentCard gender="Hembra" petName="Menta" />
      </Container>
    </div>
  );
}
