import React, { useEffect, useState } from 'react'
import Typography from '../Typography'
import Dday from './Dday'
import DdayAdd from './DdayAdd'
import Image from "next/image";
import Blue from "@/img/Mypage/BlueEllipse.png"
import { type } from 'os';
import DdayEdit from './DdayEdit';
import { GoalListItem } from '@/types/myPageType';
import { getNameCheck, putUserInfo } from '@/apis/mypage/mypage';

type Props = {
    setIsEdit : React.Dispatch<React.SetStateAction<boolean>>
    nickname: string
    goallist: GoalListItem[]
    introduction: string
    setNickname: React.Dispatch<React.SetStateAction<string>>
    setGoallist: React.Dispatch<React.SetStateAction<GoalListItem[]>>
    setIntroduction: React.Dispatch<React.SetStateAction<string>>
}
type DDayDataType = {
    title: string,
    date: string,
}

export default function MypageInfoEdit({nickname, goallist, introduction, setNickname, setGoallist, setIntroduction, setIsEdit }: Props) {
    const [addedDDay, setAddedDDay] = useState<GoalListItem[]>([]);
    const [isNickNameChanged, setIsNickNameChanged] = useState(false);
    const [isNickNameCheck, setIsNickNameCheck] = useState<boolean>(false);

    const onDDayDeleteClick = (i: number) => {
        setGoallist(goallist.filter((_, index) => i != index))
    }

    const onAddedDeleteClick = (i: number) => {
        setAddedDDay(addedDDay.filter((_, index) => i != index))
    }

    const onAddedDdayNameChange = (i: number, title:string) => {
        setAddedDDay(addedDDay.map((item, index) => {
            if(index === i) {
                return {...item, content: title};
            } else {
                return item;
            }
        }))
    }

    const onAddedDdayDateChange = (i: number, date:string) => {
        setAddedDDay(addedDDay.map((item, index) => {
            if(index === i) {
                return {...item, deadline: date};
            } else {
                return item;
            }
        }))
    }

    const onEditComplete = () => {
        putUserInfo({nickname, introduction, goalList: goallist.concat(addedDDay)}).then(data => setIsEdit(false));
    }

    const onCheckNickName = () => {
        getNameCheck(nickname).then(data => setIsNickNameCheck(!data.isDuplicated));
    }

    return (
        <>
            <div className='bg-[white] py-[40px] px-[50px]'>
                <div className='mb-[30px] flex'>
                    <div>
                        <Image alt="" src={Blue} className='object-contain' />
                    </div>
                    <Typography title={'반가워요, FlouD 입니다.'} type={'bold40-blue'} />
                </div>
                <div className='mb-[30px] flex justify-start gap-[10px]'>
                    <Typography title={'닉네임'} type={'bold20'} />
                    <input className='bg-[#4C6FFF]/10 h-[35px] rounded-[10px]' value={nickname} onChange={(e)=> {
                        setNickname(e.target.value)
                        setIsNickNameChanged(true)
                    }}></input>
                    {isNickNameChanged && <button className='bg-[#4C6FFF] text-white px-[10px] py-[5px] rounded-[10px]' onClick={onCheckNickName}>중복확인</button>}
                </div>
                <div className='mb-[30px]'>
                    <Typography title={'자기소개'} type={'bold20'} />
                    <textarea className='bg-[#4C6FFF]/10 w-[100%] rounded-[10px]' value={introduction} onChange={(e)=>setIntroduction(e.target.value)}></textarea>
                </div>
                <div>
                    <div className='flex justify-start'>
                        <Typography title={'D-DAY 설정'} type={'bold20'} />
                        <div className='text-[12px] text-[#ACACAC] mt-[7px]'>최대 3개까지 설정 가능합니다. </div>
                    </div>
                    <div className='flex justify-start gap-[20px]'>
                        {
                            goallist.map((item, i) => {
                                return (<Dday title={item.content} date={item.deadline} goalId={item.goal_id} isEdit={true} onDeleteClick={() => onDDayDeleteClick(i)}/>)
                            })
                        }
                        {
                            addedDDay.map((item, i) => {
                                return (
                                    <DdayEdit 
                                        date={item.deadline}
                                        dDayName={item.content} 
                                        onDDayNameChange={(e) => onAddedDdayNameChange(i, e.target.value)} 
                                        onDDayDateChange={(date) => onAddedDdayDateChange(i, date)} 
                                        onDeleteClick={() => onAddedDeleteClick(i)}/>
                                )
                            })
                        }
                        {
                            goallist.length + addedDDay.length < 3 ?
                            (<DdayAdd isEdit={true} onDDayAddClick={() => setAddedDDay(org => [...org, {content: '', deadline: ''}])}/>)
                            :
                            <></>
                            
                        }
                    </div>
                    <div className='flex'>
                        <button disabled={isNickNameChanged && !isNickNameCheck} className='bg-[#9C9C9C] text-white px-[30px] py-[5px] rounded-[10px] my-[30px] mx-[auto]' onClick={onEditComplete}>변경완료</button>
                    </div>
                </div>
            </div>
        </>
    )
}