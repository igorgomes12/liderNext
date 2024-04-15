import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FC } from "react";

export const Demonstration: FC = () => {
  return (

    <div className="flex w-full gap-8 py-8 items-center px-8 justify-around">
      <div className="w-80 flex mb-10 flex-col gap-4">
        <span className="uppercase text-muted-foreground font-medium text-4xl">
          Solicite uma demonstração
        </span>
        <Separator />
        <p>
          Quer saber mais? Podemos atender o seu negócio da melhor forma, entre
          em contato!
        </p>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Nome Completo</Label>
          <Input type="text" id="name" placeholder="Nome" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="Whatsapp">Whatsapp</Label>
          <Input type="text" id="Whatsapp" placeholder="Whatsapp" />
        </div>
        <Select>
          <SelectTrigger className="max-w-sm">
            <SelectValue placeholder="Selecionar" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="WebPDV">WebPDV</SelectItem>
              <SelectItem value="WebFood">WebFood</SelectItem>
              <SelectItem value="WebLider">WebLider</SelectItem>
              <SelectItem value="WebTransport">WebTransport</SelectItem>
              <SelectItem value="WebDelivery">WebDelivery</SelectItem>
              <SelectItem value="WebNotas">WebNotas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cidade">Cidade</Label>
          <Input type="text" id="cidade" placeholder="Cidade" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="estado">Estado</Label>
          <Input type="text" id="estado" placeholder="Estado" />
        </div>
        <div className="flex items-center w-full justify-center gap-2">
          <Button variant="primaryLeader" size="lg" className="text-white">
            Revenda
          </Button>
          <Button variant="primaryLeader" size="lg" className="text-white">
            Representante
          </Button>
        </div>

        <Button variant="secondaryLeader" size="lg" className="text-white">
          Enviar
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          alt="imagem info"
          src="/backgrounds/background_PNG/background_3.png"
          width={900}
          height={300}
          
        />
      </div>
    </div>
  );
};
