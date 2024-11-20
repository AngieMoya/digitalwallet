"use client";

import Button from "@/components/Button";
import Nav from "@/components/Nav";
import { useRouter } from "next/navigation";

export default function WalletHome() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <Nav />
      <div className="flex flex-col h-screen items-center justify-center w-full">
        <h1 className="pb-8 font-bold text-3xl text-indigo-900">
          Mi Billetera
        </h1>
        <h2 className="text-2xl font-semibold text-indigo-900">Saldo</h2>
        <p className="text-xl font-semibold">$0.00</p>
        <div className="flex p-8 justify-evenly w-2/4 min-w-min">
          <Button
            text={"Envía"}
            onClick={() => {
              router.push("/send");
            }}
          ></Button>
          <Button
            text={"Recarga"}
            onClick={() => {
              router.push("/reload");
            }}
          ></Button>
          <Button text={"Retira"}></Button>
        </div>
      </div>
    </div>
  );
}
