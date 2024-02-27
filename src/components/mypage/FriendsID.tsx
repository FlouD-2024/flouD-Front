import React from 'react'
import Typography from '../Typography'
import Image from "next/image";
import ProfileImg from '@/img/mypage/ProfileImg.png'
import RedID from '@/img/mypage/RedID.png'

type Props = {
    title: string,
    message: string
}

export default function FriendsID({title, message}: Props) {
    
    return (
        <>
            <div className='flex justify-between bg-[white] rounded-[5px] px-[25px] py-[15px] m-[10px]'>
                <Image src={ProfileImg}/>
                <div className='w-[100px]'>{title}</div>
                <Image src={RedID} className="object-contain"/>
                <div className='w-[500px]'>{message}</div>
                <div>
                    <button className='bg-[#6581F6] rounded-[5px] px-[15px] mr-[5px] text-white'>수락</button>
                    <button className='bg-[#E8E8E8] rounded-[5px] px-[15px]'>거절</button>
                </div>
            </div>
        </>
    )
}