import { userInfoType } from "@/types/mainType";
import request from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

const fallback = {
  users_id: -1,
  email: "",
  nickname: "",
  sub: "",
};

function useGetUserInfo() {
  const fetchUserInfo = async () => {
    const response = await request<null, userInfoType, null>({
      uri: `/api/auth/decode`,
      method: "get",
    });

    return response.data;
  };
  const { data: userInfo = fallback } = useQuery({
    queryKey: ["get-userInfo"],
    queryFn: fetchUserInfo,
    // enabled: !!access_token,
  });

  return { userInfo };
}

export default useGetUserInfo;
