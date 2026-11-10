import {Badge} from "@/shared/components/badge/badge";
import {Heading} from "@/shared/components/heading/heading";

import {GuardStatusCard} from "../card/guard-status.card";

export const VetWelcomeModule = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 pb-4">
        <Badge color="primary" variant="opal">
          Médico Veterinario
          <div className="h-1.5 w-1.5 rounded-full bg-primary-200" />
          M.P. 4821
        </Badge>
        <Heading variant="title.2">Hola, Dr. Martínez Paz</Heading>
      </div>

      <GuardStatusCard />
    </div>
  );
};
