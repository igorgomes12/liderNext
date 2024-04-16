"use client"
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const WebNotas: FC = () => {
  const linkNotas = "https://webnotas.liderautomacao.srv.br/#contato"
  return (
    <div className="flex w-full px-10 py-20 justify-between gap-8">
      <div className="flex w-10/12 flex-col items-start justify-center gap-4">
        <span className="text-muted-foreground font-medium text-5xl">
          WebNotas
        </span>
        <Separator />
        <p className="text-md text-muted-foreground">
          Deixe sua nota fiscal de serviço por nossa conta. O WebNotas é uma plataforma perfeita para o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.        </p>
        <Link href={linkNotas} >
          <Button variant="primaryLeader" size="lg" className="text-white">
            Agendar demonstração
          </Button>
        </Link>
      </div>
      <Image
        alt="imagem info"
        src="/backgrounds/background_PNG/Web-notas.png"
        width={990}
        height={380}
      />
    </div>
  );
};