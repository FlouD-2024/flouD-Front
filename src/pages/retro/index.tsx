import React from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "..";
import Retro from "@/components/Retro/Retro";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
            <Retro/>
        </div>
      </ScreenBox>
    </main>
  );
};

export default index;