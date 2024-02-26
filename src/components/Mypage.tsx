import React from 'react'
import Friends from './Friends'
import MypageInfo from './MypageInfo'
import Typography from './Typography'

type Props = {}

export default function Mypage({ }: Props) {
    return (
        <>
            <div className="text-[30px] font-bold mb-3">My Page</div>
            <MypageInfo/>
            <Friends/>
        </>
    )
}