import React, { ChangeEventHandler, useState } from 'react';
import DdayDate from './DdayDate';

type Props = {
  dDayName?: string,
  date: string,
  onDDayNameChange?: ChangeEventHandler<HTMLInputElement>,
  onDDayDateChange: (date:string) => void,
  onDeleteClick?: () => void
};

export default function DdayEdit({dDayName, date, onDDayNameChange, onDeleteClick, onDDayDateChange}: Props) {

  return (
    <>
      <div className='flex-col justify-between  bg-[#4C6FFF]/10 h-20px rounded-[10px] w-[32%] h-[124px] p-[15px]'>
          <div className='flex justify-between '>
            <input className='text-[#B8C6FF] text-[20px] text-center' placeholder='D-DAY 이름을 작성해주세요' value={dDayName} onChange={onDDayNameChange}></input> 
            <button className='text-[10px] bg-[#4C6FFF] text-white w-[18px] h-[18px] rounded-[5px]' onClick={onDeleteClick}>X</button>
          </div>
          <DdayDate date={date} onDDayDateChange={onDDayDateChange} />
      </div>
    </>

  );
}
