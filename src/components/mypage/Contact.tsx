import React from 'react'
import Typography from '../Typography'
import Image from "next/image";
import Instagram from "@/img/Mypage/Instagram.png"
import Email from "@/img/Mypage/Email.png"
import Blue from "@/img/Mypage/BlueEllipse.png"


type Props = {}

export default function Contact({ }: Props) {
    return (
        <>
            <div className='p-[30px]'>
                <div className='flex'>
                    <div>
                        <Image src={Blue} className='object-contain' />
                    </div>
                    <Typography title={'어떻게 도와드릴까요?'} type={"bold40-blue"} />
                </div>
                <div className='mt-[10px] mb-[35px]'>
                    <Typography title={'플라우디에 직접 연락하는 가장 좋은 방법은 다음과 같습니다.'} type={"regular25"} />
                </div>

                <div className='bg-[white] text-center rounded-[5px] px-[35px] py-[25px] mx-[10px] my-[30px]'>
                    <div className='flex-col justify-between '>
                        <Image src={Instagram} className="m-[auto]" />
                        <Typography title={'인스타그램'} type={'bold25'} />
                        <Typography title={'@DFKDJFKDJF로 연락주시면 확인 후 답변드리겠습니다.'} type={'regular25'} />
                    </div>
                </div>
                <div className='bg-[white] text-center rounded-[5px] px-[35px] py-[25px] mx-[10px] my-[30px]'>
                    <div className='flex-col justify-between '>
                        <Image src={Email} className="m-[auto]" />
                        <Typography title={'이메일'} type={'bold25'} />
                        <Typography title={'djghasdghk@naver.com로 연락주시면 확인 후 답변드리겠습니다.'} type={'regular25'} />
                    </div>
                </div>
            </div>
        </>
    )
}