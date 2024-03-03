import React from 'react'
import Image from "next/image";
import UnFriendImg from '@/img/mypage/UnFriend.png'

type Props = {
  name: string
}

export default function UnFriend({name}: Props) {
  return (
    <>
        <div className='bg-[#000000]/10  w-[100%] h-[100%] absolute'>
            <div className='fixed flex-col bg-[white] w-[450px] h-[370px] rounded-[50px] text-center pb-[25px] pt-[55px] m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Image src={UnFriendImg} className='ml-auto mr-auto mb-[10px]'/>
                <div className='text-[20px] font-bold my-[5px]'>{name}님과 친구를 <br/>끊으시겠습니까? </div>
                <div className='text-[#828282] text-[14px]'>더 이상 서로 회고를 열람할 수 없습니다.</div>
                <button className='text-[20px] bg-[black] text-white w-[110px] h-[40px] rounded-[50px] mt-[30px] mr-[10px]'>네</button>
                <button className='text-[20px] bg-[#4C6FFF] text-white w-[110px] h-[40px] rounded-[50px]'>아니오</button>
            </div>
        </div>
    </>
  )
}