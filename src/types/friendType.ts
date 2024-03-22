type friendListType = {
  friend_nickname: string;
  memoir_status: boolean;
  memoir_id: number;
};

export type pageInfoType = {
  nowPage: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
};
export interface IfriendList {
  my_nickname: string;
  pageInfo: pageInfoType;
  friendshipList: Array<friendListType>;
}
export type friendSearchType = {
  nickname: string;
  email: string;
  introduction: string;
};
