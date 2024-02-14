import { weeklyDayAtom } from "@/store/atom";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import dayjs from "dayjs";
import dynamic from "next/dynamic.js";
import FloudCalendar from "./FloudCalendar";

const MainComponents = () => {
  //   const dayInfo = useRecoilValue(weeklyDayAtom);
  const [tomorrowDay, setTomorrowDay] = useState(
    `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    setTomorrowDay(
      dayjs().format("YYYY-MM-DD")
        ? `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
        : `${dayjs().format("YYYY-MM-DD")} 06:00:00`
    );
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
    <div>
      <Countdown deadline={tomorrowDay} />
      <div>
        <FloudCalendar />
      </div>
    </div>
  );
};

export default MainComponents;
