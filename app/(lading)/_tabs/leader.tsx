import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FC } from "react";

export const Leader: FC = () => {
  return (
    <div className="flex items-center justify-around w-full gap-6">
      <div className="flex w-full lg:w-8/12 flex-col gap-4 px-12 py-12">
        <span className="uppercase text-muted-foreground font-medium text-4xl">
          Líder Automação. Há mais de 30 anos juntos com você!
        </span>
        <Separator />
        <div className="flex flex-col py-4 px-2 gap-4">
          <p className="text-black text-md">
            Credibilidade e confiança de mais de 30 anos no mercado, somos
            especialistas em desenvolvimento de sistemas; Nosso objetivo é
            tornar o seu dia a dia mais simples e eficiente, com soluções
            simples e eficazes.
          </p>
          <p className="text-black text-md">
            Oferecemos soluções de automação para diversos segmentos. Contamos
            hoje com uma equipe técnica composta de consultores comerciais,
            programadores, analistas de sistemas e técnicos especializados em
            suporte e atendimento ao cliente.
          </p>
          <p className="text-black text-md">
            Buscamos sempre inovar em tecnologia, possuímos sistemas com
            armazenamento de dados em nuvem, aplicativos mobile para Android e
            IOS. Específico, simples e seguro.
          </p>
        </div>
      </div>
      <div className="hidden lg:flex w-4/12">
        {" "}
        {/* Adicionando classes para largura responsiva */}
        <Image
          alt="imagem info"
          src="/backgrounds/background_PNG/background_2.png"
          width={790}
          height={500}
        />
      </div>
    </div>
  );
};
