import { FC } from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const FooterItem: FC<Props> = ({ label, children }) => {
  return (
    <div>
      <h1 className="text-white text-md font-semibold">{label}</h1>
      {children}
    </div>
  );
};
