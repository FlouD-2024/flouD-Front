import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { styled } from "twin.macro";
import Story from "../mypage/Story";
import MoveNext from "../util/MoveNext";
import CommunityWrite from "./CommunityWrite";
import useGetCommunity from "@/query/get/useGetCommunity";

interface CommunityCompoWrapperProps {
  setIsWrite: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommunityCompoWrapper = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const clickNewDetail = (community_id: number) => {
    router.push(`/community/view/${community_id}`);
  };
  const { mainData } = useGetCommunity({
    page: page,
  });
  useEffect(() => {
    setPage(mainData.pageInfo.nowPage);
  }, [page]);
  return (
    <>
      <SelectWrapper>
        <div className="w-[182px] h-13 flex justify-center border-b-4 border-b-[#4C6FFF] text-[#4C6FFF] tracking-[-6%] font-bold text-xl pb-4 z-10">
          회고 친구 구해요
        </div>
        <NewButton
          onClick={() => {
            router.push("/community/write");
          }}
        >
          <div>+</div>
          <div>New</div>
        </NewButton>
      </SelectWrapper>
      <SelectBorder />
      <div className="pt-[60px] px-3 mb-12">
        {/* 여기에 호버만 추가하면 될 듯! 이건 나중의 일! 이것도 8개!*/}
        <div className="flex-col flex gap-4">
          {mainData === null
            ? null
            : mainData.postList.map((e) => {
                return (
                  <div
                    key={e.community_id}
                    onClick={() => clickNewDetail(e.community_id)}
                  >
                    <Story title={e.title} text={e.content} />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <MoveNext
          isLast={mainData.pageInfo.last}
          currentPage={page}
          setCurrentPage={setPage}
        />
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
