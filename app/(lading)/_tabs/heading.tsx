import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  title: string;
  invert?: boolean;
};
export const Heading: FC<Props> = ({ title, invert }) => {
  return (
    <h1 className={cn("font-semibold md:text-center m-4 text-4xl lg:text-5xl", invert && "text-white")}>
      {title}
    </h1>
  );
};
