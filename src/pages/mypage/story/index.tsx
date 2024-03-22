import React from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "@/pages/index";
import StoryList from "@/components/mypage/StoryList";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
          <StoryList />
        </div>
      </ScreenBox>
    </main>
  );
};

export default index;
