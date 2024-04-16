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
    }[]
}

export default function SolutionCard({
    cards,
}: ISolutionCardProps) {
    return (
        <>
            <section className="w-full ">
                <div className="lg:max-w-6xl ">
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
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Link href={items.link}>
                                    <div className="flex flex-col hover:scale-105 rounded-xl shadow-xl hover:shadow-muted-foreground fill-transparent w-full h-full px-2 py-2 sm:p-6">
                                        <div className="flex">
                                            <Image alt="test" src={items.img} className="flex rounded-xl items-center justify-center w-full h-52" width={180} height={110} />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-md md:text-lg hover:text-muted-foreground lg:text-2xl font-bold py-2 px-2 ">{items.title}</h1>
                                            <Separator/>
                                        </div>
                                        <div className="mt-6 flex gap-3">
                                            <span className="inline-flex rounded-full">
                                                {items.description}
                                            </span>
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

