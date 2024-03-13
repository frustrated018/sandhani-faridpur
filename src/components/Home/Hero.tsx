import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  const sliderItems = [
    {
      src: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-white-pants-doing-exercise-sTTeaN4wwrU",
    },
    {
      src: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-white-pants-doing-exercise-sTTeaN4wwrU",
    },
    {
      src: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-white-pants-doing-exercise-sTTeaN4wwrU",
    },
    {
      src: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-white-pants-doing-exercise-sTTeaN4wwrU",
    },
    {
      src: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-white-pants-doing-exercise-sTTeaN4wwrU",
    },
    {
      src: "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-and-white-pants-doing-exercise-sTTeaN4wwrU",
    },
  ];
  return (
    <MaxWidthWrapper className="py-10">
      <section className="flex flex-col items-center space-y-4">
        <div className="max-w-[600px] text-center">
          <h1 className="font-cabinate-grotesk text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Give the gift of <span className="text-primary">life</span>
          </h1>
          <p className="mx-auto max-w-[500px] md:text-xl">
            Your donation can save lives. Join us in our mission to make a
            difference.
          </p>
        </div>

        <Carousel className="mx-auto w-full max-w-screen-lg">
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
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 left-1/2 mt-10">
            <CarouselPrevious className="size-10 sm:size-6" />
            <CarouselNext className="size-10 sm:size-6" />
          </div>
        </Carousel>

        {/* Carousel item */}
      </section>
    </MaxWidthWrapper>
  );
}
