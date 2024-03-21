import { Maindata } from "@/types/mainType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

interface MainParam {
  date: string;
}

function useGetMainInfo({ date }: { date: string }) {
  const fetchMainInfo = async () => {
    const response = await request<null, Maindata, MainParam>({
      uri: `/api/home`,
      method: "get",
      params: {
        date,
      },
    });

    return response.data;
  };

  const { data: mainData } = useSuspenseQuery({
    queryKey: ["get-mainInfo", date],
    queryFn: fetchMainInfo,
  });

  return { mainData };
}

export default useGetMainInfo;
