import type {ShortcutCardData} from "../../data/shortcut-card-tutor.data";
import type {BadgeVariantProps} from "@/shared/components/badge/badge.styles";

import {Badge} from "@/shared/components/badge/badge";
import {Card, CardContent, CardHeader} from "@/shared/components/card/card";
import {Heading} from "@/shared/components/heading/heading";
import {Text} from "@/shared/components/text/text";
import {cn} from "@/shared/lib/tw-merge/utils";

export const ShortcutCard = ({data}: {data: ShortcutCardData}) => {
  const {title, description, icon, tag, badgeCount} = data;
  const Icon = icon.component;

  const badgeColor: Record<string, NonNullable<BadgeVariantProps["color"]>> = {
    "1 Alerta": "danger",
    Mañana: "muted",
  };

  return (
    <Card variant="shortcutCard">
      <CardHeader>
        <div
          className={cn(
            "relative flex h-12 w-12 min-w-12 items-center justify-center rounded-lg",
            icon.backgroundColor,
          )}
        >
          {badgeCount && (
            <div className="absolute -top-2 -right-5 z-10">
              <Badge className="rounded-full" color="dangerSolid" variant="bolder">
                {badgeCount}
              </Badge>
            </div>
          )}

          <Icon className={icon.color} />
        </div>
        {data.tag && (
          <Badge color={badgeColor[data.tag]} variant="bolder">
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
