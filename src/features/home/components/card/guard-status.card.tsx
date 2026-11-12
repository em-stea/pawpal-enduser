"use client";

import {useState} from "react";

import {Card, CardContent, CardFooter} from "@/shared/components/card/card";
import {Switch} from "@/shared/components/switch/switch";
import {Text} from "@/shared/components/text/text";

export const GuardStatusCard = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Card variant="guardStatusCard">
      <CardContent>
        <Text variant="body.2">Disponible para guardia</Text>
        <Text className="text-secondary-400">Consultas & Urgencias activas</Text>
      </CardContent>
      <CardFooter>
        <Switch checked={checked} onCheckedChange={setChecked} />
      </CardFooter>
    </Card>
  );
};
