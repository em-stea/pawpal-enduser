import {Heading} from "@/shared/components/heading/heading";

import {ShortcutCard} from "../card/shortcut.card";
import {ShortcutCardData} from "../../data/shortcut-card-tutor.data";

export const QuickActionModule = ({data}: {data: ShortcutCardData[]}) => {
  return (
    <div>
      <Heading className="pb-2" variant="subtitle.3">
        Accesos Rápidos
      </Heading>
      <div className="grid grid-cols-2 gap-4">
        {data.map((card) => (
          <ShortcutCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};
