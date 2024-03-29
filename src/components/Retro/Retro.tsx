import {
  retroCompleteModalOpenAtom,
  retroDetailOpenAtom,
  retroTodayOpenAtom,
} from "@/store/atom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import RetroDetail from "./RetroDetail";
import RetroEmpty from "./RetroEmpty";
import RetroList from "./RetroList";
import RetroToday from "./RetroToday";
import RetroCompleteModal from "./RetroCompleteModal";
import { getRetroDetail, getRetroList } from "@/apis/retro/retro";
import dayjs from "dayjs";
import { RetroListItem } from "@/types/retroType";

type Props = {};

export default function Retro({}: Props) {
  const [retroList, setRetroList] = useState<RetroListItem[]>([]);
  const [month, setMonth] = useState(dayjs().month());
  const [week, setWeek] = useState(
    Math.ceil(
      (dayjs().diff(
        dayjs().month(month).startOf("month").startOf("week"),
        "day"
      ) +
        1) /
        7
    )
  );

  const [retroDetailOpen, setRetroDetailOpend] =
    useRecoilState(retroDetailOpenAtom);
  const [retroTodayOpen, setRetroTodayOpend] =
    useRecoilState(retroTodayOpenAtom);
  const [retroCompleteModalOpen, setRetroCompleteModalOpen] = useRecoilState(
    retroCompleteModalOpenAtom
  );

  const getWeekCount = () =>
    Math.ceil(
      (dayjs()
        .month(month)
        .endOf("month")
        .diff(dayjs().month(month).startOf("month").startOf("week"), "day") +
        1) /
        7
    );

  const getFirstDayofFirstWeek = () =>
    dayjs().month(month).startOf("month").startOf("week");

  const onNewBtnClick = () => {
    getRetroDetail(dayjs().format("YYYY-MM-DD")).then((data) => {
      if (data) {
        setRetroCompleteModalOpen(true);
      } else {
        setRetroTodayOpend(true);
      }
    });
  };

  useEffect(() => {
    if (!retroTodayOpen) {
      getRetroList(
        getFirstDayofFirstWeek()
          .add((week - 1) * 7, "day")
          .format("YYYY-MM-DD")
      ).then((data) => {
        setRetroList(data.memoirList);
      });
    }
  }, [month, week, retroTodayOpen]);

  useEffect(() => {
    return (() => {
        setRetroDetailOpend(false);
        setRetroTodayOpend(false);
    });
  }, [])

  return (
    <>
      {retroTodayOpen ? (
        <RetroToday />
      ) : (
        <>
          <p className="text-[20px] text-[#4C6FFF]">회고기록</p>
          <div className="text-[40px] font-bold">2024 My FlouD Record</div>
          <div className="flex justify-between">
            <div className="mb-[50px]">
              <select
                className="px-[30px] py-[5px] mr-[20px] rounded-[10px]"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
              >
                {Array.from(
                  Array(dayjs().month() + 1),
                  (_, index) => index
                ).map((month) => (
                  <option key={month} value={month}>
                    {month + 1}월
                  </option>
                ))}
              </select>
              <select
                className="px-[30px] py-[5px] mr-[20px] rounded-[10px]"
                value={week}
                onChange={(e) => setWeek(Number(e.target.value))}
              >
                {Array.from(Array(getWeekCount()), (_, index) => index + 1).map(
                  (week) => (
                    <option key={week} value={week}>
                      {week}주차
                    </option>
                  )
                )}
              </select>
            </div>
            <button
              className="bg-[#4c6fff] h-[40px] text-white rounded-[10px] px-[20px]"
              onClick={() => onNewBtnClick()}
            >
              + New
            </button>
          </div>
          {retroList.length == 0 ? (
            <RetroEmpty />
          ) : (
            <>
              {retroDetailOpen && <RetroDetail />}
              <div className="grid grid-cols-2 gap-[20px]">
                {retroList.map((data) => {
                  return (
                    <RetroList
                      key={data.memoir_id}
                      memoirId={data.memoir_id}
                      date={data.created_at}
                      retro={data.title}
                    />
                  );
                })}
              </div>
            </>
          )}
          {retroCompleteModalOpen && <RetroCompleteModal />}
        </>
      )}
    </>
  );
}
