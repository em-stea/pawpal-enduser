import {Carousel, CarouselContent, CarouselItem} from "@/shared/components/carousel/carousel";
import {cn} from "@/shared/lib/tw-merge/utils";

import {Pet} from "../../types/pet.types";
import {PetCard} from "../card/pet.card";

interface PetsCarouselProps {
  pets: Pet[];
}

export const PetsCarousel = ({pets}: PetsCarouselProps) => {
  return (
    <Carousel className="pt-4" opts={{align: "start"}}>
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
  );
};
