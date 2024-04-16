"use client"
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const WebFood: FC = () => {
  const linkFood = "https://www.liderwebfood.com.br/#planos"
  return (
    <div className="flex w-full justify-between gap-5">
      <div className="flex w-8/12 px-10 flex-col items-start justify-center gap-4">
        <span className="text-muted-foreground font-medium text-5xl">
          WebFood
        </span>
        <Separator />
        <p className="text-md text-muted-foreground">
          Uma solução perfeita para seu negócio! A Lider WebFood é uma plataforma para o funcionamento perfeito de todo o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.          </p>
        <Link href={linkFood}>
          <Button variant="primaryLeader" size="lg" className="text-white">
            Agendar demonstração
          </Button>
        </Link>

      </div>
      <Image
        alt="imagem info"
        src="/backgrounds/background_PNG/Web-food.png"
        width={990}
        height={380}
      />
    </div>
  );
};