import { alarmAtom } from "@/store/atom";
import React from "react";
import { useRecoilValue } from "recoil";

const AlarmSideBar = () => {
  const alarmData = useRecoilValue(alarmAtom);
  return (
    // 그래 저 박스들은 80%이라고 생각하고 대략 넓이도 80%라고 생각을 하자..!
    // 갭은 대략 23px로 잡고..
    // 여기서 그냥 똑같이 불러와도 되고... 어차피 리코일로 저장을 해야 할 듯....
    <div>AlarmSideBar</div>
  );
};

export default AlarmSideBar;
