import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import cardImg from "@/img/main/TodayCard.png";
import btnImgsrc from "@/img/main/Group 492.png";

const getRemainTime = (countDown: number) => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 30)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [
    hours < 10 ? "0" + hours : hours,
    minutes < 10 ? "0" + minutes : minutes,
    seconds < 10 ? "0" + seconds : seconds,
  ];
};

const Countdown = ({ deadline }: { deadline: string }) => {
  const targetDate = deadline;
  //   const timelineDate = deadline;
  const [countDown, setCountDown] = useState(
    new Date(targetDate).getTime() - new Date().getTime()
  );
  useEffect(() => {
    // console.log(timelineDate);
    const interval = setInterval(() => {
      setCountDown(new Date(targetDate).getTime() - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [hours, minutes, seconds] = getRemainTime(countDown);
  return (
    <>
      <CardWrapper>
        <Image
          src={cardImg}
          alt="이미지"
          style={{
            position: "absolute",
            top: "0",
          }}
          priority
        />
        <div className="z-10 text-white tracking-[-6%] text-xl font-black">
          My FlouD
        </div>
        <div className="flex items-center z-10 text-black font-medium gap-1 tracking-[-6%] text-[23.34px]">
          <div>오늘의 회고 작성하기</div>
          <Image src={btnImgsrc} alt="버튼이미지" />
        </div>
        <div className="text-[79px] leading-[114.51px] font-bold z-10 tracking-[-6%] text-white">
          {hours}:{minutes}:{seconds}
        </div>
      </CardWrapper>
    </>
  );
};

export default Countdown;

export const CardWrapper = tw.div`
  w-[466.1px] h-[243.14px] flex flex-col justify-center items-center relative
`;
