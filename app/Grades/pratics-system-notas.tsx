import { FC } from "react"
import { Heading } from "../(lading)/_tabs/heading"
import { Separator } from "@/components/ui/separator"
import { CardComponentIcon } from "@/components/card-component-icon"
import { Airplay, NotebookPen, Rocket} from "lucide-react"


const cardComponents = [
    { title: "Emissão de notas em longa escala", icon: NotebookPen, description: "Lançamentos práticos e simples de notas, envie uma talebela excel com todas as notas e deixe o resto conosco" },
    { title: "Lançamento de serviços", icon: Rocket, description: "Cadastre e visualize seus serviços para a prefeitura local mais tranquilamente" },
    { title: "Plataforma online completa", icon: Airplay, description: "visualize todas as notas e serviços em um só lugar" },    
]

export const PraticsSystemNotas: FC = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center gap-8 px-8 py-8">
            <Heading title="Veja na pratica como o sistema funciona!" />
            <Separator />
            <div className="grid grid-cols-3 items-center justify-center gap-4">
                {cardComponents.map((item) => (
                    <CardComponentIcon key={item.title} title={item.title}
                        icon={item.icon}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}