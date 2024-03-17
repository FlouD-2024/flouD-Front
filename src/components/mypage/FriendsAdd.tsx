import { MyFriendList } from '@/types/myPageType';
import React from 'react'
import Typography from '../Typography'
import FriendsID from './FriendsID'

type Props = {
	friends: MyFriendList[];
}

export default function FriendsAdd({friends =[] }: Props) {
	
	return (
		<>
			<Typography title={`Add Friends (${friends.length})`} type={'bold30'} />
			<div></div>
			{
				friends.map((item)=>{
					return(
						<FriendsID title={item.nickname} message={item.introduction}/>
					)
				})
			}
		</>
	)
}