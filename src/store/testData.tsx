export interface DdayProp {
  id: number;
  title: string;
  dday: Date;
}

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
