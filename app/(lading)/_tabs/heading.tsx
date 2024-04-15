import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  title: string;
  invert?: boolean;
};
export const Heading: FC<Props> = ({ title, invert }) => {
  return (
    <h1 className={cn("font-bold text-5xl", invert && "text-white")}>
      {title}
    </h1>
  );
};
