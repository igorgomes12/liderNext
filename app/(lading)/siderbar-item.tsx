"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Props = {
  label: string;
  icon: LucideIcon;
  href: string;
};

export const SidebarItem: FC<Props> = ({ label, icon: Icon, href }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "primaryLeader" : "ghost"}
      size="sm"
      className={cn("justify-start h-12", active && " text-white")}
      asChild
    >
      <Link href={href}>
        <Icon className="mr-5" />
        {label}
      </Link>
    </Button>
  );
};
