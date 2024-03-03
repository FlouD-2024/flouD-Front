import React from 'react'
import Typography from '../Typography'
import FriendProfile from './FriendProfile'

type Props = {}

export default function FriendList({}: Props) {
  const friends = [
    {
      name: "밍구리퐁",
      introduce: "밍구리퐁 자기소개"
    },
    {
      name: "연수수수",
      introduce: "연수수수 자기소개"
    },
    {
      name: "성준킹",
      introduce: "성준킹 자기소개"
    },
    {
      name: "어쩌라고",
      introduce: "어쩌라고 자기소개"
    },
    {
      name: "oneone",
      introduce: "원원 자기소개"
    },
    {
      name: "윱",
      introduce: "윱 자기소개"
    },
    {
      name: "오트밀",
      introduce: "오트밀 자기소개"
    }
  ]
  return (
    <>
        <Typography title={`Friends (${friends.length})`} type={'bold30'} mt={30}/>
        <div className='flex justify-start flex-wrap gap-[2.5%] m-[10px]'>
        {
          friends.map((item)=>{
            return(<FriendProfile name={item.name} introduce={item.introduce}/>)
          })
        }
        </div>
        
    </>
  )
}