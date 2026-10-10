"use client";

import type {VariantProps} from "class-variance-authority";

import {Tabs as TabsPrimitive} from "@base-ui/react/tabs";
import {cn} from "cn";

import {
  tabsContentVariants,
  tabsIndicatorVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants,
} from "./tabs.styles";

function Tabs({className, orientation = "horizontal", ...props}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      className={cn(tabsVariants(), className)}
      data-slot="tabs"
      orientation={orientation}
      {...props}
    />
  );
}

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      className={cn(tabsListVariants({variant}), className)}
      data-slot="tabs-list"
      data-variant={variant}
      {...props}
    />
  );
}

function TabsTrigger({className, ...props}: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      className={cn(tabsTriggerVariants(), className)}
      data-slot="tabs-trigger"
      {...props}
    />
  );
}

function TabsIndicator({className, ...props}: TabsPrimitive.Indicator.Props) {
  return (
    <TabsPrimitive.Indicator
      className={cn(tabsIndicatorVariants(), className)}
      data-slot="tabs-indicator"
      {...props}
    />
  );
}

function TabsContent({className, ...props}: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      className={cn(tabsContentVariants(), className)}
      data-slot="tabs-content"
      {...props}
    />
  );
}

export {Tabs, TabsContent, TabsList, tabsListVariants, TabsTrigger, TabsIndicator};
