"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

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
  const form = useForm<TDemonstrationData>({
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
    <div id="demonstracao" className="flex flex-col lg:flex-row w-full gap-8 py-24 items-center px-8 justify-around">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(SubmitHandler)} className="w-full lg:w-80">
        <div className="flex flex-col gap-4">
          <span className="uppercase text-muted-foreground font-medium text-4xl">
            Solicite uma demonstração
          </span>
          <Separator />
          <p>
            Quer saber mais? Podemos atender o seu negócio da melhor forma,
            entre em contato!
          </p>
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome Completo" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="E-mail" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="whatsApp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="WhatsApp" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="module"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <Select onValueChange={field.onChange} >
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
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Cidade" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Estado" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
          <div className="flex flex-col lg:flex-row w-full gap-2">
            <Button
              variant="primaryLeader"
              size="lg"
              className="text-white w-full "
            >
              Revenda
            </Button>
            <Button
              variant="primaryLeader"
              size="lg"
              className="text-white w-full "
            >
              Representante
            </Button>
          </div>
          <Button
            type="submit"
            variant="secondaryLeader"
            size="lg"
            className="text-white w-full"
          >
            Enviar
          </Button>
        </div>
      </form>
      </Form>
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
