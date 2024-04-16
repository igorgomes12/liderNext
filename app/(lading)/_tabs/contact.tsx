import { Separator } from "@/components/ui/separator";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { FC } from "react";
import { ContactOptions } from "./contact-options";
import { FormContact } from "./form-contact";

type Props = {};

export const Contact: FC<Props> = ({ }) => {
  return (
    <div className="flex w-10/12 gap-4 py-20 px-10 items-center justify-between">
      <div className="flex flex-col w-96 mb-10 items-center justify-center gap-4">
        <span className="text-3xl font-bold text-muted-foreground uppercase">
          Quer saber mais? Solicite um contato
        </span>
        <Separator />
        <div className="flex flex-col w-full gap-4 py-4 px-4 items-start justify-start ">
          <ContactOptions
            icon={MapPin}
            description="Av. Antonio Guimarães, 67 - Sala 1 - Itapebussu Guarapari - ES -
          Brasil"
          />
          <ContactOptions
            icon={PhoneCall}
            description="(27) 3362-1477 / (27) 99960-5548"
          />
          <ContactOptions
            icon={Mail}
            description="vendas@liderautomacao.com"
          />
        </div>
      </div>
      <div className="w-80 flex flex-col gap-4">
        <FormContact />
      </div>
    </div>
  );
};
