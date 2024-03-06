import React, { useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { useRecoilState } from "recoil";
import { ScreenBox } from "@/pages/index";
import Mypage from "@/components/mypage/Mypage";
import Friends from "@/components/mypage/Friends";
import UnFriend from "@/components/mypage/UnFriend";
import { friendModalOpenAtom } from "@/store/atom";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  // const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useRecoilState(friendModalOpenAtom);
  return (
    <>
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
          <Friends/>
          {
            isModalOpened && <UnFriend name={'밍구리퐁'} />
          }
        </div>
      </ScreenBox>
    </main>
    </>
  );
};

export default index;