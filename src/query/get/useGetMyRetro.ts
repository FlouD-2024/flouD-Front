import { KPTType } from "@/types/kptType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

interface KPTParam {
  date: string;
}

function useGetMyRetro(date: string) {
  const fetchRetro = async () => {
    const response = await request<null, KPTType, KPTParam>({
      uri: "/api/memoir/my",
      method: "get",
      params: {
        date,
      },
    });

    return response.data;
  };

  const { data: mainData } = useSuspenseQuery({
    queryKey: ["get-myRetro", date],
    queryFn: fetchRetro,
  });

  return { mainData };
}

export default useGetMyRetro;
