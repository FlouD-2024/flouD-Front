import { atom } from "recoil";
import dayjs from "dayjs";
import { FriendPageInfo, UnFriendData } from "@/types/myPageType";

//여기다가 메인에 필요한 날짜들은 다 담아둠
export const mainDayAtom = atom({
  key: "weeklyDayAtom",
  default: dayjs().format("YYYY-MM-DD"),
});

export interface IUserInfo {
  accessToken: string;
  refreshToken: string;
}

// const { persistAtom } = recoilPersist();

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

export const friendModalOpenAtom = atom<boolean>({
  key: "friendModalOpenAtom",
  default: false,
});

export const friendModalFriendAtom = atom<UnFriendData>({
  key: "friendModalFriendNameAtom",
  default: {
    friendship_id: 0,
    nickname: "",
  },
});

export const retroDetailDateAtom = atom<string>({
  key: "retroDetailDateAtom",
  default: "",
});

export const retroDetailOpenAtom = atom<boolean>({
  key: "retroDetailOpenAtom",
  default: false,
});

export const retroTodayOpenAtom = atom<boolean>({
  key: "retroTodayOpenAtom",
  default: false,
});

export const retroCompleteModalOpenAtom = atom<boolean>({
  key: "retroCompleteModalOpenAtom",
  default: false,
});

export const myFriendPageNumAtom = atom<number>({
  key: "friendPageNumAtom",
  default: 0,
});

export const myFriendAddPageNumAtom = atom<number>({
  key: "friendAddPageNumAtom",
  default: 0,
});

export const myFriendPageInfoAtom = atom<FriendPageInfo>({
  key: "friendPageInfoAtom",
  default: {
    nowPage: 0,
    totalPages: 0,
    totalElements: 0,
    previous: false,
    last: false,
  },
});
