import {Carousel, CarouselContent, CarouselItem} from "@/shared/components/carousel/carousel";
import {cn} from "@/shared/lib/tw-merge/utils";

import {MyPetCard} from "../cards/my-pet.card";
import {MyPet} from "../../data/my-pets.data";

interface MyPetsCarouselProps {
  pets: MyPet[];
  selectedPetId: MyPet["id"];
  onSelectPet: (petId: MyPet["id"]) => void;
}

export const MyPetsCarousel = ({pets, selectedPetId, onSelectPet}: MyPetsCarouselProps) => {
  return (
    <Carousel className="pt-2" opts={{align: "start"}}>
      <CarouselContent>
        {pets.map((pet, index) => (
          <CarouselItem
            key={pet.id}
            className={cn(
              "basis-[60%]",
              "min-h-7rem",
              index === 0 && "ml-4",
              index === pets.length - 1 && "mr-4",
            )}
          >
            <MyPetCard
              isSelected={pet.id === selectedPetId}
              pet={pet}
              onSelect={() => onSelectPet(pet.id)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
