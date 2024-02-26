import React, { useState } from "react";
import AlarmMainBox from "./AlarmMainBox";
import { useRecoilValue } from "recoil";
import { alarmAtom } from "@/store/atom";
import AlarmSideBar from "./AlarmSideBar";

const AlarmMainBoxWrapper = () => {
  const alarmData = useRecoilValue(alarmAtom).slice(0, 2);
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
      {alarmData.map((e) => {
        return (
          <>
            <AlarmMainBox
              key={e.id}
              id={e.id}
              nickname={e.nickname}
              content={e.content}
              type={e.type}
            />
          </>
        );
      })}
    </div>
  );
};

export default AlarmMainBoxWrapper;
