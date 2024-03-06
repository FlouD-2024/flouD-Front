import React from 'react'

type Props = {
    title: string,
    date: string,
    onDeleteClick: () => void,
    isEdit: boolean
}

export default function Dday({title, date, onDeleteClick, isEdit}: Props) {
    return (
        <>
            <div className={`flex-col justify-between  bg-[${isEdit ? '#4C6FFF' : '#b5b5bd'}]/10 h-20px rounded-[10px] w-[32%] h-[124px] p-[15px]`}>
                <div className='flex justify-between '>
                    <div className='bg-[#4C6FFF]/0 w-[155px] mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>{title}</div>
                    {
                        isEdit 
                        &&
                        <button className='text-[10px] bg-[#4C6FFF] text-white w-[18px] h-[18px] rounded-[5px]'>X</button>
                    }
                </div>
                <div className='bg-white rounded-[15px] mt-[20px] h-[36px] px-[15px] py-[5px]'>{date}</div>
            </div>
        </>
    )
}