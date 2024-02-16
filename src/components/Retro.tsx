import React from 'react'
import RetroDetail from './RetroDetail'
import RetroList from './RetroList'

type Props = {}

export default function Retro({ }: Props) {
    return (
        <>
            <p className="text-[20px] text-[#4C6FFF]">회고기록</p>
            <div className="text-[40px] font-bold">2024 My FlouD Record</div>
            <div className="flex justify-between">
                <div>
                    <select className="px-[30px] py-[5px] mr-[20px] rounded-[10px]">
                        <option>1월</option>
                        <option>2월</option>
                        <option>3월</option>
                        <option>4월</option>
                        <option>5월</option>
                    </select>
                    <select className="px-[30px] py-[5px] mr-[20px] rounded-[10px]">
                            <option >1주차</option>
                            <option >2주차</option>
                            <option >3주차</option>
                            <option >4주차</option>
                    </select>
                </div>
                <button className="bg-[#4c6fff] text-white rounded-[10px] px-[20px] py-[5px]">+ New</button>
            </div>
            <RetroList/>
        </>
    )
}