import React from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "..";
import ContentNav from "@/components/util/ContentNav";
import CommunityCompoWrapper from "@/components/community/CommunityCompoWrapper";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const CommunityText = () => {
  return (
    <>
      <div className="flex w-full h-[60px] justify-end items-center mb-7">
        <ContentNav />
      </div>
      <div className="font-bold tracking-[-6%] text-4xl mb-10">Community</div>
    </>
  );
};

const index = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <CommunityText />
        <CommunityCompoWrapper />
      </ScreenBox>
    </main>
  );
};

export default index;
