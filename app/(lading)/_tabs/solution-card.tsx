"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { FC } from "react";

const cards = [
    {
        description: "Uma solução perfeita para seu negócio!, A Lider WebFood é uma plataforma para o funcionamento perfeito de todo o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.",
        title: "WebFood",
        link: "",
        img: "/backgrounds/Web-food.png",
    },
    {
        description: "Uma solução perfeita para seu negócio!, A Lider WebFood é uma plataforma para o funcionamento perfeito de todo o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.",
        title: "WebTransporte",
        link: "",
        img: "/backgrounds/Web-transporte.jpg",
    },
    {
        description: "Uma solução perfeita para seu negócio!, A Lider WebFood é uma plataforma para o funcionamento perfeito de todo o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.",
        title: "WebDelivery",
        link: "",
        img: "/backgrounds/Web-delivery.jpg",
    },
    {
        description: "Uma solução perfeita para seu negócio!, A Lider WebFood é uma plataforma para o funcionamento perfeito de todo o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.",
        title: "WebPDV",
        link: "",
        img: "/backgrounds/Web-pdv.png",
    },
    {
        description: "Uma solução perfeita para seu negócio!, A Lider WebFood é uma plataforma para o funcionamento perfeito de todo o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.",
        title: "WebLider",
        link: "/Lider",
        img: "/backgrounds/Web-lider.jpeg",
    },
];

export const SolutionCard: FC = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <section className="w-full">
            <div className="mx-auto lg:max-w-6xl px-3">
                <Carousel
                orientation="horizontal"
                    className="w-full max-w-sm"
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {cards?.map((item, i) => (
                            <CarouselItem key={`solution_${item.title}-${i}`}>
                                <Link href={item.link}>
                                <div  className="flex w-96 bg-gradient-to-b rounded-md from-primaryLeader to-white flex-col gap-4 px-4 py-4 ">
                                    <div className="flex-1">
                                        <Image  alt="test" src={item.img} className="flex rounded-xl items-center justify-center w-full" width={180} height={120} />
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 px-2">
                                        <h1 className="text-muted-foreground text-2xl hover:text-black font-bold">{item.title}</h1>
                                        <Separator />
                                    </div>
                                    <p className="text-md font-normal text-muted-foreground">{item.description}</p>
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
    )
}
