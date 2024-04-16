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
        icon: Check, description: "Cardápio digital"
    },
    {
        icon: Check, description: "Àrea de de pedidos dinamica"
    },
    {
        icon: Check, description: "Controle financeiro eficaz"
    },
]

export const InfoWebFood: FC = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-primaryLeader/80 to-slate-100 px-20 py-10 justify-between gap-2">
            <div className="flex w-6/12 px-8 py-8 items-start justify-center ">
                <Image
                    alt="imagem info"
                    src="/imagensOfProduct/Web-Food.png"
                    width={800}
                    height={180}
                />
            </div>
            <div className="flex flex-col items-start w-6/12 justify-start gap-6 py-8 px-8">
                <Heading title="Aumente a produtividade de seu Restaurante" />
                <Separator />
                <span className="text-md text-black">Funcionalidades que ajudam você, Esses recursos e serviços impulsionam seus negócios e ajudam você a aumentar a sua renda.</span>
                {infoFood.map((item, i) => (
                    <Options key={`infoFood_${item.icon}-${i}`} icon={item.icon} description={item.description} />
                ))}
            </div>
        </div>

    );
};