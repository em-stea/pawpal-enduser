import {type LucideIcon, X} from "lucide-react";

import {Badge} from "@/shared/components/badge/badge";
import {Button} from "@/shared/components/button/button";

interface RemovableBadgeProps {
  value: string;
  onRemove: () => void;
  icon?: LucideIcon;
}

export function RemovableBadge({value, onRemove, icon: Icon}: RemovableBadgeProps) {
  return (
    <Badge className="gap-2" variant="default">
      {!!Icon && <Icon className="size-4" />}
      {value}
      <Button
        aria-label={`Quitar ${value}`}
        size="intrinsic"
        type="button"
        variant="icon"
        onClick={onRemove}
      >
        <X className="size-4.5 stroke-[2.5]" />
      </Button>
    </Badge>
  );
}
