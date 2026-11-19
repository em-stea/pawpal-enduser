"use client";

import {useState} from "react";

import {Container} from "@/shared/components/container/container";

import {MyPet} from "../../data/my-pets.data";
import {MyPetsCarousel} from "../carousel/my-pets.carousel";
import {PetDetail} from "../pet-detail/pet-detail";

export const PetsSection = ({pets}: {pets: MyPet[]}) => {
  const [selectedPetId, setSelectedPetId] = useState<MyPet["id"]>(pets[0]?.id);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  return (
    <section className="flex flex-col gap-4">
      <MyPetsCarousel pets={pets} selectedPetId={selectedPetId} onSelectPet={setSelectedPetId} />

      {selectedPet && (
        <Container>
          <PetDetail pet={selectedPet} />
        </Container>
      )}
    </section>
  );
};
