"use client"

import Image from "next/image";
import { FC } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Options } from "../Leader/options-lider";

const infoFood = [
    {
        icon: Check, description: "Plataforma online completa"
    },
    {
        icon: Check, description: "Gerenciamento de notas"
    },
    {
        icon: Check, description: "Sistema de upload"
    },
    {
        icon: Check, description: "Lista de serviços"
    },
]

export const InfoWebNotas: FC = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-primaryLeader/80 to-white lg:px-20 lg:py-10 justify-center gap-2">
            <div className="hidden lg:flex w-full lg:w-6/12 px-8 py-8 items-start justify-center ">
                <Image
                    alt="imagem info"
                    src="/imagensOfProduct/Web_notas.png"
                    width={700}
                    height={180}
                />
            </div>
            <div className="flex flex-col items-start w-full lg:w-6/12 justify-start gap-4 lg:gap-6 lg:py-8 px-8">
                <Heading title="Nossa missão é desenvolver soluções eficazes para otimizar o seu negócio." />             
                <Separator />           
                <span className="text-md text-black">O WebNotas é uma plataforma perfeita para o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.</span>
                {infoFood.map((item, i) => (
                    <Options key={`infoFood_${item.icon}-${i}`} icon={item.icon} description={item.description} />
                ))}
            </div>
        </div>

    );
};