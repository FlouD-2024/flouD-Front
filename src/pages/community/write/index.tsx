import React from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "@/pages";
import { CommunityText } from "..";
import { CommunityBox } from "../edit/[id]";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <CommunityText isMain={false} />
        <CommunityBox />
      </ScreenBox>
    </main>
  );
};

export default index;
