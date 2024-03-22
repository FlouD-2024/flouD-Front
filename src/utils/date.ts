import dayjs from "dayjs";

export const getDdayString = (targetDate: string) => {
    const daydiff = dayjs().startOf("date").diff(targetDate, "day");

    if (daydiff < 0) return `D${daydiff}`
    else if (daydiff == 0) return 'D-Day'
    else return `D+${daydiff}`
}