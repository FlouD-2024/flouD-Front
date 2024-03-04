import React from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "..";
import AboutFlouD from "@/components/aboutfloud/AboutFlouD";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
          <AboutFlouD/>
        </div>
      </ScreenBox>
    </main>
  );
};

export default index;
