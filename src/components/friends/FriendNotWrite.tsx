import React from "react";
import { ModalLayout } from "../main/AlarmSideBar";
import { styled } from "twin.macro";
import { ModalConfirmBtn } from "../util/ShowKPTModal";
import friendIcon from "@/img/friends/unWriteModal.png";
import Image from "next/image";

type prop = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
};

const FriendNotWrite = (prop: prop) => {
  return (
    <ModalLayout>
      <Modal>
        <div>
          <Image src={friendIcon} alt="느낌표" />
        </div>
        <div className="mb-5 tracking-[-6%] text-[19.3px] font-bold leading-[39.2px] text-center">
          {prop.name}님은
          <br />
          오늘의 회고를 작성하지 않았습니다 :{"("}
        </div>
        <ModalConfirmBtn
          className="friend"
          onClick={() => prop.setOpen(!prop.open)}
        >
          확인
        </ModalConfirmBtn>
      </Modal>
    </ModalLayout>
  );
};

export default FriendNotWrite;

const Modal = styled.div`
  background-color: white;
  width: 427px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 46px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
