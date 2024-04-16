"use client"
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const WebDelivery: FC = () => {
    return (
        <div className="flex w-full justify-between gap-2">
            <div className="flex w-6/12 p-10 flex-col items-start justify-center gap-4">
                <span className="text-muted-foreground font-medium text-5xl">
                WebDelivery
                </span>
                <Separator />
                <p className="text-md text-muted-foreground">
                Sabemos que tempo é dinheiro em um delivery. Simplifique e agilize seus atendimentos cadastre mais de um endereço por cliente, adicione ou remova complementos de forma simples, você pode ganhar tempo repetindo o ultimo pedido do cliente, cadastro de valor por rota, entre outros recursos que fará você produzir e vender mais, solicite uma demonstração.                </p>
                <Button variant="primaryLeader" size="lg" className="text-white">
                    Agendar demonstração
                </Button>
            </div>
            <Image
                alt="imagem info"
                src="/backgrounds/background_PNG/Web-delivery.png"
                width={990}
                height={380}
            />
        </div>
    );
};