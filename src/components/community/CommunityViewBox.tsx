import React, { ReactNode, useState } from "react";
import { styled } from "twin.macro";
import MoreSvg from "@/img/svg/더보기 버튼.svg";
import pencil from "@/img/community/clarity_pencil-solid.png";
import trash from "@/img/community/tabler_trash-filled.png";
import Image from "next/image";
import useGetCommunityDetail from "@/query/get/useGetCommunityDetail";
import router from "next/router";
import dayjs from "dayjs";
import { useDeleteCommunity } from "@/query/delete/useDeleteCommunity";

const CommunityViewBox = () => {
  const id = router.query.id as string;
  const [open, setOpen] = useState(false);
  const { mainData } = useGetCommunityDetail({
    community_id: parseInt(id),
  });
  const { mutate } = useDeleteCommunity(parseInt(id));
  const deleteControl = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (window.confirm(`해당 게시글의 좋아요를 취소하시겠습니까?`)) {
      mutate();
      setOpen(!open);
      return;
    } else {
      setOpen(!open);
      return;
    }
  };
  const Flex_END = ({ children }: { children: ReactNode }) => {
    return (
      <div className="flex justify-between items-center mb-[18px]">
        {children}
      </div>
    );
  };
  return (
    <div className=" w-full flex flex-col items-center tracking-[-6%]">
      <CommunityBoxWrapper>
        <Flex_END>
          <div className="pl-[13px] font-bold text-2xl">{mainData.title}</div>
          <div className="text-[#373737]">
            {dayjs(mainData.written_at).format("YYYY년 MM월 DD일 hh:mm")}
          </div>
        </Flex_END>
        <Flex_END>
          <div className="pl-[13px] flex gap-2 items-center">
            <div className="font-semibold text-xl">작성자</div>
            <div className="h-9 rounded bg-[rgba(127,179,255,0.15)] px-4 py-1 text-lg">
              {mainData.writer_nickname}
            </div>
          </div>
          {!mainData.isMine ? null : (
            <div className="relative">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <MoreSvg />
              </div>
              {open && (
                <SelectModal>
                  <div
                    className="inner"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    수정하기
                    <Image src={pencil} alt="수정아이콘" />
                  </div>
                  <div className="w-full h-0 border-[#E0E0E0] border-[0.5px]"></div>
                  <div className="inner" onClick={deleteControl}>
                    삭제하기
                    <Image src={trash} alt="삭제아이콘" />
                  </div>
                </SelectModal>
              )}
            </div>
          )}
        </Flex_END>
        <CommunityTextArea value={mainData.content} disabled={true} />
      </CommunityBoxWrapper>
      <CommunitySubmitBtn onClick={() => router.push("/community")}>
        확인
      </CommunitySubmitBtn>
    </div>
  );
};

export default CommunityViewBox;

export const CommunityBoxWrapper = styled.div`
  border-radius: 15px;
  background-color: white;
  width: 1047px;
  height: 515px;
  margin-bottom: 34px;
  padding: 26px;
`;

export const CommunitySubmitBtn = styled.button`
  width: 140px;
  height: 55px;
  border-radius: 118px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #141416;
  font-weight: 700;
  font-size: 20px;
`;

export const CommunityTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  max-height: 362px;
  border-radius: 15px;
  background-color: #f6f7fb;
  padding: 17px 25px;
  overflow: scroll;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectModal = styled.div`
  z-index: 10;
  background-color: white;
  position: absolute;
  top: 30px;
  right: 10px;
  width: 124px;
  height: 75px;
  border-radius: 5px;
  padding: 0px 8px;
  box-shadow: 5px 5px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  .inner {
    width: 100%;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      background-color: #e0e0e0;
      border-radius: 5px;
    }
    &:active {
      background-color: gray;
      border-radius: 5px;
    }
  }
`;
