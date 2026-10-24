"use client";

import type {ComponentProps, KeyboardEvent} from "react";
import type {UseEmblaCarouselType} from "embla-carousel-react";

import useEmblaCarousel from "embla-carousel-react";
import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import {createContext, use, useEffect, useState} from "react";

import {Button} from "@/shared/components/button/button";
import {cn} from "@/shared/lib/tw-merge/utils";

import {
  carouselContentVariants,
  carouselItemVariants,
  carouselNextVariants,
  carouselPreviousVariants,
  carouselVariants,
  carouselViewportVariants,
} from "./carousel.styles";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = use(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("reInit", onSelect);
    api.on("select", onSelect);
    api.emit("select");

    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <CarouselContext
      value={{
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        aria-roledescription="carousel"
        className={cn(carouselVariants(), className)}
        data-slot="carousel"
        role="region"
        onKeyDownCapture={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    </CarouselContext>
  );
}

function CarouselContent({className, ...props}: ComponentProps<"div">) {
  const {carouselRef, orientation} = useCarousel();

  return (
    <div ref={carouselRef} className={carouselViewportVariants()} data-slot="carousel-content">
      <div className={cn(carouselContentVariants({orientation}), className)} {...props} />
    </div>
  );
}

function CarouselItem({className, ...props}: ComponentProps<"div">) {
  const {orientation} = useCarousel();

  return (
    <div
      aria-roledescription="slide"
      className={cn(carouselItemVariants({orientation}), className)}
      data-slot="carousel-item"
      role="group"
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "secondary",
  size = "sm",
  ...props
}: ComponentProps<typeof Button>) {
  const {orientation, scrollPrev, canScrollPrev} = useCarousel();

  return (
    <Button
      className={cn(carouselPreviousVariants({orientation}), className)}
      data-slot="carousel-previous"
      disabled={!canScrollPrev}
      size={size}
      variant={variant}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "secondary",
  size = "sm",
  ...props
}: ComponentProps<typeof Button>) {
  const {orientation, scrollNext, canScrollNext} = useCarousel();

  return (
    <Button
      className={cn(carouselNextVariants({orientation}), className)}
      data-slot="carousel-next"
      disabled={!canScrollNext}
      size={size}
      variant={variant}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
};
