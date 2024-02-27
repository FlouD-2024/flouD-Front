import React from 'react'

interface Props {
    title: string,
    type: "bold20" | "bold40-blue" | "bold30"
}

export default function Typography({title, type}: Props) {
    const render = () => {
        if(type === 'bold20'){
            return <div className='text-[20px] mr-[10px] mb-[10px]'>{title}</div>
        } else if(type === 'bold40-blue'){
            return <div className='text-[40px] text-[#4c6fff] font-semibold pb-[30px]'>{title}</div>
        } else if(type === 'bold30'){
            return <div className='text-[30px] font-semibold mt-[30px]'>{title}</div>
        } 
    }

    return (
        <>
            {render()}
        </>
    )
}