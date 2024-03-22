import React from "react";
import Typography from "../Typography";
import Dday from "./Dday";
import Image from "next/image";
import Blue from "@/img/Mypage/BlueEllipse.png";
import { GoalListItem } from "@/types/myPageType";

type Props = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  nickname: string;
  goallist: GoalListItem[];
  introduction: string;
};

export default function MypageInfo({
  nickname,
  goallist,
  introduction,
  setIsEdit,
}: Props) {
  return (
    <>
      <div className="bg-[white] py-[40px] px-[50px]">
        <div className="mb-[30px] flex">
          <div>
            <Image alt="" src={Blue} className="object-contain" />
          </div>
          <Typography title={"반가워요, FlouD 입니다."} type={"bold40-blue"} />
        </div>
        <div className="mb-[30px] flex justify-start gap-[10px]">
          <Typography title={"닉네임"} type={"bold20"} />
          <div className="bg-[#b5b5bd]/10 rounded-[10px] w-[300px] h-[40px] p-[5px] px-[15px]">
            {nickname}
          </div>
        </div>
        <div className="mb-[30px]">
          <Typography title={"자기소개"} type={"bold20"} />
          <div className="bg-[#b5b5bd]/10 w-[100%] rounded-[10px] p-[15px] px-[15px]">
            {introduction}
          </div>
        </div>
        <div>
          <div className="flex justify-start">
            <Typography title={"D-DAY 설정"} type={"bold20"} />
            <div className="text-[12px] text-[#ACACAC] mt-[7px]">
              최대 3개까지 설정 가능합니다.{" "}
            </div>
          </div>
          <div className="flex justify-start gap-[20px]">
            {goallist.map((item) => {
              return (
                <Dday
                  key={item.goal_id}
                  title={item.content}
                  date={item.deadline}
                  goalId={item.goal_id}
                  isEdit={false}
                />
              );
            })}
          </div>
          <div className="flex">
            <button
              className="bg-black text-white px-[30px] py-[5px] rounded-[10px] my-[30px] mx-[auto]"
              onClick={() => setIsEdit(true)}
            >
              변경하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
