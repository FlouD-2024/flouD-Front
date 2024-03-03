import React from 'react'
import Story from './Story'

type Props = {}

export default function StoryList({ }: Props) {
    const storyList = [
        {
            title: "이번 주 1일 1커밋",
            text: "일주일 간 하루도 빼놓지 않겠다... ",
            time: "2024년 1월 24일 (금) 오전 8:25"
        },
        {
            title: "매주 일요일 기술블로그 쓰기",
            text: "더이상 물러날 곳이 없당. ",
            time: "2024년 1월 22일 (금) 오후 6:12"
        },
        {
            title: "일기쓰겠습니다.",
            text: "올해는 정말로...",
            time: "2024년 1월 11일 (금) 오후 7:15"
        }
    ]
    return (
        <div className='p-[30px]'>
            <div className='text-[30px] mb-[30px]'>내가 작성한 글</div>
            <div>
                {
                    storyList.map((e) => {
                        return (
                            <Story title={e.title} text={e.text} time={e.time} />
                        )
                    })
                }
            </div>
        </div>
    )
}