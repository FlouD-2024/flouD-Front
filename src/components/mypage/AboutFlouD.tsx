import React from 'react'
import FlouDs from './FlouDs'

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
        <>
            <div>About FlouD</div>
            <div>플라우디는 ~을 취지로 만들어지게 되었습니다.</div>
            <div>개발자들은 아래와 같습니다.</div>
            <div className='grid grid-rows-3 grid-cols-3'>
                {
                    members.map((member) => {
                        return (
                            <FlouDs part={member.part} name={member.name} />
                        )
                    })
                }
            </div>
        </>
    )
}