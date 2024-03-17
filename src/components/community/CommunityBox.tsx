import useGetUserInfo from "@/query/get/useGetUserInfo";
import { usePostCommunity } from "@/query/post/usePostCommunity";
import React, { ReactNode, useCallback, useState } from "react";
import tw, { css, styled } from "twin.macro";

const CommunityBox = () => {
  const [data, setData] = useState<string>("");
  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  }, []);
  const [title, setTitle] = useState<string>("");
  const onTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );
  const { mutate } = usePostCommunity({
    prop: {
      title: title,
      content: data,
      postType: "FIND_FRIEND",
    },
  });
  const onClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    mutate();
  };
  const { userInfo } = useGetUserInfo();
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
          <CommunityTitleInput
            value={title}
            onChange={onTitleChange}
            type="text"
            placeholder="제목을 입력하세요(30자 이내)"
            maxLength={30}
          />
        </Flex_END>
        <Flex_END>
          <div className="pl-[13px] flex gap-2 items-center">
            <div className="font-semibold text-xl">작성자</div>
            <div className="h-9 rounded bg-[rgba(127,179,255,0.15)] px-4 py-1 text-lg">
              {userInfo.nickname}
            </div>
          </div>
        </Flex_END>
        <CommunityTextArea value={data} onChange={onChange} />
      </CommunityBoxWrapper>
      <CommunitySubmitBtn onClick={onClick}>게시하기</CommunitySubmitBtn>
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

export const CommunityTitleInput = styled.input(() => [
  tw`w-full pl-[13px] font-bold text-2xl h-7`,
  css`
    overflow: scroll;
    :focus {
      outline: none;
    }
  `,
]);

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
