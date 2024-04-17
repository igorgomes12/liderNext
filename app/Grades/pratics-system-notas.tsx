"use client"
import { FC, useEffect, useState } from "react"
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
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileOrTablet(window.innerWidth <= 1024); // Define a largura limite para dispositivos móveis e tablets
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col w-full items-center justify-center gap-8 px-8 py-8">
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