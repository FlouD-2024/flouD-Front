import styled from '@emotion/styled';
import React from 'react'

type Props = {
    title: string,
    text: string,
    time: string
}

export default function Story({ title, text, time }: Props) {
    return (
        <>
            <CommunityWrapper className='bg-[white] rounded-[5px] px-[35px] py-[25px] m-[10px]'>
                <div className='flex justify-between '>
                    <div className='text-[30px] font-bold'>{title}</div>
                    <div className='text-[15px]'>{time}</div>
                </div>
                <div className='text-[20px] mt-[5px]'>{text}</div>
            </CommunityWrapper>
        </>
    )
}

const CommunityWrapper = styled.div`
  :hover{
    background-color: #4C6FFF;
    color: white;
  } 
  cursor: pointer;
`;