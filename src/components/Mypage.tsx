import React from 'react'

type Props = {}

export default function Mypage({}: Props) {
  return (
    <>
        <div className="text-[30px] font-bold mb-3">My Page</div>
        <div className='bg-[white]'>
            <p>반가워요, FlouD입니다.</p>
            <div>닉네임</div>
            <textarea className='bg-[#4C6FFF]'></textarea>
        </div>
    </>
  )
}