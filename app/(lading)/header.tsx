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
import Link from "next/link";

export const Header: FC = () => {
  const navItems = [
    { label: "A Líder", icon: HomeIcon, href: "/#lider" },
    { label: "Soluções", icon: SquareCheckBigIcon, href: "/#solucoes" },
    { label: "Representante", icon: UserIcon, href: "/#demonstracao" },
    { label: "Contato", icon: ContactIcon, href: "/#contato" },
    { label: "Contratação", icon: CircleFadingPlusIcon, href: "/Contract" },
  ];

  return (
    <header className="fixed z-30 h-20 w-full px-4 bg-primaryLeader">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={200} height={120} />
          </Link>
        </div>
        <nav className="md:flex text-white hidden items-center">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button  variant="ghost" size="sm">
                {item.label}
              </Button>
            </Link>
          ))}
          <Link href={"/#demonstracao"}>
          <Button variant="secondaryLeader" className="ml-2">
            Agendar demonstração
          </Button>
          </Link>
        </nav>
        <div className="md:hidden block">
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
};
