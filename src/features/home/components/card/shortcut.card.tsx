import type {ShortcutCardData} from "../../data/shortcut-card";

import {Badge} from "@/shared/components/badge/badge";
import {Card, CardContent, CardHeader} from "@/shared/components/card/card";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";
import {cn} from "@/shared/lib/tw-merge/utils";

export const ShortcutCard = ({data}: {data: ShortcutCardData}) => {
  const {title, description, icon, tag} = data;
  const Icon = icon.component;

  const badgeColor = {
    "1 Alerta": {
      bgColor: "bg-red-600/30",
      textColor: "text-red-200",
    },
    Mañana: {bgColor: "bg-tertiary-600/30", textColor: "text-tertiary-200"},
  };

  return (
    <Card variant="shortcutCard">
      <CardHeader>
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg",
            icon.backgroundColor,
          )}
        >
          <Icon className={icon.color} />
        </div>
        {data.tag && (
          <Badge
            className={cn(badgeColor[data.tag].bgColor, badgeColor[data.tag].textColor)}
            variant="bolder"
          >
            {tag}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <Heading variant="subtitle.4">{title}</Heading>
        <Text className="text-tertiary-400" variant="body.1">
          {description}
        </Text>
      </CardContent>
    </Card>
  );
};
