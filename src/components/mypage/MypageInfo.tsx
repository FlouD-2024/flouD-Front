import React from 'react'
import Typography from '../Typography'
import Dday from './Dday'
import DdayAdd from './DdayAdd'
import Image from "next/image";
import Blue from "@/img/Mypage/BlueEllipse.png"

type Props = {
    setIsEdit : React.Dispatch<React.SetStateAction<boolean>>
}

export default function MypageInfo({setIsEdit}: Props) {
    const dDayData = [
        {
            title: "지긋지긋한 토익시험",
            date: "2024.03.04 (D-48)"
        },
        {
            title: "상반기 공채 시작날짜 아마도 5월",
            date: "2024.05.08 (D-89)"
        }
    ]

    return (
        <>
            <div className='bg-[white] py-[40px] px-[50px]'>
                <div className='mb-[30px] flex'>
                    <div>
                        <Image src={Blue} className='object-contain' />
                    </div>
                    <Typography title={'반가워요, FlouD 입니다.'} type={'bold40-blue'} />
                </div>
                <div className='mb-[30px] flex justify-start gap-[10px]'>
                    <Typography title={'닉네임'} type={'bold20'} />
                    <input className='bg-[#b5b5bd]/10 h-[35px] rounded-[10px]'></input>
                </div>
                <div className='mb-[30px]'>
                    <Typography title={'자기소개'} type={'bold20'} />
                    <textarea className='bg-[#b5b5bd]/10 w-[100%] rounded-[10px]'></textarea>
                </div>
                <div>
                    <div className='flex justify-start'>
                        <Typography title={'D-DAY 설정'} type={'bold20'} />
                        <div className='text-[12px] text-[#ACACAC] mt-[7px]'>최대 3개까지 설정 가능합니다. </div>
                    </div>
                    <div className='flex justify-start gap-[20px]'>
                        {
                            dDayData.map((item) => {
                                return (<Dday title={item.title} date={item.date} isEdit={false}/>)
                            })
                        }
                        
                    </div>
                    <div className='flex'>
                        <button className='bg-black text-white px-[30px] py-[5px] rounded-[10px] my-[30px] mx-[auto]' onClick={()=>setIsEdit(true)}>변경하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}