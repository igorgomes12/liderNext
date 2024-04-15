import { Separator } from "@/components/ui/separator"
import { FC } from "react"
import CarouselComponent from "@/components/carousel-component"
import Image from "next/image";

const testimonials = [
    {
        image: "/avatar/tamires.png",
        description: "Uma empresa genuinamente capixaba de altíssima qualidade",
        name:"Tamires",
        function:"Colaboradora"
    },
    {
        image: "/avatar/Jonatas.png",
        description: "Uma empresa genuinamente capixaba de altíssima qualidade",
        name:"Jonatas",
        function:"CEO"
    },
    {
        image: "/avatar/Manuella.png",
        description: "Uma empresa genuinamente capixaba de altíssima qualidade",
        name:"Manuella",
        function:"Colaborador"
    },
    {
        image: "/avatar/lauro-augusto.png",
        description: "Uma empresa genuinamente capixaba de altíssima qualidade",
        name:"Lauro Augusto",
        function:"Geral Material"
    },        
    
  ];

export const Depositions: FC = () => {
    return (
        <div className="flex bg-transparent mb-10 items-center justify-around gap-8">
            <div className="flex flex-col items-center justify-center gap-6 w-full">
                <h1 className="uppercase text-5xl font-bold text-muted-foreground">
                    Depoimentos
                </h1>
                <Separator/>
                <div className="mb-20">
        <CarouselComponent values={testimonials}  />
      </div>
            </div>
            {/* <Image
                alt="imagem info"
                src="/backgrounds/background_PNG/second-image.png"
                width={600}
                height={180}
            /> */}
        </div>
    )
}