export interface getRetroDetailType {
  nickname: string,
  memoir_id: number,
  title: string,
  keep_memoir: string,
  problem_memoir: string,
  try_memoir: string,
  created_at: string,
}

export interface getRetroListType {
  nickname: string,
  memoirList: RetroListItem[],
}

export interface postRetroDetailType {
  memoir_id: number
}

export interface RetroDetailParam {
  date: string
}

export interface RetroListParam {
  "start-date": string
}

export interface RetroListItem {
  memoir_id: number,
  title: string,
  created_at: string,
}

