"use client";

"use client";
import Image from "next/image";
import { FC } from "react";
import { useState, useEffect } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { Options } from "../Leader/options-lider";

const infoFood = [
  {
    icon: Check,
    description: "Plataforma online completa",
  },
  {
    icon: Check,
    description: "Cardápio digital",
  },
  {
    icon: Check,
    description: "Área de pedidos dinâmica",
  },
  {
    icon: Check,
    description: "Controle financeiro eficaz",
  },
];

export const InfoWebFood: FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1366); // Define a largura limite para dispositivos móveis e tablets
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full bg-gradient-to-b from-primaryLeader/80 to-slate-100 px-8 py-3 lg:px-20 lg:py-8 justify-between gap-2">
      {!isMobileOrTablet && (
        <div className="flex w-6/12 px-8 py-8 items-start justify-center">
          <Image
            alt="imagem info"
            src="/imagensOfProduct/Web-Food.png"
            width={800}
            height={180}
          />
        </div>
      )}
      <div
        className={`flex flex-col items-start w-full lg:w-6/12 justify-start gap-4 lg:gap-6 lg:py-8 px-8 ${
          isMobileOrTablet ? "lg:pl-8" : ""
        }`}
      >
        <Heading title="Aumente a produtividade de seu Restaurante" />
        <Separator />
        <span className="text-md text-black">
          Funcionalidades que ajudam você. Esses recursos e serviços impulsionam
          seus negócios e ajudam você a aumentar a sua renda.
        </span>
        {infoFood.map((item, i) => (
          <Options
            key={`infoFood_${item.icon}-${i}`}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
