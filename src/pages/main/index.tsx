import React from "react";
import { ScreenBox } from "..";
import MainComponents from "@/components/main/MainComponents";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
          <MainComponents />
        </div>
      </ScreenBox>
    </main>
  );
};

export default index;
