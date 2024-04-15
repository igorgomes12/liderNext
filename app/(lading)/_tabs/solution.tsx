import { CarouselComponent } from "@/components/carousel-component";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { Heading } from "./heading";
export const Solution: FC = () => {
  return (
    <div className="flex bg-gradient-to-b from-primaryLeader w-full flex-col gap-8 items-center justify-center">
      <Heading invert title="Soluções Líder Automação" />

      <Separator />
      <p className="text-md text-white font-semibold">
        Softwares completos para otimizar o seu tempo e facilitar o seu dia a
        dia
      </p>
      <div className="mb-20">
        <CarouselComponent />
      </div>
    </div>
  );
};
