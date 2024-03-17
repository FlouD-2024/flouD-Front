import { axiosInstance } from "../auth/auth";

export const postFriendRequest = async (nickname: string) => {
  return await axiosInstance
    .post(`api/friend/request`, {
      nickname: nickname,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
