import { IfriendList } from "@/types/friendType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

interface FriendParam {
  date: string;
}

function useGetFriendList({ date }: { date: string }) {
  const fetchGetFriendList = async () => {
    const response = await request<null, IfriendList, FriendParam>({
      uri: `/api/friend/my?date=${date}`,
      method: "get",
      params: {
        date,
      },
    });

    return response.data;
  };

  const { data: friendData } = useSuspenseQuery({
    queryKey: ["get-friendList", date],
    queryFn: fetchGetFriendList,
  });

  return { friendData };
}

export default useGetFriendList;
