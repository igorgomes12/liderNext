"use client";
import { FC } from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Image = dynamic(() => import("next/image"), { ssr: false });

export const WebFood: FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkFood = "https://www.liderwebfood.com.br/#planos";

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:justify-between lg:px-10 py-8 lg:py-0 gap-5">
      <div className="flex flex-col items-center justify-center gap-4 lg:w-8/12 lg:items-start">
        <span className="text-muted-foreground font-medium text-5xl">
          WebFood
        </span>
        <Separator />
        <p className="text-md text-muted-foreground text-center lg:text-left">
          Uma solução perfeita para seu negócio! A Lider WebFood é uma
          plataforma para o funcionamento perfeito de todo o seu negócio. Nosso
          objetivo é oferecer o melhor serviço para você e seus clientes.
        </p>
        <Link href={linkFood}>
          <Button variant="primaryLeader" size="lg" className="text-white">
            Agendar demonstração
          </Button>
        </Link>
      </div>
      {!isMobileOrTablet && (
        <div className="hidden lg:flex lg:items-center">
          <Image
            alt="imagem info"
            src="/backgrounds/background_PNG/Web-food.png"
            width={990}
            height={380}
          />
        </div>
      )}
    </div>
  );
};
