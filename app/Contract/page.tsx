"use client"
import { ContractLeader } from "@/components/contract-leader";
import { Heading } from "../(lading)/_tabs/heading";
import { Separator } from "@/components/ui/separator";

export default function Contract() {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-10">
            <Heading title="Faça parte da equipe. Envie seu currículo!" />
            <Separator />
            <ContractLeader />
        </div>
    );
}
