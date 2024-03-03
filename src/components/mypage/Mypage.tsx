import React from 'react'
import Friends from './Friends'
import MypageInfo from './MypageInfo'
import Typography from '../Typography'
import StoryList from './StoryList'
import Contact from './Contact'
import AboutFlouD from './AboutFlouD'
import UnFriend from './UnFriend'

type Props = {}

export default function Mypage({ }: Props) {
    return (
        <div className='relative'>
            <div className="text-[40px] font-bold mb-3">My Page</div>
            <MypageInfo/>
            <Friends/>
            <StoryList/>
            <Contact/>
            <AboutFlouD/>
            {/* <UnFriend/> */}
        </div>
    )
}