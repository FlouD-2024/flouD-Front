import { KPTType } from "@/types/kptType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

function useGetFriendMemoir({ memoir_id }: { memoir_id: number }) {
  const fetchMainInfo = async () => {
    const response = await request<null, KPTType, null>({
      uri: `/api/friend/memoir/${memoir_id}`,
      method: "get",
    });

    return response.data;
  };

  const { data: mainData } = useSuspenseQuery({
    queryKey: ["get-friend_memoir_id", memoir_id],
    queryFn: fetchMainInfo,
  });

  return { mainData };
}

export default useGetFriendMemoir;
