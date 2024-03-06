import { atom } from "recoil";
import { AlarmCardProp } from "./testData";
import { recoilPersist } from "recoil-persist";

//여기다가 메인에 필요한 날짜들은 다 담아둠
export const mainDayAtom = atom({
  key: "weeklyDayAtom",
  default: "",
});

//여기에 알림에 관한 테스트를 담는 상태관리

export const alarmAtom = atom<Array<AlarmCardProp>>({
  key: "alarmDataAtom",
  default: [],
});

export interface IUserInfo {
  accessToken: string;
  refreshToken: string;
}

const { persistAtom } = recoilPersist();

// const { persistAtom } = recoilPersist({
//   //atom을 자동으로 로컬에 저장, 삭제해준다.
//   key: "userInfoLocal", //로컬스토리지에 저장되는 키값
//   storage: localStorage,
// });
// export const userInfoState = atom<IUserInfo>({
//   key: "userInfo",
//   default: { accessToken: "", refreshToken: "" },
//   effects_UNSTABLE: [persistAtom],
// });

export const pageNumAtom = atom<number>({
  key: "nextPageatom",
  default: 1,
});
