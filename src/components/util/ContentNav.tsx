import Image from "next/image";
import React, { useState } from "react";
import alarm from "@/img/friends/알림창.png";
import friendCloud from "@/img/friends/friendCloud.png";
import AlarmSideBar from "../main/AlarmSideBar";
import useGetUserInfo from "@/query/get/useGetUserInfo";

const ContentNav = () => {
  const [open, setOpen] = useState(false);
  const { userInfo } = useGetUserInfo();
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
        <p className="text-[17px] font-medium tracking-[-6%]">
          {userInfo.nickname}
        </p>
      </div>
    </div>
  );
};

export default ContentNav;
