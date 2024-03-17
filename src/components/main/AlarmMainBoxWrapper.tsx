import React, { useState } from "react";
import AlarmMainBox from "./AlarmMainBox";
import { useRecoilValue } from "recoil";
import { alarmAtom } from "@/store/atom";
import AlarmSideBar from "./AlarmSideBar";
import { alarmListType } from "@/types/mainType";

const AlarmMainBoxWrapper = ({ alarmList }: { alarmList: alarmListType[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[547px]">
      <div className="flex justify-between items-center mb-9">
        <div className="font-bold floud-letter text-[22px]">새로운 알림</div>
        <button
          className=" text-[#4C6FFF] floud-letter text-[15px] cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          See all
        </button>
        {open && <AlarmSideBar open={open} setOpen={setOpen} />}
      </div>
      {alarmList.map((e, i) => {
        return (
          <>
            <AlarmMainBox
              key={i}
              id={i}
              nickname={e.nickname}
              content={e.message}
              type={e.alarmType}
            />
          </>
        );
      })}
    </div>
  );
};

export default AlarmMainBoxWrapper;
