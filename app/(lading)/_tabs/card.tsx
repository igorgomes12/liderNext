import { FC } from "react";

type Props = {
  title: string;
  description: string;
};

export const Card: FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-primaryLeader hover:scale-105 transition-all shadow-md text-white flex flex-col text-center justify-center py-4 px-4 gap-y-2 w-80 rounded-md ">
      <h1 className="uppercase  text-xl font-bold">{title}</h1>
      <p className="text-md">{description}</p>
    </div>
  );
};
