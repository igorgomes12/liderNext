"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface ISolutionCardProps {
  cards: {
    description: string;
    title: string;
    link: string;
    img: string;
  }[];
}

export default function SolutionCard({ cards }: ISolutionCardProps) {
  return (
    <>
      <section className="w-80 md:w-auto flex py-4">
        <div className="mx-auto max-w-72 md:max-w-lg flex-nowrap text-ellipsis lg:max-w-lg xl:max-w-4xl px-3">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {cards.map((items, index) => (
                <CarouselItem key={index} className="basis-auto xl:basis-1/3">
                  <Link href={items.link}>
                    <div className="flex flex-wrap items-center hover:scale-95 rounded-xl justify-center mb-8 w-64 md:w-2/12 border-4 lg:w-6/12 xl:w-full sm:px-6 py-2  max-h-96 overflow-x-hidden shadow-lg shadow-muted-foreground">
                      <div className="flex">
                        <Image
                          alt="test"
                          src={items.img}
                          className="flex rounded-xl items-center justify-center w-56 md:w-96 lg:2/12 xl:w-full h-52"
                          width={180}
                          height={110}
                        />
                      </div>
                      <div className="flex flex-col items-center w-full justify-center">
                        <h1 className="text-md md:text-lg hover:text-muted-foreground lg:text-2xl font-bold py-2 px-2">
                          {items.title}
                        </h1>
                        <Separator />
                      </div>
                      <div className="flex flex-col py-2 items-center w-full justify-center">
                        <p className="overflow-hidden text-clip h-12 w-8/12 leading-4">
                          {items.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          </Carousel>
        </div>
      </section>
    </>
  );
}





