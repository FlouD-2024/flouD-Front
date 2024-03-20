import dayjs from 'dayjs'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { Value } from 'react-calendar/dist/cjs/shared/types'

type Props = {
    date: string,
    onDDayDateChange: (date:string) => void,
}

export default function DdayDate({date, onDDayDateChange}: Props) {
    const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);

    const onCalendarChange = (value: Value) => {
        if (value instanceof Date) {
            onDDayDateChange(dayjs(value.toISOString()).format('YYYY-MM-DD'));
        }
        setIsOpenCalendar(false);
    }
    return (
        <>
            <div className='bg-white rounded-[15px] mt-[20px] h-[36px] px-[15px] py-[5px]' onClick={() => setIsOpenCalendar(org => !org)}>{date}</div>
            {
                isOpenCalendar &&
                <Calendar
                locale="ko"
                onChange={onCalendarChange}
                value={date ? new Date(date) : new Date()}
                formatMonthYear={(locale, date) => dayjs(date).format("YYYY.MMM")}
                formatDay={(locale, date) => dayjs(date).format("D")}
                className={'mypage-calendar'}
                // tileClassName={'mypage-calendar'}
                next2Label={null}
                prev2Label={null}
            />
            }
            
        </>
    )
}