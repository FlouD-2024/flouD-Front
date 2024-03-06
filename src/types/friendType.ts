type friendListType = {
  friend_nickname: string;
  memoir_status: boolean;
  memoir_id: number;
};

export interface IfriendList {
  my_nickname: string;
  totalFriendNum: number;
  totalPage: number;
  friendshipList: Array<friendListType>;
}
export type friendSearchType = {
  nickname: string;
  email: string;
  introduction: string;
};
