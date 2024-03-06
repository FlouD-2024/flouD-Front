import { retroDetailDateAtom, retroDetailOpenAtom } from '@/store/atom'
import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import RetroList from './RetroList'

type Props = {}

export default function RetroDetail({ }: Props) {
    const retroDetailDate = useRecoilValue(retroDetailDateAtom)
    const setRetroDetailOpened = useSetRecoilState(retroDetailOpenAtom)

    return (
        <>
            <p className="text-[20px] text-[#4C6FFF]">2024 My FlouD Record</p>
            <div className="text-[40px] font-bold">{retroDetailDate} 회고 확인</div>

            <p className='mt-[20px] mb-[10px] text-[25px]'>오늘 하루 요약</p>
            <textarea className='w-[100%] rounded-[10px] p-[15px]'></textarea>

            <p className='mt-[20px] mb-[10px] text-[25px]'>Keep</p>
            <textarea className='w-[100%] h-[166px] rounded-[10px] p-[15px]' placeholder='오늘 자신이 성취한 것을 작성해주세요.'></textarea>

            <p className='mt-[20px] mb-[10px] text-[25px]'>Problem</p>
            <textarea className='w-[100%] h-[166px] rounded-[10px] p-[15px]' placeholder='오늘 하려고 했는데 못한 것들을 작성해주세요.'></textarea>

            <p className='mt-[20px] mb-[10px] text-[25px]'>Try</p>
            <textarea className='w-[100%] h-[166px] rounded-[10px] p-[15px]' placeholder='내일 무엇을 할건지 작성해주세요.'></textarea>
            <div className='flex justify-end'>
                <button 
                    className="bg-[#4c6fff] text-white rounded-[30px] px-[40px] py-[5px] mt-[50px] mb-[50px]"
                    onClick={()=>setRetroDetailOpened(false)}
                >수정하기</button>
            </div>
        
        </>
    )
}