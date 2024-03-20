import { getUserFriend } from '@/apis/mypage/mypage'
import { friendModalOpenAtom, myFriendPageInfoAtom, myFriendPageNumAtom } from '@/store/atom'
import { FriendPageInfo, MyFriendList } from '@/types/myPageType'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import FriendList from './FriendList'
import FriendsAdd from './FriendsAdd'
import UnFriend from './UnFriend'

type Props = {
}

export default function Friends({}: Props) {
  const [friends, setFriends] = useState<MyFriendList[]>([]);
  const [friendAdd, setFriendAdd] = useState<MyFriendList[]>([]);

  const [isModalOpened, setIsModalOpened] = useRecoilState(friendModalOpenAtom);
  const [friendPageNum, setFriendPageNum] = useRecoilState(myFriendPageNumAtom);
  const [friendPageInfo, setFriendPageInfo] = useRecoilState(myFriendPageInfoAtom);

  const fetchFriendList = () => getUserFriend(friendPageNum).then(data=>{
    setFriends(data.myFriendList)
    setFriendAdd(data.waitingList)
    setFriendPageInfo(data.pageInfo)
  })

  useEffect(()=>{
    fetchFriendList();
  },[]);

  return (
    <>
    <div 
    className='relative'
    >
        <FriendsAdd friends={friendAdd} fetchFriendList={fetchFriendList}/>
        <FriendList friends={friends}/>
    </div>
    {
      isModalOpened && <UnFriend fetchFriendList={fetchFriendList} />
    }
    </>
  )
}