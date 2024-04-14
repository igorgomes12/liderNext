"use client";
import { FC } from "react";
import { LucideIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

type Props = {
  items: {
    label: string;
    icon: LucideIcon;
    href: string;
  }[];
};

export const MobileMenu: FC<Props> = ({ items }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 z-[100]">
        <Sidebar items={items} />
      </SheetContent>
    </Sheet>
  );
};
