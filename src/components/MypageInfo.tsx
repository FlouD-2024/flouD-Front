import React from 'react'
import Typography from './Typography'

type Props = {}

export default function MypageInfo({}: Props) {
  return (
    <>
        <div className='bg-[white]'>
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
                    <Typography title={'D-DAY 설정'} type={'bold20'} />
                    <div className='text-[12px] text-[#ACACAC]'>최대 3개까지 설정 가능 </div>
                    <div className='flex justify-between'>
                        <div className='bg-[#4C6FFF]/10 h-20px rounded-[10px] w-[280px] h-[124px] p-[10px]'>
                            <input className='bg-[#4C6FFF]/0 w-[235px]'></input>
                            <button className='bg-[#4C6FFF] text-white px-[7px] py-[2px] rounded-[5px]'>X</button>
                        </div>
                        <div className='bg-[#4C6FFF]/10 h-20px rounded-[10px] w-[280px] h-[124px] p-[10px]'>
                            <input className='bg-[#4C6FFF]/0 w-[235px]'></input>
                            <button className='bg-[#4C6FFF] text-white px-[7px] py-[2px] rounded-[5px]'>X</button>
                        </div>
                        <div className='bg-[#4C6FFF]/10 h-20px rounded-[10px] w-[280px] h-[124px] p-[10px]'>
                            <input className='bg-[#4C6FFF]/0 w-[235px]'></input>
                            <button className='bg-[#4C6FFF] text-white px-[7px] py-[2px] rounded-[5px]'>X</button>
                        </div>
                    </div>
                    <button className='bg-[#4C6FFF] text-white px-[30px] py-[5px] rounded-[10px] my-[30px] mx-[43%]'>변경 완료</button>
                </div>
            </div>
    </>
  )
}