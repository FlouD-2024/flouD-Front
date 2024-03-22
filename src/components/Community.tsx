import React from 'react'

type Props = {}

export default function Community({ }: Props) {
    return (
        <>
            <div className="text-[30px] font-bold mb-3">Community</div>
            <div className="flex justify-between">
                <div>
                    <div>회고친구 구해요 </div>
                </div>
                <button className="bg-[#4c6fff] text-white rounded-[10px] px-[20px] py-[5px]">+ New</button>
            </div>
            <div className="my-[20px] rounded-r-[10px] bg-[white] px-[20px] py-[15px] 
                        hover:bg-[#4C6FFF] hover:text-[white] hover:border-[#0500E5]">
            <div className="text-[30px] font-bold mb-3">글제목</div>
            <div className="text-[#7f7f7f] text-[18px]">글내용</div>
        </div>
            
        </>

    )
}