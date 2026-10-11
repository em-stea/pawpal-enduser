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
        <div>
          <TutorForm />
        </div>
      </TabsContent>
      <TabsContent value="register-vet">
        <div>
          <Heading variant="subtitle.1">Soy Vet</Heading>
        </div>
      </TabsContent>
    </Tabs>
  );
}
