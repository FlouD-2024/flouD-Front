export interface DdayProp {
  id: number;
  title: string;
  dday: Date;
}
// 디데이 관련 테스트데이터
export const DdayTestData = [
  {
    id: 1,
    title: "지긋지긋한 토익시험",
    dday: new Date("2024-03-14"),
  },
  {
    id: 2,
    title: "지긋지긋한 자소서",
    dday: new Date("2024-04-24"),
  },
  {
    id: 3,
    title: "지긋지긋한 면접시험",
    dday: new Date("2024-02-01"),
  },
];

export const DdayOtherData = [
  {
    id: 1,
    title: "지긋지긋한 토익시험",
    dday: new Date("2024-03-14"),
  },
  {
    id: 2,
    title: "지긋지긋한 자소서",
    dday: new Date("2024-04-24"),
  },
];

// 친구관련 테스트데이터

export interface FriendCardProp {
  friendId: number;
  name: string;
  isWrite: boolean;
}

export interface TotalFriendCardProp {
  day: Date;
  friendsCard: Array<FriendCardProp>;
}

export const FriendsTestData = {
  day: new Date("2024-02-14"),
  friendsCard: [
    {
      friendId: 1,
      name: "밍그리퐁",
      isWrite: true,
    },
    {
      friendId: 2,
      name: "연수수수",
      isWrite: true,
    },
    {
      friendId: 3,
      name: "연수수",
      isWrite: false,
    },
    {
      friendId: 4,
      name: "tjdwnsdl",
      isWrite: false,
    },
    {
      friendId: 5,
      name: "tjdwnsdl",
      isWrite: true,
    },
    {
      friendId: 6,
      name: "성준 킹",
      isWrite: true,
    },
    {
      friendId: 7,
      name: "규규규",
      isWrite: true,
    },
    {
      friendId: 8,
      name: "성준 킹",
      isWrite: false,
    },
    {
      friendId: 9,
      name: "어쩌라고",
      isWrite: false,
    },
  ],
};

export const OtherFriendsTestData = {
  day: new Date("2024-02-13"),
  friendsCard: [
    {
      friendId: 1,
      name: "밍그리퐁",
      isWrite: true,
    },
    {
      friendId: 2,
      name: "연수수수",
      isWrite: true,
    },
    {
      friendId: 3,
      name: "연수수",
      isWrite: false,
    },
    {
      friendId: 4,
      name: "tjdwnsdl",
      isWrite: false,
    },
    {
      friendId: 5,
      name: "tjdwnsdl",
      isWrite: true,
    },
    {
      friendId: 6,
      name: "성준 킹",
      isWrite: true,
    },
    {
      friendId: 7,
      name: "규규규",
      isWrite: false,
    },
    {
      friendId: 8,
      name: "성준 킹",
      isWrite: false,
    },
    {
      friendId: 9,
      name: "어쩌라고",
      isWrite: true,
    },
  ],
};

export interface AlarmCardProp {
  type: string;
  nickname: string;
  content: string;
  id: number;
  day: Date;
}

export const AlarmTestData = [
  {
    id: 1,
    day: new Date("2024-02-25 12:08:31"),
    type: "write",
    nickname: "밍그리퐁",
    content: "최근 회고를 작성했습니다.",
  },
  {
    id: 2,
    day: new Date("2024-02-25 12:07:31"),
    type: "friend",
    nickname: "쿠키쿠키",
    content: "친구 신청이 왔습니다.",
  },
  {
    id: 3,
    day: new Date("2024-02-25 12:07:04"),
    type: "write",
    nickname: "성준 킹",
    content: "최근 회고를 작성했습니다.",
  },
  {
    id: 4,
    day: new Date("2024-02-25 11:58:31"),
    type: "friend",
    nickname: "휘낭시에",
    content: "친구 신청이 왔습니다.",
  },
  {
    id: 5,
    day: new Date("2024-02-25 12:43:31"),
    type: "accept",
    nickname: "nonananaon",
    content: "친구 신청이 수락되었습니다.",
  },
];
