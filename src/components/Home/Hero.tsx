"use client";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const sliderItems = [
    {
      src: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-white-pants-doing-exercise-sTTeaN4wwrU",
    },
    {
      src: "https://source.unsplash.com/person-on-chair-donating-blood-X20g2GQsVdA",
    },
    {
      src: "https://source.unsplash.com/hands-formed-together-with-red-heart-paint-cAtzHUz7Z8g",
    },
    {
      src: "https://source.unsplash.com/grayscale-photo-of-man-in-t-shirt-and-watch-holding-smartphone-PMnbMcJeftk",
    },
    {
      src: "https://source.unsplash.com/person-in-white-long-sleeve-shirt-sitting-on-chair-2rNHliX6XHk",
    },
  ];

  const plugin = React.useRef(Autoplay({ delay: 3500 }));

  return (
    <MaxWidthWrapper className="py-10">
      <section className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="max-w-[600px] text-center">
          <h1 className="font-cabinate-grotesk text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Give the gift of <span className="text-primary">life</span>
          </h1>
          <p className="mx-auto max-w-[500px] md:text-xl">
            Your donation can save lives. Join us in our mission to make a
            difference.
          </p>
        </div>

        <Carousel
          className="mx-auto w-full max-w-screen-lg md:col-span-1 xl:col-span-2"
          opts={{ loop: true }}
          plugins={[plugin.current]}
        >
          <CarouselContent className="pb-10">
            {sliderItems.map((item, idx) => (
              <CarouselItem key={item.src + idx}>
                <div className="mx-auto w-full max-w-3xl">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      alt="Blood Drive"
                      className="object-cover object-center"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={item.src}
                      priority={false}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 left-1/2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        {/* Carousel item */}
      </section>
    </MaxWidthWrapper>
  );
}
