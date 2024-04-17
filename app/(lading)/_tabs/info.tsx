"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

export const Info: FC = () => {
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
    <div className="flex items-center justify-center gap-8 py-28 lg:py-20 px-8 lg:px-8">
      <div className="flex md:w-8/12 lg:w-5/12 flex-col items-center justify-center gap-6 px-4 text-center">
        <span className="uppercase text-slate-700 font-medium text-3xl md:text-4xl lg:text-5xl">
          Seu Caminho entrelaçado com inovação!
        </span>
        <Separator />
        <p className="text-lg text-muted-foreground">
          Aprimore a eficiência da sua empresa conosco, o sucesso não é apenas
          uma opção, é uma garantia.
        </p>
        <Button variant="secondaryLeader" size="lg" className="text-white">
          Agendar demonstração
        </Button>
      </div>
      {!isMobileOrTablet && (
        <div className="hidden lg:flex justify-center items-center">
          <Image
            alt="imagem info"
            src="/backgrounds/grupo.jpg"
            width={800}
            height={180}
          />
        </div>
      )}
    </div>
  );
};
