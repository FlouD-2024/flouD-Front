import { alarmAtom, mainDayAtom } from "@/store/atom";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import dayjs from "dayjs";
import dynamic from "next/dynamic.js";
import FloudCalendar, { dayList } from "./FloudCalendar";
import DdayCard from "./DdayCard";
import Memo from "./Memo";
import AlarmMainBoxWrapper from "./AlarmMainBoxWrapper";
import { AlarmTestData } from "@/store/testData";
import useCheckRetroTime from "./useCheckRetroTime";
import { CardStyle } from "./CardStyle";

const MainComponents = () => {
  //   const dayInfo = useRecoilValue(weeklyDayAtom);
  const [tomorrowDay, setTomorrowDay] = useState(
    `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
  );
  const [dayAtom, setDayAtom] = useRecoilState(mainDayAtom);
  useEffect(() => {
    setTomorrowDay(
      dayAtom === dayjs().format("YYYY-MM-DD")
        ? `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
        : `${dayjs().format("YYYY-MM-DD")} 06:00:00`
    );
  }, [dayAtom]);
  const setAlarmData = useSetRecoilState(alarmAtom);
  useEffect(() => {
    setAlarmData(AlarmTestData);
    setDayAtom(dayjs().format("YYYY-MM-DD"));
  }, []);
  //   useEffect(() => {
  //     setData([]);
  //     //여기서는 api를 받아서 얻어낸 데이터이기 때문에 굳이  map을 돌릴 필요는 없을 듯!
  //     //e.date === dayInfo.dayDataFormat ? setData(e) : setData([]); 이것만 필요
  //     setTomorrowDay(
  //       dayjs().format("YYYY-MM-DD") === dayInfo.dayDataFormat
  //         ? `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
  //         : `${dayjs().format("YYYY-MM-DD")} 06:00:00`
  //     );
  //   }, [dayInfo.dayDataFormat]);
  const Countdown = dynamic(() => import("./countdown"), { ssr: false });
  return (
    <>
      <div className="flex flex-col gap-[35px]">
        {useCheckRetroTime(dayAtom) ||
        dayjs().format("YYYY-MM-DD") === dayAtom ? (
          <Countdown deadline={tomorrowDay} />
        ) : dayList.includes(dayAtom) ? (
          <CardStyle isWrite />
        ) : (
          <CardStyle isWrite={false} />
        )}
        <DdayCard />
        <Memo />
      </div>
      <div className="pt-[55px] flex flex-col gap-[40px]">
        <FloudCalendar />
        <AlarmMainBoxWrapper />
      </div>
    </>
  );
};

export default MainComponents;
