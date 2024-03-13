import React from 'react'
import Image from "next/image";
import { useRecoilState } from "recoil";
import FriendProfileImg from '@/img/mypage/FriendProfile.png'
import { friendModalFriendNameAtom, friendModalOpenAtom } from '@/store/atom';

type Props = {
    nickname: string, 
    introduction: string,
}

export default function FriendProfile({nickname, introduction}: Props) {
  const [isModalOpened, setIsModalOpened] = useRecoilState(friendModalOpenAtom);
  const [_, setName] = useRecoilState(friendModalFriendNameAtom);
  return (
    <>  
        <div className='flex-col bg-[white] w-[23%] rounded-[5px] mb-[2%] text-center pb-[25px]'>
            <button 
              className='text-[10px] bg-[black] text-white w-[18px] h-[18px] rounded-[5px] ml-[88%]' 
              onClick={()=>{
                setIsModalOpened(true);
                setName(nickname);
              }}
            >
              X
            </button>
            <Image src={FriendProfileImg} className='ml-auto mr-auto mb-[10px]'/>
            <div className='font-semibold'>{nickname}</div>
            <div className='text-[#828282] text-[14px]'>{introduction}</div>
        </div>
    </>
  )
}