import { alarmListType } from "@/types/mainType";
import request from "@/utils/request";
import { useSuspenseQuery } from "@tanstack/react-query";

function useGetAlarm() {
  const fetchAlarm = async () => {
    const response = await request<null, alarmListType[], null>({
      uri: `/api/home/alarm`,
      method: "get",
    });

    return response.data;
  };

  const { data: alarmList } = useSuspenseQuery({
    queryKey: ["get-alarm"],
    queryFn: fetchAlarm,
  });

  return { alarmList };
}

export default useGetAlarm;
