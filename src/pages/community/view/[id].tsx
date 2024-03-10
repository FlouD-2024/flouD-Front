import React from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "@/pages";
import { CommunityText } from "..";
import CommunityBox from "@/components/community/CommunityBox";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const ViewPage = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <CommunityText isMain={false} />
        <CommunityBox isWrite={false} />
      </ScreenBox>
    </main>
  );
};

export default ViewPage;
