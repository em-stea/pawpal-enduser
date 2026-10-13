import {Heading} from "@/shared/components/heading/heading";
import {Pet} from "@/shared/components/icons/other/pet";
import {Vet} from "@/shared/components/icons/other/vet";
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/shared/components/tabs/tabs";

import TutorForm from "../form/tutor-form";
import {VetStepper} from "../stepper/vet-stepper";

export default function RoleTab() {
  return (
    <Tabs>
      <TabsList variant="line">
        <TabsTrigger className="data-active:text-secondary-500" value="register-tutor">
          <Pet className="t mr-2" />
          Soy Tutor
        </TabsTrigger>
        <TabsTrigger className="data-active:text-secondary-500" value="register-vet">
          <Vet className="mr-2" />
          Soy Veterinario
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="register-tutor">
        <TutorForm />
      </TabsContent>
      <TabsContent value="register-vet">
        <VetStepper />
      </TabsContent>
    </Tabs>
  );
}
