import Image from "next/image";
import React, { useEffect, useState } from "react";
import alarm from "@/img/friends/알림창.png";
import friendCloud from "@/img/friends/friendCloud.png";
import { useSetRecoilState } from "recoil";
import { alarmAtom } from "@/store/atom";
import { AlarmTestData } from "@/store/testData";
import AlarmSideBar from "../main/AlarmSideBar";

const ContentNav = () => {
  const [open, setOpen] = useState(false);
  // 이 부분은 나중에 react-query로 데려올 때 호출할 예정 , 이러면 서버한테 부담 없겠지...
  const setAlarmData = useSetRecoilState(alarmAtom);
  useEffect(() => {
    setAlarmData(AlarmTestData);
  }, []);
  return (
    <div className="flex items-center gap-[18px]">
      <Image
        src={alarm}
        alt="알림창"
        onClick={() => {
          setOpen(!open);
        }}
        style={{
          cursor: "pointer",
        }}
      />
      {open && <AlarmSideBar open={open} setOpen={setOpen} />}
      <div className="bg-white rounded-[20px] flex items-center gap-4 w-[162px] h-[45px] px-4 py-2">
        <Image
          src={friendCloud}
          alt="프로필 구름"
          style={{
            width: "33px",
            height: "27.46px",
          }}
        />
        {/* 여기에 닉네임 있어야 됨 이거는 유저정보에서 가져올 예정 */}
        <p className="text-[17px] font-medium tracking-[-6%]">정민지퐁퐁</p>
      </div>
    </div>
  );
};

export default ContentNav;
