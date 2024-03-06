import dayjs from "dayjs";
import React, { ReactNode, useEffect, useState } from "react";
import Calendar from "react-calendar";
import ShowKPTModal from "../util/ShowKPTModal";
import { useSetRecoilState } from "recoil";
import { mainDayAtom } from "@/store/atom";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const dayList = [
  "2024-02-01",
  "2024-02-04",
  "2024-02-05",
  "2024-02-10",
  "2024-02-14",
];

const FloudCalendar = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const [startDate, onChange] = useState<Value | null>(new Date());
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (startDate instanceof Date) {
      const dateString = startDate.toISOString();
      setDayAtom(dayjs(dateString).format("YYYY-MM-DD"));
    }
  }, [startDate]);
  const setDayAtom = useSetRecoilState(mainDayAtom);
  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }: { date: Date }): ReactNode => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents: ReactNode[] = [];

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (dayList.find((day) => day === dayjs(date).format("YYYY-MM-DD"))) {
      contents.push(
        <div
          className="absolute top-0 left-0 w-full h-full bg-transparent"
          onClick={() => {
            setSelectDate(date);
          }}
        >
          <div
            key={dayjs(date).format("YYYY-MM-DD")}
            className=" absolute top-[75%] left-[44%] bg-blue-400 w-2 h-2 rounded-full"
          ></div>
          {/* <Image
                src="emotion/good.svg"
                className="diaryImg"
                width="26"
                height="26"
                alt="today is..."
              /> */}
        </div>
      );
    }
    return (
      <>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="flex justify-center"
        >
          {contents}
        </div>
      </>
    ); // 각 날짜마다 해당 요소가 들어감
  };
  return (
    <>
      <Calendar
        locale="ko"
        onChange={onChange}
        value={startDate}
        formatMonthYear={(locale, date) => dayjs(date).format("YYYY.MMM")}
        formatDay={(locale, date) => dayjs(date).format("D")}
        tileContent={addContent}
        next2Label={null}
        prev2Label={null}
      />
      {open && (
        <ShowKPTModal open={open} setOpen={setOpen} id={1} date={selectDate} />
      )}
    </>
  );
};

export default FloudCalendar;
