import dayjs from "dayjs";

const useCheckRetroTime = (retroDate: string) => {
  const parsedRetroDate = dayjs(retroDate);
  const now = dayjs();
  if (now.diff(parsedRetroDate.endOf("day"), "hours") >= 6) {
    return false;
  } else if (now.endOf("day").isBefore(parsedRetroDate)) {
    return false;
  } else {
    return true;
  }
};

export default useCheckRetroTime;
