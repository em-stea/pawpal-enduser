import {Bell} from "lucide-react";

import {Role} from "@/app/(home)/layout";

import type {BadgeVariantProps} from "../badge/badge.styles";
import {Badge} from "../badge/badge";
import {Logo} from "../logo/logo";

interface NavbarProps {
  hasNotifications?: boolean;
  role: Role;
}

const roleBadgeOptions: Record<
  Role,
  {label: string; color: NonNullable<BadgeVariantProps["color"]>}
> = {
  vet: {
    label: "vet",
    color: "secondary",
  },
  tutor: {
    label: "tutor",
    color: "primary",
  },
};

export const Navbar = ({hasNotifications, role}: NavbarProps) => {
  const {label, color} = roleBadgeOptions[role];

  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="flex items-center gap-3">
        <Logo size="sm" />
        <Badge color={color} variant="opal">
          {label}
        </Badge>
      </div>
      <div className="relative">
        {hasNotifications && (
          <div className="absolute -top-1.25 right-0 h-2 w-2 rounded-full bg-secondary-500" />
        )}
        <Bell />
      </div>
    </div>
  );
};
