"use client";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const FormSchema = z.object({
  nome: z.string()
    .min(2, { message: "O nome deve conter mais de 2 letras" })
    .max(50, {
      message: "O nome deve ser menor que 50 caracteres"
    }),
  email: z.string().min(10, { message: "O e-mail deve conter mais de 10 caracteres" })
    .max(50, {
      message: "O e-mail deve ser menor que 50 caracteres"
    }),
  celular: z.string().min(10, { message: "O numero deve conter mais de 10 caracteres" })
    .max(50, {
      message: "O nome deve ser menor que 50 caracteres"
    }),
    mensage:z.string().max(50, { message: "O nome deve ser menor que 50 caracteres"})
});

export type TFormContactData = z.infer<typeof FormSchema>;

export const FormContact: FC = () => {
  const form = useForm<TFormContactData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: "",
      celular: "",
      email: "",
      mensage:""
    }
  });

  const onSubmit = (data: TFormContactData) => {
    console.log(data);
  };

  return (
    <main className="flex items-center justify-center w-full gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-96 flex-col items-center justify-center gap-4"
        >
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input className="w-full" placeholder="Nome" {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Email" {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="celular"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Celular" {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensage"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                <Textarea placeholder="Mensagem" {...field} />                 
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            variant="secondaryLeader"
            className="text-white w-full"
          >
            Enviar
          </Button>
       
        </form>
      </Form>
    </main>
  );
};
