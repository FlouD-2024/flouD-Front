import { getCommunityType } from "@/types/communityType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

interface CommunityParam {
  post_type: string;
  page: number;
}

function useGetCommunity({ page }: { page: number }) {
  const fetchgetCommunity = async () => {
    const response = await request<null, getCommunityType, CommunityParam>({
      uri: `/api/community`,
      method: "get",
      params: {
        post_type: "FIND_FRIEND",
        page: page,
      },
    });

    return response.data;
  };

  const { data: mainData } = useSuspenseQuery({
    queryKey: ["get-communityList", page],
    queryFn: fetchgetCommunity,
  });

  return { mainData };
}

export default useGetCommunity;
