import React from 'react'
import Image from "next/image";
import Pencil from "@/img/community/pencil.png"
import Trash from "@/img/community/trash.png"

type Props = {}

export default function More({}: Props) {
  return (
    <>
        <div className='flex justify-between border-b'>
            <div>수정하기</div>
            <Image src={Pencil}/>
        </div>
        <div className='flex justify-between'>
            <div>삭제하기</div>
            <Image src={Trash}/>
        </div>
    </>
  )
}