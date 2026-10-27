"use client";

import type {ComponentProps} from "react";

import {createContext, use} from "react";

import {cn} from "@/shared/lib/tw-merge/utils";

import {
  cardActionVariants,
  cardContentVariants,
  cardDescriptionVariants,
  cardFooterVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardVariants,
  type CardVariantProps,
} from "./card.styles";

type CardVariant = Exclude<CardVariantProps["variant"], null | undefined>;

interface CardContextProps {
  variant: CardVariant;
}

const CardContext = createContext<CardContextProps>({variant: "default"});

function useCard() {
  return use(CardContext);
}

export type CardProps = ComponentProps<"div"> &
  Omit<CardVariantProps, "variant"> & {
    size?: "default" | "sm";
    variant?: CardVariant;
  };

function Card({className, size = "default", variant = "default", ...props}: CardProps) {
  return (
    <CardContext value={{variant}}>
      <div
        className={cn(cardVariants({variant}), className)}
        data-size={size}
        data-slot="card"
        data-variant={variant}
        {...props}
      />
    </CardContext>
  );
}

function CardHeader({className, ...props}: ComponentProps<"div">) {
  const {variant} = useCard();

  return (
    <div
      className={cn(cardHeaderVariants({variant}), className)}
      data-slot="card-header"
      {...props}
    />
  );
}

function CardTitle({className, ...props}: ComponentProps<"div">) {
  const {variant} = useCard();

  return (
    <div
      className={cn(cardTitleVariants({variant}), className)}
      data-slot="card-title"
      {...props}
    />
  );
}

function CardDescription({className, ...props}: ComponentProps<"div">) {
  return (
    <div
      className={cn(cardDescriptionVariants(), className)}
      data-slot="card-description"
      {...props}
    />
  );
}

function CardAction({className, ...props}: ComponentProps<"div">) {
  return <div className={cn(cardActionVariants(), className)} data-slot="card-action" {...props} />;
}

function CardContent({className, ...props}: ComponentProps<"div">) {
  return (
    <div className={cn(cardContentVariants(), className)} data-slot="card-content" {...props} />
  );
}

function CardFooter({className, ...props}: ComponentProps<"div">) {
  return <div className={cn(cardFooterVariants(), className)} data-slot="card-footer" {...props} />;
}

export {Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent};
