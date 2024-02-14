import { Inter } from "next/font/google";
import { useState } from "react";
import { css, styled } from "twin.macro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [color, setColor] = useState(false);
  return (
    <main className=" min-h-screen flex flex-col justify-center">
      <ScreenBox>
        <div>구름 두기</div>
      </ScreenBox>
    </main>
  );
}

export const ScreenBox = styled.div(() => [
  css`
    width: 1440px;
    height: 950px;
    background-color: transparent;
    position: relative;
    border: 1px solid black;
    margin: auto;
  `,
]);
