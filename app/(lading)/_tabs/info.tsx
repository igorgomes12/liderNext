import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FC } from "react";

export const Info: FC = () => {
  return (
    <div className="flex w-full justify-center gap-8">
      <div className="flex w-96 flex-col items-center justify-center gap-6">
        <span className="uppercase  text-slate-700 font-medium text-5xl">
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
      <Image
        alt="imagem info"
        src="/backgrounds/grupo.jpg"
        width={800}
        height={180}
      />
    </div>
  );
};
