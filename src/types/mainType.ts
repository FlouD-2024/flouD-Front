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

type goalListType = {
  goal: string;
  deadline: string;
};

type alarmListType = {
  nickname: string;
  alarmType: string;
  message: string;
  created_at: Date;
};

export interface IAlarmList {
  alarmList: Array<alarmListType>;
}
