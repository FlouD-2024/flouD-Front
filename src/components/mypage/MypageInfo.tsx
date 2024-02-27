import React from 'react'
import Typography from '../Typography'
import Dday from './Dday'
import DdayAdd from './DdayAdd'

type Props = {}

export default function MypageInfo({ }: Props) {
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
                <Typography title={'반가워요, FlouD 입니다.'} type={'bold40-blue'} />
                <div className='mb-[30px] flex justify-start gap-[10px]'>
                    <Typography title={'닉네임'} type={'bold20'} />
                    <input className='bg-[#4C6FFF]/10 h-[35px] rounded-[10px]'></input>
                    <button className='bg-[#4C6FFF] text-white px-[10px] py-[5px] rounded-[10px]'>중복확인</button>
                </div>
                <div className='mb-[30px]'>
                    <Typography title={'자기소개'} type={'bold20'} />
                    <textarea className='bg-[#4C6FFF]/10 w-[100%] rounded-[10px]'></textarea>
                </div>
                <div>
                    <div className='flex justify-start'>
                        <Typography title={'D-DAY 설정'} type={'bold20'} />
                        <div className='text-[12px] text-[#ACACAC] mt-[7px]'>최대 3개까지 설정 가능합니다. </div>
                    </div>
                    <div className='flex justify-between'>
                        {
                            dDayData.map((item)=>{
                                return (<Dday title={item.title} date={item.date}/>)
                            })
                        }
                        {
                            Array.from({length:3-dDayData.length}).map(()=>{
                                return (<DdayAdd/>)
                            })
                        }
                    </div>
                    <button className='bg-[#4C6FFF] text-white px-[30px] py-[5px] rounded-[10px] my-[30px]'>변경완료</button>
                </div>
            </div>
        </>
    )
}