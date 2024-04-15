import { FC } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// import z from "zod"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form"



// const FormSchema = z.object({
//     nome: z
//         .string()
//         .min(10, {
//             message: "Necessario no minimo 3 caracteres",
//         })
//         .max(160, {
//             message: "Necessario no minimo 30 caracteres.",
//         }),
//     email: z.string(),
//     celular: z.number()
// })

export const FormContact: FC = () => {
    const values = [
        { placeholder: "Nome", id: 0, type:"text" },
        { placeholder: "E-mail", id: 1 , type: "email"},
        { placeholder: "Celular", id: 2, type:"phone" }
    ]

//     const { register, handleSubmit } = useForm<z.infer<typeof FormSchema>>({
//         resolver: zodResolver(FormSchema)
//     })

// const submitForm = (data:z.infer<typeof FormSchema>) => {
//     console.log(data)
// }

    return (
        <form action="">
        <div className="grid w-full max-w-sm items-center gap-4">
                {values.map((item) => (
                    <Input
                        required
                        key={item.id}
                        // {...register}z.infer<typeof FormSchema>
                        type={item.type}
                        id={item.placeholder}
                        placeholder={item.placeholder}
                    />
                ))}
                <Textarea placeholder="Mensagem" />
                <Button type="submit" size={"lg"} variant={"secondaryLeader"} className="text-white">Enviar</Button>
            </div>
        </form>
    )
}