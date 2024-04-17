"use client";
import Image from "next/image";
import { FC } from "react";
import { SidebarItem } from "./siderbar-item";
import { LucideIcon } from "lucide-react";

type Props = {
  items: {
    label: string;
    icon: LucideIcon;
    href: string;
  }[];
};

const Sidebar: FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col h-full lg:w-[256px] left-0 top-0 px-4">
      <div className="pt-8 pl-4 pb-7 justify-start lg:flex md:flex-col items-center gap-x-3">
        <Image src="/logo_icon.png" alt="logo" width={60} height={60} />
        <h1 className="text-2xl font-extrabold text-secondaryLeader tracking-whide">
          Líder Automação
        </h1>
      </div>
      <div className="flex flex-col gap-y-2 flex-1">
        {items.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
