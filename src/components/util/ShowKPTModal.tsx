import React from "react";
import { ModalLayout } from "../main/AlarmSideBar";
import { styled } from "twin.macro";
import dayjs from "dayjs";

type prop = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  date: Date;
  name?: string;
};

const ShowKPTModal = (prop: prop) => {
  const onClose = () => {
    prop.setOpen(!prop.open);
  };
  // 여기서 api를 불러와야 되는데 되려나?
  return (
    <ModalLayout>
      <Modal>
        <div className="h-[36px] pl-4 text-[20px] tracking-[-6%] text-[#4C6FFF]">
          {typeof prop.name === "undefined" ? null : prop.name}
        </div>
        <div className="mb-[52px]">
          <ModalTitleText>
            {dayjs(prop.date).format("YYYY-MM-DD")} 하루 요약
          </ModalTitleText>
          <TextBox className="title" disabled>
            여기다가 쓸 예정!
          </TextBox>
        </div>
        <div className="mb-[52px]">
          <ModalTitleText>Keep</ModalTitleText>
          <TextBox disabled>여기다가 쓸 예정!</TextBox>
        </div>
        <div className="mb-[52px]">
          <ModalTitleText>Problem</ModalTitleText>
          <TextBox disabled>여기다가 쓸 예정!</TextBox>
        </div>
        <div className="mb-[52px]">
          <ModalTitleText>Try</ModalTitleText>
          <TextBox disabled>여기다가 쓸 예정!</TextBox>
        </div>
        <div className="flex justify-center">
          <ModalConfirmBtn
            onClick={() => {
              onClose();
            }}
          >
            확인
          </ModalConfirmBtn>
        </div>
      </Modal>
    </ModalLayout>
  );
};

export default ShowKPTModal;

const Modal = styled.div`
  background-color: white;
  width: 70%;
  max-width: 1004px;
  height: 644px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding: 34px 110px 103px 90px;
  overflow: scroll;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 223.5px;
  border-radius: 21.7px;
  background-color: #edf2f7;
  overflow: scroll;
  padding: 25px 31px;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  &.title {
    height: 63px;
    padding: 19px 31px;
  }
`;

export const ModalConfirmBtn = styled.div`
  max-width: 138px;
  width: 13.8%;
  height: 49px;
  color: white;
  background-color: black;
  border-radius: 70.71px;
  font-weight: 700;
  font-size: 20.95px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalTitleText = styled.div`
  margin-bottom: 8px;
  padding-left: 16px;
  font-size: 23.87px;
  letter-spacing: -6%;
  font-weight: 700;
`;
