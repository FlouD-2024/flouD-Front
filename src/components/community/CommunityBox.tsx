import React, { ReactNode, useState } from "react";
import { styled } from "twin.macro";

const CommunityBox = ({ isWrite }: { isWrite: boolean }) => {
  const [data, setData] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };
  const Flex_END = ({ children }: { children: ReactNode }) => {
    return <div className="items-center flex justify-between">{children}</div>;
  };
  return (
    <div className=" w-full flex flex-col items-center tracking-[-6%]">
      <CommunityBoxWrapper>
        <Flex_END>
          <div className="pl-[13px] font-bold text-2xl mb-[18px]">글제목</div>
        </Flex_END>
        <Flex_END>
          <div className="pl-[13px] flex gap-2 items-center mb-6">
            <div className="font-semibold text-xl">작성자</div>
            <div className="h-9 rounded bg-[rgba(127,179,255,0.15)] px-4 py-1 text-lg">
              정민지퐁퐁
            </div>
          </div>
        </Flex_END>
        <CommunityTextArea value={data} onChange={onChange} />
      </CommunityBoxWrapper>
      <CommunitySubmitBtn>{isWrite ? "게시하기" : "확인"}</CommunitySubmitBtn>
    </div>
  );
};

export default CommunityBox;

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
