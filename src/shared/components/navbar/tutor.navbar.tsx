import {Bell} from "lucide-react";

import {Logo} from "../logo/logo";

interface TutorNavbarProps {
  hasNotifications?: boolean;
}

export const TutorNavbar = ({hasNotifications}: TutorNavbarProps) => {
  return (
    <div className="flex items-center justify-between px-2 py-4">
      <Logo size="sm" />
      <div className="relative">
        {hasNotifications && (
          <div className="absolute -top-1.25 right-0 h-2 w-2 rounded-full bg-secondary-500" />
        )}
        <Bell />
      </div>
    </div>
  );
};
