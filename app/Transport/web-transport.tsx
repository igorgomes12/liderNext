"use client"
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const WebTransport: FC = () => {
    return (
        <div className="flex w-full justify-center gap-2">
            <div className="flex w-full lg:w-6/12 p-10 flex-col items-center lg:items-start justify-center gap-4">
                <span className="text-muted-foreground font-medium text-5xl">
                    WebTransporte
                </span>
                <Separator />
                <p className="text-md text-muted-foreground">
                    Sistema web para transportadoras Emissão de documentos fiscais, gestão de entregas, controle de veículos
                </p>
                <Button variant="primaryLeader" size="lg" className="text-white">
                    Agendar demonstração
                </Button>
            </div>
            <div className="lg:flex hidden">
            <Image
                alt="imagem info"
                src="/backgrounds/background_PNG/Web-transporte.png"
                width={990}
                height={380}
            />
            </div>
        </div>
    );
};