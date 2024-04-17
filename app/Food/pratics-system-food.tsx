"use client";
import { FC } from "react";
import { useState, useEffect } from "react";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";
import { CardComponentIcon } from "@/components/card-component-icon";
import {
  BarChartBig,
  CalendarDays,
  DollarSign,
  NotebookPen,
  Router,
  UserPlus,
} from "lucide-react";

const cardComponents = [
  {
    title: "Cardápio Virtual",
    icon: CalendarDays,
    description:
      "Cadastre, pontue, fidelize e premie seus clientes no seu programa de fidelidade. Aumente suas vendas. Fidelize e Relacione-se.",
  },
  {
    title: "Delivery Automatizado",
    icon: UserPlus,
    description:
      "Seja mais rápido. Aumente suas vendas e surpreenda seus clientes com a velocidade que só o Lider WebFood pode te dar.",
  },
  {
    title: "Rotas",
    icon: NotebookPen,
    description:
      "Calcule o valor das rotas de entrega. Entregas sempre no prazo e com mais agilidade.",
  },
  {
    title: "Fácil Acesso",
    icon: Router,
    description:
      "Seja mais produtivo e economize tempo. Acesse seu sistema de qualquer plataforma.",
  },
  {
    title: "Relatórios",
    icon: BarChartBig,
    description:
      "Obtenha as melhores informações sobre o seu estabelecimento. Informações precisas que apontam a melhor estratégia.",
  },
  {
    title: "Gestão de Clientes",
    icon: DollarSign,
    description:
      "Tenha dados dos clientes como: histórico de pedidos, pesquisa de satisfação e muito mais.",
  },
];

export const PraticsSystemFood: FC = () => {
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
    <div className="flex flex-col items-center justify-center gap-8 px-8 py-2 lg:px-10 lg:py-12">
      <Heading title="Veja na pratica como o sistema funciona!" />
      <Separator />
      <div
        className={`grid grid-cols-${
          isMobileOrTablet ? "1" : "3"
        } gap-8 justify-center lg:justify-start w-full max-w-screen-lg mx-auto`}
      >
        {cardComponents.map((item) => (
          <CardComponentIcon
            key={item.title}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
