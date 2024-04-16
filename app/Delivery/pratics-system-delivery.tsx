import { FC } from "react"
import { Heading } from "../(lading)/_tabs/heading"
import { Separator } from "@/components/ui/separator"
import { CardComponentIcon } from "@/components/card-component-icon"
import { Bike, Bolt, MapPin, Pen, Printer, RotateCw } from "lucide-react"


const cardComponents = [
    { title: "Cadastro com vários endereços", icon: MapPin, description: "Permita a facilidade do seu cliente pedir de vários locais" },
    { title: "Adicionar ou Remover completmentos", icon:Bolt, description: "Customização de pedidos de forma simples e usual" },
    { title: "Repetir Pedido", icon: RotateCw, description: "Ganhe tempo no atendimento refazendo um último pedido" },
    { title: "Disparo de impressão cozinha / balcão", icon: Printer, description: "Defina onde você quer que a produção de seus produtos seja impresso" },
    { title: "Acompanhamento dos pedidos", icon: Pen, description: "Visualize de forma simplificada todo o processo de seus pedidos" },
    { title: "Entregador e Rotas", icon: Bike, description: "Calcule valor de rotas de entrega e gerencie comissão dos entregadores" },
]

export const PraticsSystemDelivery: FC = () => {
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