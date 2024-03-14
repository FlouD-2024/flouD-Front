import React from 'react'
import MypageInfoEdit from './MypageInfoEdit'

type Props = {}

export default function Mypage({ }: Props) {
    return (
        <div className='relative'>
            <div className="text-[40px] font-bold mb-3">My Page</div>
            <MypageInfoEdit/>
        </div>
    )
}