import { getUserFriend, MyFriendList } from '@/apis/mypage/mypage';
import React, { useEffect, useState } from 'react'
import Typography from '../Typography'
import FriendProfile from './FriendProfile'

type Props = {
  friends: MyFriendList[];
}

export default function FriendList({friends}: Props) {


  return (
    <>
        <Typography title={`Friends (${friends.length})`} type={'bold30'} mt={30}/>
        <div className='flex justify-start flex-wrap gap-[2.5%] m-[10px]'>
        {
          friends.map((item)=>{
            return(<FriendProfile nickname={item.nickname} introduction={item.introduction}/>)
          })
        }
        </div>
        
    </>
  )
}