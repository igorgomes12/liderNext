import Image from "next/image";
import { FC } from "react";
import { FooterItem } from "./footer-item";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="h-auto w-full bg-primaryLeader p-2 flex flex-col gap-y-8">
      <div className="flex items-center justify-center">
        <Image alt="Logo" src="/logo_icon.png" width={90} height={90} />
      </div>
      <div className="flex md:flex-row flex-col gap-y-10 max-w-screen-lg mx-auto md:gap-x-20 items-center justify-between">
        <FooterItem label="Redes Sociais">
          <p className="text-white text-sm">Copyright © Lider Automação 2023</p>
          <div className="flex items-center gap-x-2">
            <Button size="sm">
              <Link href="https://www.facebook.com/liderautomacaoguarapari/?fref=ts">
                <FacebookIcon size={24} />
              </Link>
            </Button>
            <Button size="sm">
              <Link href="https://www.instagram.com/liderautomacao.oficial/">
                <InstagramIcon size={24} />
              </Link>
            </Button>
            <Button size="sm">
              <Link href="https://www.youtube.com/channel/UCmN-Txnu9mgntNmmSM6WE6A/featured">
                <YoutubeIcon size={24} />
              </Link>
            </Button>
          </div>
        </FooterItem>
        <FooterItem label="Endereço">
          <p className="text-white text-sm">
            Av. Antonio Guimarães, 67 – Sala 1
          </p>
          <p className="text-white text-sm">
            Itapebussu - Guarapari – ES – Brasil
          </p>
          <p className="text-white text-sm">CEP: 29210-190</p>
        </FooterItem>
        <FooterItem label="Contato">
          <p className="text-white text-sm">Telefone: (27) 3362-1477</p>
          <p className="text-white text-sm">Whatsapp: (27) 99960-5548</p>
          <p className="text-white text-sm">
            E-Mail: vendas@liderautomacao.com
          </p>
        </FooterItem>
      </div>
    </footer>
  );
};
