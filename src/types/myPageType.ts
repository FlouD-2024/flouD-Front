export interface getUserInfotype {
  nickname: string,
  introduction: string,
  goalList: GoalListItem[]
}

export interface getUserCommunityType {
  nickname: string,
  postType: string,
  postList: PostListItem[],
}

export interface getUserFriendType {
  waitingList: MyFriendList[],
  myFriendList: MyFriendList[],
  frinedPageInfo: FriendPageInfo,
}

export interface getNameCheckType {
  isDuplicated: boolean
}

export interface putUserData {
  nickname?: string,
  introduction: string,
  goalList: GoalListItem[]
}

export interface CheckNameParam {
  nickname: string
}

export interface FriendPageInfo {
  nowPage: number,
  totalPages: number,
  totalElements: number,
  previous: number | null,
  last: boolean
}

export interface PostListItem {
  community_id: number,
  title: string,
  content: string,
  postType: string,
}

export interface GoalListItem {
  goal_id?: number,
  content: string,
  deadline: string,
}

export interface MyFriendList{
  friendship_id: number,
  nickname: string,
  friendshipStatus: string,
  introduction: string
}

export interface PageParam {
  page: number,
}