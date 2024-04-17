import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import CarouselComponent from "@/components/carousel-component";

const testimonials = [
  {
    image: "/avatar/tamires.png",
    description: "Uma empresa genuinamente capixaba de altíssima qualidade",
    name: "Tamires",
    function: "Colaboradora",
  },
  {
    image: "/avatar/Jonatas.png",
    description: "Uma empresa genuinamente capixaba de altíssima qualidade",
    name: "Jonatas",
    function: "CEO",
  },
  {
    image: "/avatar/Manuella.png",
    description: "Uma empresa genuinamente capixaba de altíssima qualidade",
    name: "Manuella",
    function: "Colaborador",
  },
  {
    image: "/avatar/lauro-augusto.png",
    description: "Uma empresa genuinamente capixaba de altíssima qualidade",
    name: "Lauro Augusto",
    function: "Geral Material",
  },
];

export const Depositions: FC = () => {
  return (
    <div className="flex flex-col bg-transparent mb-10 items-center justify-center lg:justify-around lg:flex-row gap-8">
      <div className="flex flex-col items-center justify-center gap-6 lg:w-1/2 w-full px-4">
        <h1 className="uppercase text-5xl font-bold text-muted-foreground text-center lg:text-left">
          Depoimentos
        </h1>
        <Separator />
        <div className="mb-20">
          <CarouselComponent values={testimonials} />
        </div>
      </div>
    </div>
  );
};
