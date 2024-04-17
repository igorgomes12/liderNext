"use client"

import Image from "next/image";
import { FC } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Options } from "../Leader/options-lider";

export const InfoWebPDV: FC = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-primaryLeader/80 to-slate-100 px-20 py-10 justify-between gap-2">
            <div className="hidden lg:flex w-full lg:w-6/12 px-8 py-8 items-start justify-center">                
                <Image
                    alt="imagem info"
                    src="/imagensOfProduct/Web-PDV.png"
                    width={800}
                    height={180}
                />
            </div>
                <div className="flex flex-col items-start w-full lg:w-6/12 justify-start gap-6 lg:py-8 lg:px-8">
                    <Heading title="Melhor Opção para o seu caixa!" />
                    <Separator/>
                    <span className="text-md text-black">Faça venda com poucos cliques, simplifique seu processo, evite filas, tenha segurança nas informações do seu caixa, use WebLider PDV</span>
                    <Options icon={Check} description="Totalmente configurável para várias realidade de uso"/>
                    <Options icon={Check} description="Consulta de cliente e limite de crédito"/>
                    <Options icon={Check} description="Opção de pré-venda, orçamento, venda direta do balcão"/>
                    <Options icon={Check} description="Módulo restaurante (mesa, comanda, lançamento via tablet ou celular, comunicação com balança)"/>
                </div>
        </div>

    );
};