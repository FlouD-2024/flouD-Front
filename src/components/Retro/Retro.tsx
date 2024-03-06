import { retroCompleteModalOpenAtom, retroDetailOpenAtom, retroTodayOpenAtom } from '@/store/atom'
import React from 'react'
import { useRecoilState } from 'recoil'
import RetroDetail from './RetroDetail'
import RetroEmpty from './RetroEmpty'
import RetroList from './RetroList'
import RetroToday from './RetroToday'
import RetroCompleteModal from './RetroCompleteModal'

type Props = {}

export default function Retro({ }: Props) {
    const testData = [
        {
            "memoir_id": 3,
            "title": "제목입니다3",
            "created_at": "2024-03-03"
        },
        {
            "memoir_id": 4,
            "title": "제목입니다4",
            "created_at": "2024-03-04"
        },
        {
            "memoir_id": 5,
            "title": "제목입니다5",
            "created_at": "2024-03-05"
        }
    ]
    const [retroDetailOpen, setRetroDetailOpend] = useRecoilState(retroDetailOpenAtom)
    const [retroTodayOpen, setRetroTodayOpend] = useRecoilState(retroTodayOpenAtom)
    const [retroCompleteModalOpen, setRetroCompleteModalOpen] = useRecoilState(retroCompleteModalOpenAtom)
    const onNewBtnClick = () =>{
        //조건 걸어야 댐 [회고 단일 조회 API 활용]
        setRetroTodayOpend(true)
        // setRetroCompleteModalOpen(true)
    }
    return (
        <>
            {
                retroTodayOpen
                    ?
                    <RetroToday />
                    :
                    <>
                        <p className="text-[20px] text-[#4C6FFF]">회고기록</p>
                        <div className="text-[40px] font-bold">2024 My FlouD Record</div>
                        <div className="flex justify-between">
                            <div className='mb-[50px]'>
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
                            <button 
                                className="bg-[#4c6fff] h-[40px] text-white rounded-[10px] px-[20px]"
                                onClick={()=>onNewBtnClick()}
                            >+  New</button>
                        </div>
                        {
                            testData.length == 0
                                ?
                                <RetroEmpty />
                                :
                                <>
                                    {
                                        retroDetailOpen && <RetroDetail />
                                    }
                                    <div className='grid grid-cols-2 gap-[20px]'>
                                        {
                                            testData.map((data) => {
                                                return (<RetroList memoirId={data.memoir_id} date={data.created_at} retro={data.title} />)
                                            })
                                        }
                                    </div>
                                </>
                        }
                        {
                            retroCompleteModalOpen && <RetroCompleteModal/>
                        }
                    </>
            }
        </>
    )
}