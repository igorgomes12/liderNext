import { LucideIcon } from "lucide-react";
import { FC } from "react";

type Props = {
icon: LucideIcon
description:string
}

export const Options:FC<Props> = ({icon:Icon, description}) =>{
    return(
        <div className="flex tems-center cursor-default hover:scale-105 justify-center gap-2">
            <div className= "bg-primaryLeader hover:shadow-xl shadow-muted-foreground flex items-center justify-center rounded-full w-10 h-8">
                <Icon className="text-white" size={28}/>
            </div>
            <span className="text-md text-start text-black">{description}</span>
        </div>
    )
}