import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { Heading } from "./heading";
import { SolutionCard } from "./solution-card";
  
export const Solution: FC = () => {
  return (
    <div className="flex p-6 bg-gradient-to-b from-primaryLeader w-full flex-col gap-7 items-center justify-center">
      <Heading invert title="Soluções Líder Automação" />
      <Separator />
      <p className="text-lg text-white font-semibold">
        Softwares completos para otimizar o seu tempo e facilitar o seu dia a dia
      </p>
      <div>
        <SolutionCard />
      </div>
    </div>
  );
};
