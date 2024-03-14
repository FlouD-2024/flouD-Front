import { axiosInstance } from "../auth/auth";

export const postFriendRequest = async (friendship_id: number) => {
  return await axiosInstance
    .post(`api/friend/request`, friendship_id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
