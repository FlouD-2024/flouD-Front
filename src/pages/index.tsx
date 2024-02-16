import Image from "next/image";
import { Inter } from "next/font/google";
import tw, { css, styled } from "twin.macro";
import { useState } from "react";
import style from "../styles/style.module.scss";
import Retro from "../components/Retro.tsx"
import RetroDetail from "@/components/RetroDetail";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [color, setColor] = useState(false);
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <Retro/>
    <RetroDetail/>
    </main>
  );
}

const ChangeButton = styled.button(({ hasTrue }: { hasTrue: boolean }) => [
  tw`w-24 h-20`,
  css`
    border-radius: 20px;
  `,
  hasTrue ? tw`bg-red-400` : tw`bg-blue-400`,
]);
