import { alarmAtom } from "@/store/atom";
import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "twin.macro";
import AlarmText from "@/img/svg/main/AlarmTextBar.svg";
import MainCloud1 from "@/img/svg/main/MainCloud1.svg";
import MainCloud2 from "@/img/svg/main/MainCloud2.svg";
import MainCloud3 from "@/img/svg/main/MainCloud3.svg";
import MainCloud4 from "@/img/svg/main/MainCloud4.svg";
import dayjs from "dayjs";
import useGetAlarm from "@/query/get/useGetAlarm";

type prop = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AlarmSideBar = (prop: prop) => {
  const onClose = () => {
    prop.setOpen(!prop.open);
  };
  const { alarmList } = useGetAlarm();
  return (
    // 그래 저 박스들은 80%이라고 생각하고 대략 넓이도 80%라고 생각을 하자..!
    // 갭은 대략 23px로 잡고..
    // 여기서 그냥 똑같이 불러와도 되고... 어차피 리코일로 저장을 해야 할 듯....
    <ModalLayout>
      <Modal>
        <div className="flex justify-between items-center mb-11">
          <AlarmText />
          <button onClick={onClose}>닫기</button>
        </div>
        <div className="flex flex-col gap-[23px]">
          {!Array.isArray(alarmList)
            ? null
            : alarmList.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="w-4/5 flex items-center gap-1.5">
                      <div>
                        {e.alarmType === "FRIEND" ? (
                          i % 2 == 0 ? (
                            <MainCloud2 />
                          ) : (
                            <MainCloud3 />
                          )
                        ) : e.alarmType === "ACCEPT" ? (
                          <MainCloud4 />
                        ) : (
                          <MainCloud1 />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="floud-letter text-[15px] font-black">
                          {e.nickname}
                        </div>
                        <div className="floud-letter text-[15px]">
                          {e.message}
                        </div>
                        <div className="text-[10.5px] text-[#9B9B9B] tracking-[-6%]">
                          {dayjs(e.created_at).format("HH:mm")}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </Modal>
    </ModalLayout>
  );
};

export default AlarmSideBar;

export const ModalLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;
const Modal = styled.div`
  background-color: white;
  width: 416px;
  height: 90%;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  padding: 32px 35px 0px 35px;
`;
