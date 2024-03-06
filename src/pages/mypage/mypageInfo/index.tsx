import React, { useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "@/pages/index";
import Mypage from "@/components/mypage/Mypage";
import MypageInfo from "@/components/mypage/MypageInfo";
import MypageInfoEdit from "@/components/mypage/MypageInfoEdit";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
          {
            isEdit ? <MypageInfoEdit setIsEdit={setIsEdit}/> : <MypageInfo setIsEdit={setIsEdit}/>
          }
        </div>
      </ScreenBox>
    </main>
  );
};

export default index;