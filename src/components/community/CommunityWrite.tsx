import React, { useState } from 'react'
import Typography from '../Typography'
import Image from "next/image";
import More from "@/img/community/more.png"
import Pencil from "@/img/community/pencil.png"
import Trash from "@/img/community/trash.png"

type Props = {
    setIsWrite: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CommunityWrite({setIsWrite}: Props) {
    const [newClick, setNewClick] = useState(false);
    return (
        <>
            <div className='bg-[#ffffff] rounded-[15px] p-[30px]'>
                <div className='flex justify-between'>
                    <Typography title={'어쩌고 저쩌고'} type={'bold20'} />
                    <div>//date</div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <Typography title={'작성자'} type={'bold20'} />
                        <div>//nickname</div>
                    </div>
                    <Image src={More} className='h-[25px]' onClick={()=>{}}/>
                </div>
                <input className='bg-[#F6F7FB] w-[100%] h-[360px]' placeholder='회고 쓰는 거 힘들다...'></input>
            </div>
            <div className='flex'>
                <button 
                    className='bg-black text-white px-[30px] py-[5px] rounded-[50px] my-[30px] mx-[auto]'
                    onClick={()=>{
                        setIsWrite(false)
                    }}
                >확인</button>
            </div>
        </>
    )
}