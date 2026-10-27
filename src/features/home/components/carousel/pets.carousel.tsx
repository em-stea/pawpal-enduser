import {Carousel, CarouselContent, CarouselItem} from "@/shared/components/carousel/carousel";
import {Container} from "@/shared/components/container/container";
import {Heading} from "@/shared/components/heading/heading";
import {PetPrint} from "@/shared/components/icons/other/pet-print";
import {Text} from "@/shared/components/text/text";
import {cn} from "@/shared/lib/tw-merge/utils";

import {PetCard} from "../card/pet.card";
import {Pet} from "../../types/pet.types";

interface PetsCarouselProps {
  pets: Pet[];
}

export const PetsCarousel = ({pets}: PetsCarouselProps) => {
  return (
    <>
      <Container className="flex flex-row items-center justify-between pt-4">
        <div className="flex flex-row items-center gap-3.5">
          <PetPrint className="h-6 w-auto text-secondary-500" />
          <Heading variant="subtitle.2">Mis Mascotas</Heading>
        </div>
        <Text variant="body.1">{pets.length} Registrados</Text>
      </Container>
      <Carousel className="pt-2" opts={{align: "start"}}>
        <CarouselContent>
          {pets.map((pet, index) => (
            <CarouselItem
              key={pet.id}
              className={cn(
                "basis-[85%]",
                index === 0 && "ml-4",
                index === pets.length - 1 && "mr-4",
              )}
            >
              <PetCard pet={pet} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
