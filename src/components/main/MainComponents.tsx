import { mainDayAtom } from "@/store/atom";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";
import dynamic from "next/dynamic.js";
import FloudCalendar from "./FloudCalendar";
import DdayCard from "./DdayCard";
import Memo from "./Memo";
import AlarmMainBoxWrapper from "./AlarmMainBoxWrapper";
import useCheckRetroTime from "./useCheckRetroTime";
import { CardStyle } from "./CardStyle";
import useGetMainInfo from "@/query/get/useGetMainInfo";

const MainComponents = () => {
  const date = useMemo(() => dayjs().format("YYYY-MM-01"), []);
  const [tomorrowDay, setTomorrowDay] = useState(
    `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
  );
  const [dayAtom, setDayAtom] = useRecoilState(mainDayAtom);
  const { mainData } = useGetMainInfo({
    date: date,
  });
  useEffect(() => {
    setTomorrowDay(
      dayAtom === dayjs().format("YYYY-MM-DD")
        ? `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
        : `${dayjs().format("YYYY-MM-DD")} 06:00:00`
    );
  }, [dayAtom]);
  useEffect(() => {
    setDayAtom(dayjs().format("YYYY-MM-DD"));
  }, []);

  const Countdown = dynamic(() => import("./countdown"), { ssr: false });
  return (
    <>
      <div className="flex flex-col gap-[35px]">
        {(useCheckRetroTime(dayAtom) ||
          dayjs().format("YYYY-MM-DD") === dayAtom) &&
        !mainData.dateList.includes(dayAtom) ? (
          <Countdown deadline={tomorrowDay} />
        ) : mainData.dateList.includes(dayAtom) ? (
          <CardStyle isWrite />
        ) : (
          <CardStyle isWrite={false} />
        )}
        <DdayCard DdayList={mainData.goalList} />
        <Memo memo={mainData.memo} yesterday_try={mainData.yeesterday_try} />
      </div>
      <div className="pt-[55px] flex flex-col gap-[40px]">
        <FloudCalendar dayList={mainData.dateList} />
        <AlarmMainBoxWrapper alarmList={mainData.alarmList} />
      </div>
    </>
  );
};

export default MainComponents;
