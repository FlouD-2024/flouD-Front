import { ScreenBox } from "@/pages";
import React from "react";
import { CommunityText } from "..";
import CommunityBox from "@/components/community/CommunityBox";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const EditPage = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <CommunityText isMain={false} />
        <CommunityBox isWrite />
      </ScreenBox>
    </main>
  );
};

export default EditPage;
