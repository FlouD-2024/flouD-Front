import React, { ChangeEventHandler, useState } from 'react';
import Image from "next/image";
import AddBT from '@/img/mypage/AddBT.png';

type Props = {
  onDDayAddClick?: () => void
};

export default function DdayAdd({ onDDayAddClick }: Props) {

  return (
    <>
      <div className='flex-col justify-center bg-[#4C6FFF]/10 h-20px rounded-[10px] w-[32%] h-[124px] p-[15px]' onClick={onDDayAddClick}>
        <Image src={AddBT} className='ml-[47%] mt-[15px] mb-[10px]' />
        <div className='text-[#B8C6FF] text-[20px] text-center'>D-DAY 추가하기</div>
      </div>
    </>

  );
}
