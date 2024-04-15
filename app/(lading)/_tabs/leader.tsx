import Image from "next/image";
import { FC } from "react";

export const Leader: FC = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <span className="uppercase text-slate-700 font-medium text-4xl">
        Líder Automação. Há mais de 30 anos juntos com você!
      </span>
      <div>
        <p>
          Credibilidade e confiança de mais de 30 anos no mercado, somos
          especialistas em desenvolvimento de sistemas; Nosso objetivo é tornar
          o seu dia a dia mais simples e eficiente, com soluções simples e
          eficazes.
        </p>
        <p>
          Oferecemos soluções de automação para diversos segmentos. Contamos
          hoje com uma equipe técnica composta de consultores comerciais,
          programadores, analistas de sistemas e técnicos especializados em
          suporte e atendimento ao cliente.
        </p>
        <p>
          Buscamos sempre inovar em tecnologia, possuímos sistemas com
          armazenamento de dados em nuvem, aplicativos mobile para Android e
          IOS. Específico, simples e seguro.
        </p>
      </div>
      <Image
        alt="imagem info"
        src="/backgrounds/background_PNG/background_2.png"
        width={800}
        height={180}
      />
    </div>
  );
};
