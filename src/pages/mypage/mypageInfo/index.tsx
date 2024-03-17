import React, { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "@/pages/index";
import MypageInfo from "@/components/mypage/MypageInfo";
import MypageInfoEdit from "@/components/mypage/MypageInfoEdit";
import { GoalListItem } from "@/types/myPageType";
import { getUserInfo } from "@/apis/mypage/mypage";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const [goallist, setGoallist] = useState<GoalListItem[]>([]);
  const [introduction, setIntroduction] = useState<string>("");
  useEffect(()=>{
      getUserInfo().then(data=>{
          setNickname(data.nickname);
          setGoallist(data.goalList);
          setIntroduction(data.introduction);
      })
  },[isEdit])

  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div>
          {
            isEdit 
            ? 
            <MypageInfoEdit 
              setIsEdit={setIsEdit} 
              nickname={nickname} 
              goallist={goallist} 
              introduction={introduction} 
              setGoallist={setGoallist} 
              setNickname={setNickname} 
              setIntroduction={setIntroduction}
            /> 
            : 
            <MypageInfo setIsEdit={setIsEdit} nickname={nickname} goallist={goallist} introduction={introduction}/>
          }
        </div>
      </ScreenBox>
    </main>
  );
};

export default index;