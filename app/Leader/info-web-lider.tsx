"use client"

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { Options } from "./options-lider";
import { Check } from "lucide-react";

const infoLeader = [
    { icon: Check, description: "Aplicativo móvel disponível para Android e IOS" },
    { icon: Check, description: "Relatórios gerenciais específicos" },
    { icon: Check, description: "Controle financeiro integrado e automatizado" },
    { icon: Check, description: "Controle de filiais centralizado" }
]

export const InfoWebLider: FC = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 1366);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row w-full bg-gradient-to-b from-primaryLeader/80 to-slate-100 px-8 py-3 lg:px-20 lg:py-8 justify-between gap-2">
        {!isMobileOrTablet &&
                <div className="flex w-6/12 px-8 py-8 items-start justify-center">
                    <Image
                        alt="imagem info"
                        src="/imagensOfProduct/Web_Lider.png"
                        width={800}
                        height={180}
                    />
                </div>
            }

            <div
                className={`flex flex-col items-start w-full lg:w-6/12 justify-start gap-4 lg:gap-6 lg:py-8 px-8 ${isMobileOrTablet ? "lg:pl-8" : ""}`}
            >
                <Heading title="WebLider" />
                <Separator />
                <span className="text-md text-black">Sistema de gestão completo para o comercio varejista, prestadores de serviços e controle de produção toda a gestão de sua empresa com armazenamento de dados em nuvem</span>
                {infoLeader.map((item, i) => (
                    <Options key={`info_${item.description}-${i}`}
                        icon={item.icon}
                        description={item.description} />
                ))}
            </div>
        </div>

    );
};