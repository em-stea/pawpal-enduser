import {Carousel, CarouselContent, CarouselItem} from "@/shared/components/carousel/carousel";
import {cn} from "@/shared/lib/tw-merge/utils";

import {MyPetCard} from "../cards/my-pet.card";
import {MyPet} from "../../data/my-pets.data";

export const MyPetsCarousel = ({pets}: {pets: MyPet[]}) => {
  return (
    <Carousel className="pt-2" opts={{align: "start"}}>
      <CarouselContent>
        {pets.map((pet, index) => (
          <CarouselItem
            key={pet.id}
            className={cn(
              "basis-[80%]",
              index === 0 && "ml-4",
              index === pets.length - 1 && "mr-4",
            )}
          >
            <MyPetCard pet={pet} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
