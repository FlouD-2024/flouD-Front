import React, { useEffect, useState } from 'react'
import Typography from '../Typography'
import Dday from './Dday'
import DdayAdd from './DdayAdd'
import Image from "next/image";
import Blue from "@/img/Mypage/BlueEllipse.png"
import { type } from 'os';
import DdayEdit from './DdayEdit';

type Props = {}
type DDayDataType = {
    title: string,
    date: string
}

export default function MypageInfoEdit({ }: Props) {
    const [dDayData,setDDayData] = useState<DDayDataType[]>([
        {
            title: "지긋지긋한 토익시험",
            date: "2024.03.04 (D-48)"
        },
        {
            title: "상반기 공채 시작날짜 아마도 5월",
            date: "2024.05.08 (D-89)"
        }
    ]);
    const [addedDDay, setAddedDDay] = useState<DDayDataType[]>([]);

    const [nickname, setNickname] = useState<string>("");
    const [introduce, setIntroduce] = useState<string>("");
    const onDDayDeleteClick = (i: number) => {
        setDDayData(dDayData.filter((_, index) => i != index))
    }

    const onAddedDeleteClick = (i: number) => {
        setAddedDDay(addedDDay.filter((_, index) => i != index))
    }

    const onAddedDdayNameChange = (i: number, title:string) => {
        setAddedDDay(addedDDay.map((item, index) => {
            if(index === i) {
                return {...item, title: title};
            } else {
                return item;
            }
        }))
    }
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
                    <input className='bg-[#4C6FFF]/10 h-[35px] rounded-[10px]' value={nickname} onChange={(e)=>setNickname(e.target.value)}></input>
                    <button className='bg-[#4C6FFF] text-white px-[10px] py-[5px] rounded-[10px]'>중복확인</button>
                </div>
                <div className='mb-[30px]'>
                    <Typography title={'자기소개'} type={'bold20'} />
                    <textarea className='bg-[#4C6FFF]/10 w-[100%] rounded-[10px]' value={introduce} onChange={(e)=>setIntroduce(e.target.value)}></textarea>
                </div>
                <div>
                    <div className='flex justify-start'>
                        <Typography title={'D-DAY 설정'} type={'bold20'} />
                        <div className='text-[12px] text-[#ACACAC] mt-[7px]'>최대 3개까지 설정 가능합니다. </div>
                    </div>
                    <div className='flex justify-start gap-[20px]'>
                        {
                            dDayData.map((item, i) => {
                                return (<Dday title={item.title} date={item.date} onDeleteClick={() => onDDayDeleteClick(i)}/>)
                            })
                        }
                        {
                            addedDDay.map((item, i) => {
                                return (
                                    <DdayEdit 
                                        dDayName={item.title} 
                                        onDDayNameChange={(e) => onAddedDdayNameChange(i, e.target.value)} 
                                        onDeleteClick={() => onAddedDeleteClick(i)}/>
                                )
                            })
                        }
                        {
                            dDayData.length + addedDDay.length < 3 ?
                            (<DdayAdd onDDayAddClick={() => setAddedDDay(org => [...org, {title: '', date: ''}])}/>)
                            :
                            <></>
                            
                        }
                    </div>
                    <div className='flex'>
                        <button className='bg-[#4C6FFF] text-white px-[30px] py-[5px] rounded-[10px] my-[30px] mx-[auto]'>변경완료</button>
                    </div>
                </div>
            </div>
        </>
    )
}