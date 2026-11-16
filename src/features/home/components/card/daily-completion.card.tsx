import {CheckCheck} from "lucide-react";

import {Card, CardContent, CardFooter, CardHeader} from "@/shared/components/card/card";
import {Separator} from "@/shared/components/separator/separator";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";
import {Button} from "@/shared/components/button/button";

export const DailyCompletionCard = () => {
  return (
    <Card variant="dailyCompletion">
      <CardHeader>
        <div className="rounded-full border border-secondary-500/30 bg-secondary-500/10 p-4">
          <CheckCheck className="h-7 w-7 text-secondary-500" />
        </div>
        <Heading className="pt-4 pb-3 text-center" variant="subtitle.4">
          Completaste todos los turnos de hoy
        </Heading>
        <Text className="text-center text-tertiary-500">
          No tenés consultas pendientes por el resto del día. Podés revisar tu resumen o adelantar
          recetas.
        </Text>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex w-full flex-col items-center justify-center">
          <Heading variant="subtitle.3">4 Atendidos</Heading>
          <Text>100% completado</Text>
        </div>
        <Separator className="h-14" orientation="vertical" />
        <div className="flex w-full flex-col items-center justify-center">
          <Heading variant="subtitle.3">0 Pendientes</Heading>
          <Text>Sin demoras</Text>
        </div>
      </CardContent>
      <Separator />
      <CardFooter>
        <Button className="whitespace-nowrap" size="fullWidth" variant="secondary">
          Agenda mañana
        </Button>
        <Button className="whitespace-nowrap" size="fullWidth" variant="secondary">
          Ver resumen
        </Button>
      </CardFooter>
    </Card>
  );
};
