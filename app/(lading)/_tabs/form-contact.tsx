"use client";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  nome: z.string(),
  email: z.string(),
  celular: z.string(),
});

export type TFormContactData = z.infer<typeof FormSchema>;

export const FormContact: FC = () => {
  const { register, handleSubmit } = useForm<TFormContactData>({
    resolver: zodResolver(FormSchema),
  });

  const submitForm = (data: TFormContactData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="grid w-full max-w-md gap-4">
        <Input
          required
          {...register("nome")}
          type="text"
          id="nome"
          placeholder="Nome"
        />
        <Input
          required
          {...register("email")}
          type="email"
          id="email"
          placeholder="E-mail"
        />
        <Input
          required
          {...register("celular")}
          type="tel"
          id="celular"
          placeholder="Celular"
        />
        <Textarea required placeholder="Mensagem" />
      </div>
      <Button
        type="submit"
        size="lg"
        variant="secondaryLeader"
        className="text-white"
      >
        Enviar
      </Button>
    </form>
  );
};
