import React from "react";
import tw from "twin.macro";
import MainCloud1 from "@/img/svg/main/MainCloud1.svg";
import MainCloud2 from "@/img/svg/main/MainCloud2.svg";
import MainCloud3 from "@/img/svg/main/MainCloud3.svg";
import MainCloud4 from "@/img/svg/main/MainCloud4.svg";

type prop = {
  id: number;
  type: string;
  nickname: string;
  content: string;
};

const AlarmMainBox = (prop: prop) => {
  return (
    <AlarmBox>
      <div>
        {prop.type === "friend" ? (
          prop.id % 2 == 0 ? (
            <MainCloud2 />
          ) : (
            <MainCloud3 />
          )
        ) : prop.type === "accept" ? (
          <MainCloud4 />
        ) : (
          <MainCloud1 />
        )}
      </div>
      <div className="flex flex-col">
        <div>{prop.nickname}</div>
        <div>{prop.content}</div>
      </div>
      <div className="absolute right-10 bg-blue-400 w-2 h-2 rounded-full"></div>
    </AlarmBox>
  );
};

export default AlarmMainBox;

const AlarmBox = tw.div`
w-full h-[84px] relative bg-[rgba(135,183,255,0.12)] flex gap-9 items-center px-[35px] py-[20px] mb-5 rounded-[18px]
`;
