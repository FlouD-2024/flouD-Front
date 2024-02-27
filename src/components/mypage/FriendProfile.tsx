import React from 'react'
import Image from "next/image";
import FriendProfileImg from '@/img/mypage/FriendProfile.png'

type Props = {
    name: string, 
    introduce: string
}

export default function FriendProfile({name, introduce}: Props) {
  return (
    <>  
        <div className='flex-col bg-[white] w-[23%] rounded-[5px] mb-[2%] text-center pb-[25px]'>
            <button className='text-[10px] bg-[black] text-white w-[18px] h-[18px] rounded-[5px] ml-[88%]'>X</button>
            <Image src={FriendProfileImg} className='ml-auto mr-auto mb-[10px]'/>
            <div className='font-semibold'>{name}</div>
            <div className='text-[#828282] text-[14px]'>{introduce}</div>
        </div>
    </>
  )
}