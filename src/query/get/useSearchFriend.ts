import { friendSearchType } from "@/types/friendType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

interface friendParam {
  nickname: string;
}

function useSearchFriend({ nickname }: { nickname: string }) {
  const fetchSearchFriend = async () => {
    const response = await request<null, friendSearchType, friendParam>({
      uri: `/api/friend?nickname=${nickname}`,
      method: "get",
      params: {
        nickname,
      },
    });

    return response.data;
  };

  const { data: mainData } = useSuspenseQuery({
    queryKey: ["get-searchFriend", nickname],
    queryFn: fetchSearchFriend,
  });

  return { mainData };
}

export default useSearchFriend;
