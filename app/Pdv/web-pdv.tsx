"use client"
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const WebPDV: FC = () => {
    return (
      <div className="flex w-full justify-center gap-2">
        <div className="flex w-full lg:w-6/12 px-10 py-10 flex-col items-center lg:items-start justify-center gap-4">
          <span className="text-muted-foreground font-medium text-5xl">
            WebPDV
          </span>
          <Separator />
          <p className="text-md lg:text-start text-center text-muted-foreground">
          Sistema de gestão completo para o comercio varejista, prestadores de serviços e controle de produção toda a gestão de sua empresa com armazenamento de dados em nuvem
          </p>
          <Button variant="primaryLeader" size="lg" className="text-white">
            Agendar demonstração
          </Button>
        </div>
        <div className="hidden lg:flex">
        <Image
          alt="imagem info"
          src="/backgrounds/background_PNG/background_1.png"
          width={700}
          height={180}
        />
        </div>
      </div>
    );
  };