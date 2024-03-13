import React, { useEffect, useState } from 'react'
import Typography from '../Typography'
import Dday from './Dday'
import DdayAdd from './DdayAdd'
import Image from "next/image";
import Blue from "@/img/Mypage/BlueEllipse.png"
import { getUserInfo } from '@/apis/mypage/mypage';

type Props = {
    setIsEdit : React.Dispatch<React.SetStateAction<boolean>>
}

export default function MypageInfo({setIsEdit}: Props) {
    const [nickname, setNickname] = useState<string>("");
    const [goallist, setGoallist] = useState([]);
    const [introduction, setIntroduction] = useState<string>("");
    useEffect(()=>{
        getUserInfo().then(data=>{
            setNickname(data.data.nickname);
            setGoallist(data.data.goalList);
            setIntroduction(data.data.introduction);
        })
    },[])

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
                    <div className='bg-[#b5b5bd]/10 h-[35px] rounded-[10px]'>{nickname}</div>
                </div>
                <div className='mb-[30px]'>
                    <Typography title={'자기소개'} type={'bold20'} />
                    <div className='bg-[#b5b5bd]/10 w-[100%] rounded-[10px]'>{introduction}</div>
                </div>
                <div>
                    <div className='flex justify-start'>
                        <Typography title={'D-DAY 설정'} type={'bold20'} />
                        <div className='text-[12px] text-[#ACACAC] mt-[7px]'>최대 3개까지 설정 가능합니다. </div>
                    </div>
                    <div className='flex justify-start gap-[20px]'>
                        {
                            goallist.map((item) => {
                                return (<Dday title={item.content} date={item.deadline} goalId={item.goal_id} isEdit={false}/>)
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