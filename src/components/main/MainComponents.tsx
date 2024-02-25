import { alarmAtom, weeklyDayAtom } from "@/store/atom";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import dayjs from "dayjs";
import dynamic from "next/dynamic.js";
import FloudCalendar from "./FloudCalendar";
import DdayCard from "./DdayCard";
import Memo from "./Memo";
import AlarmMainBoxWrapper from "./AlarmMainBoxWrapper";
import { AlarmTestData } from "@/store/testData";

const MainComponents = () => {
  //   const dayInfo = useRecoilValue(weeklyDayAtom);
  const [tomorrowDay, setTomorrowDay] = useState(
    `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
  );
  const [data, setData] = useState([]);
  const [alarmData, setAlarmData] = useRecoilState(alarmAtom);
  useEffect(() => {
    setTomorrowDay(
      dayjs().format("YYYY-MM-DD")
        ? `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
        : `${dayjs().format("YYYY-MM-DD")} 06:00:00`
    );
    setAlarmData(AlarmTestData);
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
        <Countdown deadline={tomorrowDay} />
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
