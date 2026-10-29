"use client";

import {Calendar, Hospital, House, type LucideIcon, PawPrint, User} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {ROUTES} from "@/shared/lib/route";
import {cn} from "@/shared/lib/tw-merge/utils";

import {Container} from "../container/container";
import {Text} from "../text/text";

const navigation: {label: string; href: string; icon: LucideIcon}[] = [
  {
    label: "Home",
    href: ROUTES.home,
    icon: House,
  },
  {
    label: "Mis Mascotas",
    href: ROUTES.misMascotas,
    icon: PawPrint,
  },
  {
    label: "Turnos",
    href: ROUTES.turnos,
    icon: Calendar,
  },
  {
    label: "Clínicas",
    href: ROUTES.clinicas,
    icon: Hospital,
  },
  {
    label: "Perfil",
    href: ROUTES.perfil,
    icon: User,
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === ROUTES.home) {
    return pathname === ROUTES.home;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export const BottomNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="fixed right-0 bottom-0 left-0 pt-5 pb-4 shadow-[0_-4px_10px_var(--color-tertiary-850)]">
      <Container className="px-8">
        <div className="flex items-center justify-between">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link key={item.label} href={item.href}>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Icon className={cn(isActive && "stroke-secondary-500")} />
                  <Text className={cn(isActive && "text-secondary-500")} variant="caption.2">
                    {item.label}
                  </Text>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
