import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { FC } from "react"


export const DepositionsCardComponent: FC = () => {
    const items = [
        {
            image: "/avatar/tamires.png",
            description: "Uma empresa genuinamente capixaba de altíssima qualidade"
        },
        {
            image: "/avatar/Jonatas.png",
            description: "Uma empresa genuinamente capixaba de altíssima qualidade"
        },
        {
            image: "/avatar/Manuella.png",
            description: "Uma empresa genuinamente capixaba de altíssima qualidade"
        },
        {
            image: "/avatar/lauro-augusto.png",
            description: "Uma empresa genuinamente capixaba de altíssima qualidade"
        },        
        
    ]
    return (
        <Card>
            <CardContent className="flex w-full items-center justify-center gap-4">
                {items.map((item) => (
                    <div key={item.image} className="p-1 flex items-center justify-center gap-8">
                        <Image
                            alt="imagem info"
                            src={item.image}
                            width={100}
                            height={80}
                        />
                        <span className="text-sm w-60 text-start">
                            {item.description}
                        </span>
                    </div>

                ))}
            </CardContent>
        </Card>
    )
}