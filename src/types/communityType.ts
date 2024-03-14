import { pageInfoType } from "./friendType";

export type getCommunityType = {
  nickname: string;
  postType: string;
  postList: Array<totalPostListType>;
  pageInfo: pageInfoType;
};

// 작성 시 필요한 타입
export interface postListType {
  title: string;
  content: string;
  postType: string;
}

// 전체 게시글 조회 타입 및 수정할 때 필요한 타입
export interface totalPostListType extends postListType {
  community_id: number;
}

// 해당 게시글 조회 타입
export type viewPostListType = {
  my_nickname: string;
  community_id: number;
  writer_nickname: string;
  isMine: boolean;
  title: string;
  content: string;
  written_at: Date;
};
