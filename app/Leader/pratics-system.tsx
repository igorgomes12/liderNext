"use client"
import { FC, useEffect, useState } from "react"
import { Heading } from "../(lading)/_tabs/heading"
import { Separator } from "@/components/ui/separator"
import { CardComponentIcon } from "@/components/card-component-icon"
import { BarChart3, Barcode, Building, Calculator, LineChart, Newspaper } from "lucide-react"


const cardComponents = [
    { title: "Curva Abc de clientes e produtos", icon: LineChart, description: "Tenha um controle eficaz de seus clientes e produtos através desta fantástica ferramenta estratégica chamada curva abc" },
    { title: "Financeiro", icon: Calculator, description: "Controle seguro e simples, importação de arquivos, contas a pagar e a receber, emissão de boleto com baixa automática" },
    { title: "Controle de filiais centralizado", icon: Building, description: "Ganhe tempo em suas operações multi lojas controle mais de um CNPJ de um mesmo lugar" },
    { title: "Controle de produção", icon: BarChart3, description: "Saiba sua real margem, controlando sua produção" },
    { title: "Fiscal", icon: Newspaper, description: "Documentos fiscais de forma simples e automática através de importação e exportação de arquivos" },
    { title: "Movimento de Contas", icon: Barcode, description: "Controle suas movimentações bancárias de forma automática e centralizada" },
]

export const PraticsSystem: FC = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileOrTablet(window.innerWidth <= 1024);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
        <div className="flex flex-col items-center justify-center gap-8 px-8 py-2 lg:px-10 lg:py-12">
        <Heading title="Veja na pratica como o sistema funciona!" />
            <Separator />
            <div
        className={`grid grid-cols-${
          isMobileOrTablet ? "1" : "3"
        } gap-8 justify-center lg:justify-start w-full max-w-screen-lg mx-auto`}
      >
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