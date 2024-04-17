import { FC } from "react";
import { Heading } from "./heading";
import { Card } from "./card";
import { Separator } from "@/components/ui/separator";

export const Values: FC = () => {
  const items = [
    {
      title: "Visão",
      description:
        "Ser a melhor solução de automação para diversos segmentos. Ser o modelo de negócios mais competitivo e lucrativo do mercado nacional",
    },
    {
      title: "Missão",
      description:
        "Desenvolver soluções em software e serviços para diversos segmentos, buscando atender as necessidades de nossos clientes",
    },
    {
      title: "Valores",
      description:
        "Transparência, sinergia, parceria, respeito, reciprocidade, excelência nos serviços prestados e acima de tudo confiança",
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 lg:mb-10 lg:py-20 w-full items-center justify-center">
      <Heading title="Nossos valores" />
      <Separator />
      <div className="flex lg:flex-row flex-col gap-8 justify-between items-center">
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
