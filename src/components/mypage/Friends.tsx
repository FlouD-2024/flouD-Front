import { getUserFriend } from '@/apis/mypage/mypage'
import React, { useEffect, useState } from 'react'
import FriendList from './FriendList'
import FriendsAdd from './FriendsAdd'
import UnFriend from './UnFriend'

type Props = {
}

export default function Friends({}: Props) {
  const [friends, setFriends] = useState([]);
  const [friendAdd, setFriendAdd] = useState([]);

  useEffect(()=>{
    getUserFriend(1).then(data=>{
      setFriends(data.data.myFriendList)
      setFriendAdd(data.data.waitingList)
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