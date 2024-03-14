import { userInfoType } from "@/types/mainType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

function useGetUserInfo() {
  const fetchUserInfo = async () => {
    const response = await request<null, userInfoType, null>({
      uri: `/api/auth/decode`,
      method: "get",
    });

    return response.data;
  };

  const { data: userInfo } = useSuspenseQuery({
    queryKey: ["get-userInfo"],
    queryFn: fetchUserInfo,
  });

  return { userInfo };
}

export default useGetUserInfo;
