"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { clients } from "@/data/clients";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TrustedBy() {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <section id="dipercaya" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Dipercaya oleh Berbagai Perusahaan
        </p>
        <div className="mt-10 px-4 sm:px-12 mx-auto max-w-6xl">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {clients.map((client, i) => (
                <CarouselItem
                  key={`${client.name}-${i}`}
                  className="pl-6 basis-[60%] sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="group flex h-full flex-col items-center justify-between gap-4 rounded-xl bg-white p-5 border border-border/50">
                    <div className="flex flex-1 w-full items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        className="max-h-12 sm:max-h-16 max-w-[100px] sm:max-w-32 object-contain"
                      />
                    </div>
                    <span className="w-full text-center text-xs font-semibold text-muted-foreground/80 leading-snug">
                      {client.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
