"use client";

import {Plus} from "lucide-react";

import {Button} from "@/shared/components/button/button";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";

export const HeaderSection = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div>
        <Heading variant="title.2">Mis Mascotas</Heading>
        <Text className="text-tertiary-400">2 perfiles vinculados</Text>
      </div>

      <Button className="gap-1" variant="primary">
        <Plus size={17} strokeWidth={3} /> Nueva
      </Button>
    </div>
  );
};
