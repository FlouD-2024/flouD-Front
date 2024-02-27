import React from 'react'
import Typography from '../Typography'
import FriendsID from './FriendsID'

type Props = {}

export default function FriendsAdd({ }: Props) {
	const AddFData = [
		{
			title: "쿠키쿠",
			message: "안녕하세요. 쿠키 먹고 싶어요. 지금 커피 먹고 있어여ㅛ 하하하하핳하 "
		},
		{
			title: "휘낭시에",
			message: "휘낭시에 맛있겠다... 회고열심히쓸게요.. 화이팅! 친구해요~~ "
		}
	]
	return (
		<>
			<Typography title={`Add Friends (${AddFData.length})`} type={'bold30'} />
			<div></div>
			{
				AddFData.map((item)=>{
					return(
						<FriendsID title={item.title} message={item.message}/>
					)
				})
			}
		</>
	)
}