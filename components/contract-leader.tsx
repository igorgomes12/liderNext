import { FC } from "react";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";


const formContractSchema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.number(),
    cellPhone: z.number(),
    pdf:z.string()
})

type TFormContractData = z.infer<typeof formContractSchema>

export const ContractLeader: FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TFormContractData>({
        resolver: zodResolver(formContractSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: 0,
            cellPhone: 0
        },
    })

    const submit = (data: TFormContractData) => {
        console.log(data)
    }

    return (
        <form className="flex flex-col w-full items-center justify-center gap-4 px-4 py-2" onSubmit={handleSubmit(submit)} action="">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome Completo</Label>
                <Input {...register("name")} type="text" id="name" placeholder="Nome" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input {...register("email")} type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Telefone">Telefone</Label>
                <Input {...register("phone")} type="text" id="Telefone" placeholder="Telefone" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Celular">Celular</Label>
                <Input {...register("cellPhone")} type="text" id="Celular" placeholder="Celular" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="PDF">Selecione um arquivo PDF</Label>
                <Input accept="application/pdf, application/vnd.ms-excel" {...register("pdf")} type="file" id="pdf" placeholder="pdf" />
            </div>
            <Button type="submit" size={"lg"} className="w-80 text-white text-lg" variant={"secondaryLeader"}>Enviar</Button>
        </form>

    )
}