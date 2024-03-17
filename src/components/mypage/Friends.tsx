import { getUserFriend } from '@/apis/mypage/mypage'
import { MyFriendList } from '@/types/myPageType'
import React, { useEffect, useState } from 'react'
import FriendList from './FriendList'
import FriendsAdd from './FriendsAdd'
import UnFriend from './UnFriend'

type Props = {
}

export default function Friends({}: Props) {
  const [friends, setFriends] = useState<MyFriendList[]>([]);
  const [friendAdd, setFriendAdd] = useState<MyFriendList[]>([]);

  useEffect(()=>{
    getUserFriend(1).then(data=>{
      setFriends(data.myFriendList)
      setFriendAdd(data.waitingList)
    })
  },[])
  return (
    <div 
    className='relative'
    >
        <FriendsAdd friends={friendAdd}/>
        <FriendList friends={friends}/>
    </div>
  )
}