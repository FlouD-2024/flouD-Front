import { Inter } from "next/font/google";
import { useState } from "react";
import style from "../styles/style.module.scss";
import Retro from "@/components/Retro";
import RetroDetail from "@/components/RetroDetail";
import Community from "@/components/Community";
import Mypage from "@/components/Mypage";
import Friends from "@/components/Friends";
import { css, styled } from "twin.macro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [color, setColor] = useState(false);
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Retro />
      <RetroDetail />
      <Community />
      <Mypage />
    </main>
  );
}

export const ScreenBox = styled.div(() => [
  css`
    width: 1200px;
    height: 850px;
    background-color: transparent;
    position: relative;
    border: 1px solid black;
    margin: auto;
  `,
]);
