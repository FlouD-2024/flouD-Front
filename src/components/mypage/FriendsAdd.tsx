import { putFriend } from '@/apis/mypage/mypage';
import { MyFriendList } from '@/types/myPageType';
import React, { useState } from 'react'
import Typography from '../Typography'
import MoveNext from '../util/MoveNext';
import FriendsID from './FriendsID'

type Props = {
	friends: MyFriendList[];
	fetchFriendList: () => void;
}

export default function FriendsAdd({friends = [], fetchFriendList }: Props) {
	const [currentPage, setCurrentPage] = useState<number>(0);
	
	return (
		<>
			<Typography title={`Add Friends (${friends.length})`} type={'bold30'} />
			<div></div>
			{
				friends.slice(2*currentPage, 2*(currentPage+1)).map((item)=>{
					return(	
						<FriendsID
							key={item.friendship_id}
							title={item.nickname} 
							message={item.introduction}
							onAcceptClick={() => {
								putFriend(item.friendship_id, item.nickname, 'ACCEPT');
								setTimeout(() => fetchFriendList(), 100);
							}}
							onRejectClick={() => {
								putFriend(item.friendship_id, item.nickname, 'REJECT');
								setTimeout(() => fetchFriendList(), 100);
							}}
						/>
					)
				})
			}
			<div className='flex justify-end'>
				<MoveNext
					isLast={Math.floor(friends.length/2) === currentPage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</>
	)
}