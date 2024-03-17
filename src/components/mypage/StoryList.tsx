import { getUserCommunity } from '@/apis/mypage/mypage';
import { PostListItem } from '@/types/myPageType';
import React, { useEffect, useState } from 'react'
import Story from './Story'

type Props = {}

export default function StoryList({ }: Props) {
    const [pageNumber, setPageNumber] = useState(1);
    const [storylist, setStorylist] = useState<PostListItem[]>([]);

    useEffect(()=>{
      getUserCommunity(pageNumber).then(data=>{
        setStorylist(data.postList)
      })  
    },[])
    
    return (
        <div className='p-[30px]'>
            <div className='text-[30px] mb-[30px]'>내가 작성한 글</div>
            <div>
                {
                    storylist.map((e) => {
                        return (
                            <Story title={e.title} text={e.content} time={e.time} />
                        )
                    })
                }
            </div>
        </div>
    )
}