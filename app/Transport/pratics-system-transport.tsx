"use client"

import { FC, useEffect, useState } from "react"
import { Heading } from "../(lading)/_tabs/heading"
import { Separator } from "@/components/ui/separator"
import { CardComponentIcon } from "@/components/card-component-icon"
import { BusFront, CalendarDays, DollarSign, Map, NotebookPen, Truck } from "lucide-react"


const cardComponents = [
    { title: "CT-e", icon: Truck, description: "Emissor simples e ágil para emissão do conhecimento de transporte eletrônico digital, para empresas de transporte de cargas" },
    { title: "MDF-e", icon: Map, description: "O documento para informar trajeto de veículos que ira transportar as cargas, com controle de origem e destino e informações de motorista e seguradora" },
    { title: "CTE-os", icon: BusFront, description: "Usado para empresas que fazem transporte de pessoas, como transporte escolar, transporte estadual e interestadual, atendendo a legislação do fisco" },
    { title: "NFS-e", icon: NotebookPen, description: "Emissor de documento digital, para empresas que emitem prestação de serviço ao município(ISS)" },
    { title: "Multas", icon: DollarSign, description: "Faça lançamentos de multas para controlar a sua frota de caminhões" },
    { title: "Vencimentos", icon: CalendarDays, description: "Controle o vencimento de cada documento de sua frota e de seus motoristas: CNH, Renavan etc" },
]

export const PraticsSystemTransport: FC = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 1024); // Define a largura limite para dispositivos móveis e tablets
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="flex flex-col w-full items-center justify-center gap-8 px-8 py-8">
            <Heading title="Veja na pratica como o sistema funciona!" />
            <Separator />
            <div
                className={`grid grid-cols-${isMobileOrTablet ? "1" : "3"
                    } gap-8 justify-center lg:justify-start w-full max-w-screen-lg mx-auto`}
            >
                {cardComponents.map((item) => (
                    <CardComponentIcon key={item.title} title={item.title}
                        icon={item.icon}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}