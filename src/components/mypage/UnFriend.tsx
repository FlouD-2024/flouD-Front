import React from 'react'
import Image from "next/image";
import { useRecoilState } from "recoil";
import UnFriendImg from '@/img/mypage/UnFriend.png'
import { ModalLayout } from '../main/AlarmSideBar';
import { friendModalFriendAtom, friendModalOpenAtom } from '@/store/atom';
import { putUnFriend } from '@/apis/mypage/mypage';

type Props = {
  fetchFriendList: () => void;
}

export default function UnFriend({fetchFriendList}: Props) {
  const [isModalOpened, setIsModalOpened] = useRecoilState(friendModalOpenAtom);
  const [friendData, setFriendData] = useRecoilState(friendModalFriendAtom);
  return (
    <>
        <ModalLayout>
            <div className='fixed flex-col bg-[white] w-[450px] h-[370px] rounded-[50px] text-center pb-[25px] pt-[55px] m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Image alt='' src={UnFriendImg} className='ml-auto mr-auto mb-[10px]'/>
                <div className='text-[20px] font-bold my-[5px]'>{friendData.nickname}님과 친구를 <br/>끊으시겠습니까? </div>
                <div className='text-[#828282] text-[14px]'>더 이상 서로 회고를 열람할 수 없습니다.</div>
                <button className='text-[20px] bg-[black] text-white w-[110px] h-[40px] rounded-[50px] mt-[30px] mr-[10px]' onClick={()=>{ 
                  setIsModalOpened(false);
                  putUnFriend(friendData.friendship_id);
                  setTimeout(() => fetchFriendList(), 100);
                }}
                >
                  네
                </button>
                <button className='text-[20px] bg-[#4C6FFF] text-white w-[110px] h-[40px] rounded-[50px]' onClick={()=>setIsModalOpened(false)}>아니오</button>
            </div>
        </ModalLayout>
    </>
  )
}