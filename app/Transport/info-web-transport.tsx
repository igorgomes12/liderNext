"use client"

import Image from "next/image";
import { FC } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Options } from "../Leader/options-lider";

const infoTransport = [
    { icon: Check, description: "Cadastre seus títulos e tenha total controle de vencimentos, baixas etc" },
    { icon: Check, description: "Separe sua contas a receber em títulos, cartões e cheques" },
    { icon: Check, description: "Transfira recursos entre contas e o caixa local com total rastreabilidade" },
    { icon: Check, description: "Controle de entregas fracionadas, mantendo o histórico do que já se encontra com seu cliente e o que ainda falta entregar" },
]

export const InfoWebTransport: FC = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-primaryLeader/80 to-slate-100 px-20 py-10 justify-between gap-2">
            <div className="flex w-6/12 px-8 py-8 items-start justify-center ">
                <Image
                    alt="imagem info"
                    src="/imagensOfProduct/Web-Transport.png"
                    width={800}
                    height={180}
                />
            </div>
            <div className="flex flex-col items-start w-6/12 justify-start gap-6 py-8 px-8">
                <Heading title="Sistema Completo para Transportadoras" />
                <Separator />
                <span className="text-md text-black">Além de controlar toda a sua frota, o WebLider Transporte tem um controle completo do financeiro da sua empresa</span>

                {infoTransport.map((item, i) => (
                    <Options key={`infoTransport_${item.description}-${i}`} icon={item.icon} description={item.description} />

                ))}

            </div>
        </div>

    );
};