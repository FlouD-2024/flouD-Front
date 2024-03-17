import { viewPostListType } from "@/types/communityType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

function useGetCommunityDetail({ community_id }: { community_id: number }) {
  const fetchgetCommunityDetail = async () => {
    const response = await request<null, viewPostListType, null>({
      uri: `/api/community/detail/${community_id}`,
      method: "get",
    });

    return response.data;
  };

  const { data: mainData } = useSuspenseQuery({
    queryKey: ["get-community", community_id],
    queryFn: fetchgetCommunityDetail,
  });

  return { mainData };
}

export default useGetCommunityDetail;
