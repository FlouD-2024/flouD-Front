import { goalListType } from "@/types/mainType";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import tw, { css, styled } from "twin.macro";

const DdayCard = ({ DdayList }: { DdayList: Array<goalListType> }) => {
  const [click, setClick] = useState(1);
  const onClick = (clickNum: number) => {
    setClick(clickNum);
  };
  const today = dayjs();

  useEffect(() => {
    const timer = setInterval(() => {
      const lastLength = DdayList.length !== 0 ? DdayList.length : 0;
      if (lastLength !== 0 && lastLength <= click) {
        setClick(1);
      } else if (lastLength === 0) {
        return;
      } else {
        setClick((click) => click + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [click]);
  return (
    <DdayCardWrapper cardId={click}>
      {DdayList.length !== 0 ? (
        <>
          <div className="text-[#014472] font-[900] text-[22.33px] leading-[23.34px] tracking-[-6%] h-6 w-full flex justify-center">
            {DdayList[click - 1].goal}
          </div>
          {today.startOf("date").diff(DdayList[click - 1].deadline, "day") <
          0 ? (
            <DdayFont>
              D{today.startOf("date").diff(DdayList[click - 1].deadline, "day")}
            </DdayFont>
          ) : today.startOf("date").diff(DdayList[click - 1].deadline, "day") ==
            0 ? (
            <DdayFont>D-Day</DdayFont>
          ) : (
            <DdayFont>
              D+
              {today.startOf("date").diff(DdayList[click - 1].deadline, "day")}
            </DdayFont>
          )}
          <DotSlide>
            {DdayList.map((e, i) => {
              return (
                <Dot
                  key={i}
                  hasClick={click === i + 1}
                  onClick={() => onClick(i + 1)}
                />
              );
            })}
          </DotSlide>
        </>
      ) : (
        <>
          <BlankCardWrppaer>
            <div className="absolute top-[25px] left-8 font-black floud-letter text-[22.33px]">
              D-DAY
            </div>
            <div className="text-center floud-letter text-[22.33px] text-[#909090]">
              마이페이지에서
              <br />
              설정해주세요.
            </div>
          </BlankCardWrppaer>
        </>
      )}
    </DdayCardWrapper>
  );
};

export default DdayCard;

const DdayCardWrapper = styled.div(({ cardId }: { cardId: number }) => [
  css`
    width: 466px;
    height: 213px;
    border-radius: 30.45px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  `,
  cardId === 1
    ? css`
        background-color: rgba(131, 204, 207, 1);
      `
    : cardId === 2
    ? css`
        background-color: #b1c6e6;
      `
    : css`
        background-color: #547fe7;
      `,
]);

const BlankCardWrppaer = styled.div`
  width: 466px;
  height: 213px;
  border-radius: 30.45px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
`;

const DdayFont = styled.div`
  font-weight: 900;
  font-size: 100px;
  color: white;
  letter-spacing: -6%;
  line-height: 100%;
  height: 107px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DotSlide = tw.div`
    flex flex-col justify-around items-center w-[7px] h-[61px] absolute top-[35%] left-[95%]
`;
const Dot = styled.div(({ hasClick }: { hasClick: boolean }) => [
  css`
    width: 7px;
    height: 7px;
    border-radius: 100%;
    cursor: pointer;
  `,
  hasClick
    ? css`
        background-color: rgba(39, 100, 152, 1);
      `
    : css`
        background-color: rgba(39, 100, 152, 0.41);
      `,
]);
