"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {Vet} from "@/shared/components/icons/other/vet";
import {Tabs, TabsIndicator, TabsList, TabsTrigger} from "@/shared/components/tabs/tabs";
import {ROUTES} from "@/shared/lib/route";
import {PetPrint} from "@/shared/components/icons/other/pet-print";

export default function RoleTab() {
  const pathname = usePathname();
  const value = pathname.startsWith(ROUTES.signupVet) ? "vet" : "tutor";

  return (
    <Tabs value={value}>
      <TabsList variant="line">
        <TabsTrigger
          className="data-active:text-secondary-500"
          nativeButton={false}
          render={<Link href={ROUTES.signupTutor} />}
          value="tutor"
        >
          <PetPrint className="mr-2" />
          Soy Tutor
        </TabsTrigger>
        <TabsTrigger
          className="data-active:text-secondary-500"
          nativeButton={false}
          render={<Link href={ROUTES.signupVet} />}
          value="vet"
        >
          <Vet className="mr-2" />
          Soy Veterinario
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>
    </Tabs>
  );
}
