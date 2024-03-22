import React, { useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "@/pages/index";
import Friends from "@/components/mypage/Friends";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  // const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  return (
    <>
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
          <Friends/>
        </div>
      </ScreenBox>
    </main>
    </>
  );
};

export default index;