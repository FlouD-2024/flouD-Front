export type Maindata = {
  nickname: string;
  isYesterdayMemoir: boolean;
  isTodayMemoir: boolean;
  goalList: Array<goalListType>;
  memo: string;
  yeesterday_try: string;
  dateList: Array<string>;
  alarmList: Array<alarmListType>;
};

export type goalListType = {
  goal: string;
  deadline: string;
};

export type alarmListType = {
  nickname: string;
  alarmType: string;
  message: string;
  created_at: Date;
};

export type userInfoType = {
  users_id: number;
  email: string;
  sub: string;
  nickname: string;
};
