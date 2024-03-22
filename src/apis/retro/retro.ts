import {
  getRetroDetailType,
  getRetroListType,
  postRetroDetailType,
  RetroDetailParam,
  RetroListParam,
} from "@/types/retroType";
import request from "@/utils/request";

interface PutRetroDetailReq {
  title: string;
  keep_memoir: string;
  problem_memoir: string;
  try_memoir: string;
}

interface WriteRetroReq {
  title: string;
  keep_memoir: string;
  problem_memoir: string;
  try_memoir: string;
}

export const getRetroDetail = async (date: string) => {
  const params = { date: date };

  const response = await request<null, getRetroDetailType, RetroDetailParam>({
    uri: "/api/memoir/my",
    method: "get",
    params,
  });

  return response.data;
};

export const getRetroList = async (date: string) => {
  const params = { "start-date": date };

  const response = await request<null, getRetroListType, RetroListParam>({
    uri: "/api/memoir/week",
    method: "get",
    params,
  });

  return response.data;
};

export const putRetroDetail = async (
  retroID: number,
  req: PutRetroDetailReq
) => {
  const response = await request<PutRetroDetailReq, getRetroListType, null>({
    uri: `/api/memoir/${retroID}`,
    method: "put",
    data: req,
  });

  return response.data;
};
