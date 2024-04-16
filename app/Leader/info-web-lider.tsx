"use client"

import Image from "next/image";
import { FC } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { Options } from "./options-lider";
import { Check } from "lucide-react";

export const InfoWebLider: FC = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-primaryLeader/80 to-slate-100 px-20 py-10 justify-between gap-2">
            <div className="flex w-6/12 px-8 py-8 items-start justify-center ">
                <Image
                    alt="imagem info"
                    src="/imagensOfProduct/Web_Lider.png"
                    width={800}
                    height={180}
                />
            </div>
                <div className="flex flex-col items-start w-6/12 justify-start gap-6 py-8 px-8">
                    <Heading title="WebLider" />
                    <Separator/>
                    <span className="text-md text-black">Sistema de gestão completo para o comercio varejista, prestadores de serviços e controle de produção toda a gestão de sua empresa com armazenamento de dados em nuvem</span>
                    <Options icon={Check} description="Aplicativo móvel disponível para Android e IOS"/>
                    <Options icon={Check} description="Relatórios gerenciais específicos"/>
                    <Options icon={Check} description="Controle financeiro integrado e automatizado"/>
                    <Options icon={Check} description="AControle de filiais centralizado"/>
                </div>
        </div>

    );
};