import React from 'react'
import Typography from '../Typography'
import FlouDs from '../aboutfloud/FlouDs'

type Props = {

}

export default function dd({ }: Props) {
    const members = [
        {
            part: "PM",
            name: "양나은"
        },
        {
            part: "DE",
            name: "정민지"
        },
        {
            part: "FE",
            name: "조민규"
        },
        {
            part: "FE",
            name: "민유빈"
        },
        {
            part: "BE",
            name: "김성준"
        }, {
            part: "BE",
            name: "강연수"
        }
    ]
    return (
        <div className="text-center">
            <Typography title="About FlouD" type="bold30"/>
            <div className='w-[100px] h-[1px] border-[1px] border-black mx-[auto] my-[50px]'></div>
            <Typography title="플라우디는 ~을 취지로" type="bold40-blue"/>
            <Typography title="만들어지게 되었습니다." type="bold40-blue"/>
            <div className='mt-[50px] mb-[70px]'>개발자들은 아래와 같습니다.</div>
            <div className='grid grid-rows-3 grid-cols-3 px-[120px]'>
                {
                    members.map((member) => {
                        return (
                            <FlouDs part={member.part} name={member.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}