import { atom } from "recoil";
import { AlarmCardProp } from "./testData";

//여기다가 메인에 필요한 날짜들은 다 담아둠
export const weeklyDayAtom = atom({
  key: "weeklyDayAtom",
  default: [
    {
      monthShow: "",
      dayShow: "",
      monthSee: "",
      dayDataFormat: "",
      daySelectFormat: "",
    },
  ],
});

//여기에 알림에 관한 테스트를 담는 상태관리

export const alarmAtom = atom<Array<AlarmCardProp>>({
  key: "alarmDataAtom",
  default: [],
});
