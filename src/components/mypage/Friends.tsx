import React from 'react'
import FriendList from './FriendList'
import FriendsAdd from './FriendsAdd'

type Props = {}

export default function Friends({}: Props) {
  return (
    <>
        <FriendsAdd/>
        <FriendList/>
    </>
  )
}