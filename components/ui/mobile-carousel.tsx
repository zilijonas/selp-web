"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface MobileCarouselProps {
  children: React.ReactNode[];
  indicatorBubbles?: boolean;
  className?: string;
}

export default function MobileCarousel({
  children,
  indicatorBubbles = false,
  className,
}: MobileCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={cn("md:hidden -mx-4 overflow-visible", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: false,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {children.map((child, index) => (
            <CarouselItem key={index} className="">
              <div className="py-4 px-12">{child}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 carousel-nav-button" />
        <CarouselNext className="right-2 carousel-nav-button" />
      </Carousel>

      {indicatorBubbles && (
        <div className="flex justify-center space-x-2 mt-6">
          {children.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                index === current
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/20 text-primary hover:bg-primary/30"
              )}
              onClick={() => api?.scrollTo(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
