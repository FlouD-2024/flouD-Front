import React from 'react'
import FriendList from './FriendList'
import FriendsAdd from './FriendsAdd'
import UnFriend from './UnFriend'

type Props = {
}

export default function Friends({}: Props) {
  return (
    <div 
    className='relative'
    >
        <FriendsAdd/>
        <FriendList/>
    </div>
  )
}