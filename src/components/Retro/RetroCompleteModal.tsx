import React from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import UnFriendImg from "@/img/mypage/UnFriend.png";
import { ModalLayout } from "../main/AlarmSideBar";
import { retroCompleteModalOpenAtom } from "@/store/atom";

type Props = {};

export default function RetroCompleteModal({}: Props) {
  const [isModalOpened, setIsModalOpened] = useRecoilState(
    retroCompleteModalOpenAtom
  );
  return (
    <>
      <ModalLayout>
        <div className="fixed flex-col bg-[white] w-[450px] h-[370px] rounded-[50px] text-center pb-[25px] pt-[55px] m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            alt=""
            src={UnFriendImg}
            className="ml-auto mr-auto mb-[10px]"
          />
          <div className="text-[20px] font-bold my-[5px] mt-[30px]">
            오늘의 회고를
          </div>
          <div className="text-[20px] font-bold my-[5px]">
            이미 작성했습니다.{" "}
          </div>
          <button
            className="text-[20px] bg-[black] text-white w-[110px] h-[40px] rounded-[50px] mt-[30px] mr-[10px]"
            onClick={() => setIsModalOpened(false)}
          >
            확인
          </button>
        </div>
      </ModalLayout>
    </>
  );
}
