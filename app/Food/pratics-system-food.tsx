import { FC } from "react"
import { Heading } from "../(lading)/_tabs/heading"
import { Separator } from "@/components/ui/separator"
import { CardComponentIcon } from "@/components/card-component-icon"
import { BarChartBig,CalendarDays, DollarSign, NotebookPen, Router, UserPlus } from "lucide-react"


const cardComponents = [
    { title: "Cardápio Virtual", icon: CalendarDays, description: "Cadastre, pontue, fidelize e premie seus clientes no seu programa de fidelidade. Aumente suas vendas. Fidelize e Relacione-se." },
    { title: "Delivery Automatizado", icon: UserPlus, description: "Seja mais rápido.Aumente suas vendas e surpreenda seus clientes com a velocidade que só o Lider WebFood pode te dar." },
    { title: "Rotas", icon: NotebookPen, description: "Calcule o valor das rotas de entrega. Entregas sempre no prazo e com mais agilidade." },
    { title: "Fácil Acesso", icon: Router, description: "Seja mais produtivo e economize tempo. Acesse seu sistema de qualquer plataforma." },
    { title: "Relatórios", icon: BarChartBig, description: "Obtenha as melhores informações sobre o seu estabelecimento. Informações precisas que apontam a melhor estratégia." },
    { title: "Gestão de Clientes", icon: DollarSign, description: "Tenha dados dos clientes como: histórico de pedidos, pesquisa de satisfação e muito mais." },
]

export const PraticsSystemFood: FC = () => {
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