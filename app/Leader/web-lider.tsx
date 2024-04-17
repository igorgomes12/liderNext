"use client"
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const WebLider: FC = () => {
    return (
      <div id="lider" className="flex w-full justify-center gap-2">
        <div className="flex w-96 lg:w-6/12 px-4 py-8 flex-col lg:items-start items-center justify-center gap-y-4">
          <span className="text-muted-foreground font-medium text-5xl">
           WebLider
          </span>
          <Separator />
          <p className="text-md text-muted-foreground">
          Sistema de gestão completo para o comercio varejista, prestadores de serviços e controle de produção toda a gestão de sua empresa com armazenamento de dados em nuvem
          </p>
          <Button variant="primaryLeader" size="lg" className="text-white">
            Agendar demonstração
          </Button>
        </div>
        <div className="hidden lg:flex">
        <Image
          alt="imagem info"
          src="/backgrounds/background_PNG/Web-lider.png"
          width={600}
          height={180}
        />
        </div>
      </div>
    );
  };