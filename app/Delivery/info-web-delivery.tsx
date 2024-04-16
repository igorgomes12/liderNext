"use client"

import Image from "next/image";
import { FC } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Options } from "../Leader/options-lider";

const infoTransport = [
    { icon: Check, description: "Integração com aplicativo de pedidos online" },
    { icon: Check, description: "Cadastro de múltiplos endereços" },
    { icon: Check, description: "Histórico de pedidos por cliente" },
    { icon: Check, description: "Fácil visualização e controle de seus pedidos" },
]

export const InfoWebDelivery: FC = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-primaryLeader/80 to-slate-100 px-20 py-10 justify-between gap-2">
            <div className="flex w-6/12 px-8 py-8 items-start justify-center ">
                <Image
                    alt="imagem info"
                    src="/imagensOfProduct/Web-Delivery.png"
                    width={800}
                    height={180}
                />
            </div>
            <div className="flex flex-col items-start w-6/12 justify-start gap-6 py-8 px-8">
                <Heading title="Automatize pedidos em seu delivery e venda mais" />
                <Separator />
                <span className="text-md text-black">WebLider Delivery: controle seus pedidos de forma simples e prática</span>

                {infoTransport.map((item, i) => (
                    <Options key={`infoTransport_${item.description}-${i}`} icon={item.icon} description={item.description} />

                ))}

            </div>
        </div>

    );
};