"use client";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  ContactIcon,
  UserIcon,
  SquareCheckBigIcon,
  CircleFadingPlusIcon,
} from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { MobileMenu } from "./mobile-menu";

export const Header: FC = () => {
  const navItems = [
    { label: "A Líder", icon: HomeIcon, href: "/" },
    { label: "Soluções", icon: SquareCheckBigIcon, href: "/solucoes" },
    { label: "Represetante", icon: UserIcon, href: "/representante" },
    { label: "Contato", icon: ContactIcon, href: "/contato" },
    { label: "Contratação", icon: CircleFadingPlusIcon, href: "/contratacao" },
  ];

  return (
    <header className="h-20 w-full px-4 bg-primaryLeader">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7">
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        </div>
        <nav className="md:flex text-white hidden items-center">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm">
              {item.label}
            </Button>
          ))}
          <Button variant="secondaryLeader" className="ml-2">
            Agendar demonstração
          </Button>
        </nav>
        <div className="md:hidden block">
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
};
