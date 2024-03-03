import React from 'react'

interface Props {
    title: string,
    type: "bold20" | "bold40-blue" | "bold30" | "bold25" | "regular25",
    mt?: number 
}

export default function Typography({title, type, mt=0}: Props) {
    const render = () => {
        if(type === 'bold20'){
            return <div className='text-[20px] mr-[10px] mb-[10px]'>{title}</div>
        } else if(type === 'bold40-blue'){
            return <div className='text-[40px] text-[#4c6fff] font-semibold'>{title}</div>
        } else if(type === 'bold30'){
            return <div className={`text-[30px] font-semibold mt-[${mt}px]`}>{title}</div>
        } else if(type === 'bold25'){
            return <div className='text-[25px] text-[#606060] font-semibold mt-[10px]'>{title}</div>
        } else if(type === 'regular25'){
            return <div className='text-[25px] text-[#606060] mt-[7px]'>{title}</div>
        } 
        
    }

    return (
        <>
            {render()}
        </>
    )
}