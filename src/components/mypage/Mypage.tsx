import React from 'react'
import Friends from './Friends'
import MypageInfo from './MypageInfo'
import Typography from '../Typography'
import StoryList from './StoryList'
import Contact from './Contact'
import UnFriend from './UnFriend'
import MypageInfoEdit from './MypageInfoEdit'

type Props = {}

export default function Mypage({ }: Props) {
    return (
        <div className='relative'>
            <div className="text-[40px] font-bold mb-3">My Page</div>
            <MypageInfoEdit/>
            {/* <UnFriend/> */}
        </div>
    )
}