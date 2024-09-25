"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function Page() {
  return (

    <Carousel className="w-full h-screen"
      autoplay={2000}
      opts={{
        // dragFree: true,
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card>
                <CardContent className="h-screen sm:pl-[200px] flex flex-col items-start justify-center gap-4  bg-[url('/images/hero-img-prueba.webp')] bg-cover bg-right ">
                  <h2 className="max-w-[800px] text-4xl drop-shadow-md  font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam saepe.</h2>

                  <Button variant="secondary">Secondary</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex items-center justify-center " />
      <CarouselNext className="hidden sm:flex items-center justify-center  " />
    </Carousel>

  );
}