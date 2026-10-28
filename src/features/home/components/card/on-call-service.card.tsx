"use client";

import {Navigation, Phone} from "lucide-react";
import Link from "next/link";

import {Button} from "@/shared/components/button/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/shared/components/card/card";
import {Text} from "@/shared/components/text/text";

interface Guardia24hsCardProps {
  clinic: {
    placeId: string;
    name: string;
    address: string;
    location: {
      latitude: number;
      longitude: number;
    };
    distanceMeters: number;
    distanceLabel: string;
    directionsUrl: string;
  };
}

export function OnCallServiceCard({clinic}: Guardia24hsCardProps) {
  return (
    <Card variant="onCallServiceCard">
      <CardHeader>
        <CardTitle>Guardia 24hs cercana</CardTitle>
      </CardHeader>
      <CardContent>
        <Text className="text-tertiary-400" variant="body.1">
          {clinic.name}
        </Text>

        <div className="h-1.5 w-1.5 rounded-full bg-tertiary-400" />

        <Text className="text-tertiary-400" variant="body.1">
          {clinic.distanceLabel}
        </Text>
      </CardContent>
      <CardFooter>
        <Button className="gap-2" size="fullWidth" variant="primary">
          <Phone />
          Llamar Guardia
        </Button>
        <Button asChild className="gap-2" size="fullWidth" variant="secondary">
          <Link href="" rel="noopener noreferrer" target="_blank">
            <Navigation className="size-4" />
            Cómo llegar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
