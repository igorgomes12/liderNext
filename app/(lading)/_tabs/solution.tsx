import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { Heading } from "./heading";
import  SolutionCard  from "./solution-card";

const cards = [
    {
        description: "Uma solução perfeita para seu negócio!, A Lider WebFood é uma plataforma para o funcionamento perfeito de todo o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.",
        title: "WebFood",
        link: "/Food",
        img: "/backgrounds/Web-food.png",
    },
    {
        description: "Sistema web para transportadoras Emissão de documentos fiscais, gestão de entregas, controle de veículos",
        title: "WebTransporte",
        link: "/Transport",
        img: "/backgrounds/Web-transporte.jpg",
    },
    {
        description: "Sabemos que tempo é dinheiro em um delivery.  Simplifique e agilize seus atendimentos cadastre mais de um endereço por cliente, adicione ou remova complementos de forma simples, você pode ganhar tempo repetindo o ultimo pedido do cliente, cadastro de valor por rota, entre outros recursos que fará você produzir e vender mais, solicite uma demonstração.",
        title: "WebDelivery",
        link: "/Delivery",
        img: "/backgrounds/Web-delivery.jpg",
    },
    {
        description: "O WebLider PDV foi criado para realizar suas vendas de forma rápida e eficiente com simplicidade nas operações, possui controle total do seu caixa, vendas e pré-vendas diretas do balcão. Na versão para bares e restaurantes possui delivery com integração com iFood, controle de mesas e comandas e lançamentos via celular ou tablet, além de proporcionar segurança em todas as suas informações fiscais.",
        title: "WebPDV",
        link: "/Pdv",
        img: "/backgrounds/Web-pdv.png",
    },
    {
        description: "Sistema de gestão completo para o comercio varejista, prestadores de serviços e controle de produção toda a gestão de sua empresa com armazenamento de dados em nuvem",
        title: "WebLider",
        link: "/Leader",
        img: "/backgrounds/Web-lider.jpeg",
    },
    {
        description: "Deixe sua nota fiscal de serviço por nossa conta. O WebNotas é uma plataforma perfeita para o seu negócio. Nosso objetivo é oferecer o melhor serviço para você e seus clientes.",
        title: "WebNotas",
        link: "/Notas",
        img: "/backgrounds/Web-notas.png",
    },
];

  
export const Solution: FC = () => {
  return (
    <div className="flex p-6 bg-gradient-to-b from-primaryLeader w-full flex-col gap-7 items-center justify-center">
      <Heading invert title="Soluções Líder Automação" />
      <Separator />
      <p className="text-lg text-white font-semibold">
        Softwares completos para otimizar o seu tempo e facilitar o seu dia a dia
      </p> 
      <div className="flex items-center justify-center">
        <SolutionCard cards={cards} />       
      </div>     
    </div>
  );
};
