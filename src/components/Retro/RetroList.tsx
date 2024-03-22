import { retroDetailDateAtom, retroDetailOpenAtom } from '@/store/atom'
import styled from '@emotion/styled'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {
  memoirId: number,
  date: string,
  retro: string
}

export default function RetroList({memoirId, date, retro}: Props) {
  const [retroDetailDate, setRetroDetailDate] = useRecoilState(retroDetailDateAtom)
  const [retroDetailOpen, setRetroDetailOpend] = useRecoilState(retroDetailOpenAtom)
  return (
    <>
        <RetroListWrapper className="mr-[20px] w-[100%] rounded-r-[10px] bg-[white] border-[#4C6FFF] border-l-4 px-[20px] py-[15px] 
                        hover:bg-[#4C6FFF] hover:text-[white] hover:border-[#0500E5]"
                        onClick={()=>{
                          setRetroDetailDate(date)
                          setRetroDetailOpend(true)
                        }}>
            <div className="text-[30px] font-bold mb-3">{date}  회고</div>
            <div className="text-[#7f7f7f] text-[18px] ">{retro}</div>
        </RetroListWrapper>
    </>
  )
}

const RetroListWrapper = styled.div`
  :hover > div {
    color: white
  } 
`;