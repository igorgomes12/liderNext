import { FC } from "react";
import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon,
    title: string,
    description: string
}

export const CardComponentIcon: FC<Props> = ({ icon: Icon, title, description }) => {
    return (
        <div className="w-80 shadow-xl hover:scale-105 cursor-default hover:shadow-slate-500 rounded-md h-60 gap-4 flex flex-col items-center justify-center border-2">           
                <div className="flex px-6 gap-4 items-center w-full justify-center">
                    <div className="bg-primaryLeader items-center justify-center flex w-14 h-12 rounded-full">
                    <Icon className="text-white" size={24}/>
                    </div>
                    <h1 className="text-black w-56 text-md font-bold">{title}</h1>
                </div>
                <span className="w-56 h-36 text-md text-black text-start">
                    {description}
                </span>
        </div>
    )
}