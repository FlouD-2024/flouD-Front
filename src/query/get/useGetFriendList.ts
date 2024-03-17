import { IfriendList } from "@/types/friendType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

interface FriendParam {
  date: string;
  page: number;
}

function useGetFriendList({ date, page }: { date: string; page: number }) {
  const fetchGetFriendList = async () => {
    const response = await request<null, IfriendList, FriendParam>({
      uri: `/api/friend/my`,
      method: "get",
      params: {
        date,
        page,
      },
    });

    return response.data;
  };

  const { data: friendData } = useSuspenseQuery({
    queryKey: ["get-friendList", date, page],
    queryFn: fetchGetFriendList,
  });

  return { friendData };
}

export default useGetFriendList;
