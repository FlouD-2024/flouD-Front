import React from 'react'
import Image from "next/image";
import Profile from "@/img/Mypage/min.png"
import Typography from '../Typography';

type Props = {
    part: string,
    name: string
}

export default function FlouDs({ part, name }: Props) {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-[223px]'>
                <Image src={Profile} className='rounded-[500px]'></Image>
            </div>
            <Typography title={part} type={"bold30"} mt={0}/>
            <Typography title={name} type={"bold30"} />
        </div>
    )
}