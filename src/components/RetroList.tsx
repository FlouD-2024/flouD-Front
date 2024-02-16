import React from 'react'

type Props = {}

export default function RetroList({}: Props) {
  return (
    <>
        <div className="my-[20px] mr-[20px] w-[490px] rounded-r-[10px] bg-[white] border-[#4C6FFF] border-l-4 px-[20px] py-[15px] 
                        hover:bg-[#4C6FFF] hover:text-[white] hover:border-[#0500E5]">
            <div className="text-[30px] font-bold mb-3">1월 N일 회고</div>
            <div className="text-[#7f7f7f] text-[18px] ">아무래도 개망한 듯, 토익 언제하지?</div>
        </div>
    </>
  )
}