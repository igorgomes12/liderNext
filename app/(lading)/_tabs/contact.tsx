import { Separator } from "@/components/ui/separator";
import { PhoneCall } from "lucide-react";
import { FC } from "react";
import { ContactOptions } from "./contact-options";

type Props = {};

export const Contact: FC<Props> = ({}) => {
  return (
    <div className="flex flex-col w-96 mb-10 items-center justify-center gap-8">
      <span className="text-3xl font-bold text-muted-foreground uppercase">
        Quer saber mais? Solicite um contato
      </span>
      <Separator />
      <ContactOptions
        icon={PhoneCall}
        description="Av. Antonio Guimarães, 67 - Sala 1 - Itapebussu Guarapari - ES -
          Brasil"
      />
    </div>
  );
};
