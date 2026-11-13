import {CheckCheck} from "lucide-react";

import {Card, CardContent, CardHeader} from "@/shared/components/card/card";
import {Separator} from "@/shared/components/separator/separator";

export const DailyCompletionCard = () => {
  return (
    <Card variant="dailyCompletion">
      <CardHeader>
        <div className="rounded-full border border-secondary-500/30 bg-secondary-500/10 p-4">
          <CheckCheck className="h-7 w-7 text-secondary-500" />
        </div>
      </CardHeader>
      <CardContent>
        <Separator />
      </CardContent>
    </Card>
  );
};
