"use client";
import { FC } from "react";
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

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const DemonstrationSchema = z.object({
  name: z.string().nonempty("Favor preencher o campo!"),
  email: z.string(),
  whatsApp: z.string(),
  module: z.string(),
  city: z.string(),
  state: z.string(),
});

export type TDemonstrationData = z.infer<typeof DemonstrationSchema>;

export const Demonstration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDemonstrationData>({
    resolver: zodResolver(DemonstrationSchema),
    defaultValues: {
      city: "",
      email: "",
      module: "",
      name: "",
      state: "",
      whatsApp: "",
    },
  });

  const SubmitHandler = (data: TDemonstrationData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 py-8 items-center px-8 justify-around">
      <form onSubmit={handleSubmit(SubmitHandler)} className="w-full lg:w-80">
        <div className="flex flex-col gap-4">
          <span className="uppercase text-muted-foreground font-medium text-4xl">
            Solicite uma demonstração
          </span>
          <Separator />
          <p>
            Quer saber mais? Podemos atender o seu negócio da melhor forma,
            entre em contato!
          </p>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Nome"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="Whatsapp">Whatsapp</Label>
            <Input
              {...register("whatsApp")}
              type="text"
              id="Whatsapp"
              placeholder="Whatsapp"
            />
          </div>
          <div className="max-w-sm">
            <Select {...register("module")}>
              <SelectTrigger>
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
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              {...register("city")}
              type="text"
              id="cidade"
              placeholder="Cidade"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="estado">Estado</Label>
            <Input
              {...register("state")}
              type="text"
              id="estado"
              placeholder="Estado"
            />
          </div>
          <div className="flex flex-col lg:flex-row w-full max-w-sm gap-2">
            <Button
              variant="primaryLeader"
              size="lg"
              className="text-white w-full lg:w-auto"
            >
              Revenda
            </Button>
            <Button
              variant="primaryLeader"
              size="lg"
              className="text-white w-full lg:w-auto mt-2 lg:mt-0"
            >
              Representante
            </Button>
          </div>
          <Button
            type="submit"
            variant="secondaryLeader"
            size="lg"
            className="text-white w-full max-w-sm"
          >
            Enviar
          </Button>
        </div>
      </form>
      <div className="hidden lg:flex items-center justify-center">
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
