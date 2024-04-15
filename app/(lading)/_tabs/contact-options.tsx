import { LucideIcon } from "lucide-react";
import { FC } from "react";

type Props = {
  icon: LucideIcon;
  description: string;
};

export const ContactOptions: FC<Props> = ({ icon: Icon, description }) => {
  return (
    <div className="flex ml-4 items-center justify-center gap-8 ">
      <div className="border border-blue-500 p-6 flex items-center justify-center rounded-full w-20 h-20">
        <Icon className="text-primaryLeader" />
      </div>
      <h2>{description}</h2>
    </div>
  );
};
