import router from "next/router";
import React, { useState } from "react";
import { styled } from "twin.macro";
import Story from "../mypage/Story";
import MoveNext from "../util/MoveNext";
import CommunityWrite from "./CommunityWrite";

interface CommunityCompoWrapperProps {
  setIsWrite: React.Dispatch<React.SetStateAction<boolean>>
}

const CommunityCompoWrapper = ({setIsWrite}:CommunityCompoWrapperProps) => {
  const [page, setPage] = useState(1);
  const [commuDetailClick, setCommuDetailClick] = useState();
  const [newDetailOpen, setNewDetailOpen] = useState(false);

  const clickNewDetail = () => {
    setNewDetailOpen(true)
  }
  
  const storyList = [
    {
      id: 1,
      title: "이번 주 1일 1커밋",
      text: "일주일 간 하루도 빼놓지 않겠다... ",
      time: "2024-01-24",
    },
    {
      id: 2,
      title: "매주 일요일 기술블로그 쓰기",
      text: "더이상 물러날 곳이 없당. ",
      time: "2024-01-22",
    },
    {
      id: 3,
      title: "일기쓰겠습니다.",
      text: "올해는 정말로...",
      time: "2024-01-11",
    },
  ];
  return (
    <>
      <SelectWrapper>
        <div className="w-[182px] h-13 flex justify-center border-b-4 border-b-[#4C6FFF] text-[#4C6FFF] tracking-[-6%] font-bold text-xl pb-4 z-10">
          회고 친구 구해요
        </div>
        <NewButton onClick={() => {
          setIsWrite(true)
          //router.push("/community/write");
        }}>
          <div>+</div>
          <div>New</div>
        </NewButton>
      </SelectWrapper>
      <SelectBorder />
      <div className="pt-[60px] px-3 mb-12">
        {/* 여기에 호버만 추가하면 될 듯! 이건 나중의 일! 이것도 8개!*/}
        <div className="flex-col flex gap-4">
          {storyList.map((e) => {
            return (
              <Story key={e.id} title={e.title} text={e.text} time={e.time} />
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <MoveNext totalPage={2} currentPage={page} setCurrentPage={setPage} />
      </div>
    </>
  );
};

export default CommunityCompoWrapper;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0px 9px;
`;

const NewButton = styled.button`
  border-radius: 10px;
  display: flex;
  color: white;
  background-color: #4c6fff;
  letter-spacing: -6%;
  font-size: 20px;
  font-weight: 300;
  gap: 10px;
  width: 124px;
  height: 39px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

const SelectBorder = styled.div`
  height: 0px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 98%;
  margin: -2px auto;
`;
