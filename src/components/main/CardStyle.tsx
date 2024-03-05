import Image from "next/image";
import { CardWrapper } from "./countdown";
import cardImg from "@/img/main/TodayCard.png";
import writeImg from "@/img/main/WriteCard.png";
import btnImgsrc from "@/img/main/Group 492.png";

export const CardStyle = ({ isWrite }: { isWrite: boolean }) => {
  return (
    <CardWrapper>
      {isWrite ? (
        <Image
          src={writeImg}
          alt="이미지"
          style={{
            position: "absolute",
            top: "0",
          }}
          priority
        />
      ) : (
        <Image
          src={cardImg}
          alt="이미지"
          style={{
            position: "absolute",
            top: "0",
          }}
          priority
        />
      )}
      <div className="z-10 text-white tracking-[-6%] text-xl font-black">
        My FlouD
      </div>
      <div className="flex items-center z-10 text-black font-medium gap-1 tracking-[-6%] text-[23.34px]">
        <div>{isWrite ? "오늘의 회고 확인하기" : "없어용"}</div>
        <Image src={btnImgsrc} alt="버튼이미지" />
      </div>
      <div className="text-[79px] leading-[114.51px] font-bold z-10 tracking-[-6%] text-white">
        {isWrite ? "작성완료" : "작성불가"}
      </div>
    </CardWrapper>
  );
};
