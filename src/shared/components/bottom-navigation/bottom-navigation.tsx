"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {Role} from "@/app/(home)/layout";
import {ROUTES} from "@/shared/lib/route";
import {cn} from "@/shared/lib/tw-merge/utils";

import {Container} from "../container/container";
import {Text} from "../text/text";

import {navigation} from "./bottom-navigation.data";

function isActivePath(pathname: string, href: string) {
  if (href === ROUTES.home) {
    return pathname === ROUTES.home;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export const BottomNavigation = ({role}: {role: Role}) => {
  const pathname = usePathname();
  const navigationItems = navigation.find((item) => item.role === role)?.items ?? [];

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-50 bg-tertiary-900 pt-5 pb-4"
    >
      <Container className="px-8">
        <div className="flex items-center justify-between">
          {navigationItems.map((item) => {
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
    </nav>
  );
};
