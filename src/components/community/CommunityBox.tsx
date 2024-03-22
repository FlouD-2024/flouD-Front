import useGetCommunityDetail from "@/query/get/useGetCommunityDetail";
import useGetUserInfo from "@/query/get/useGetUserInfo";
import router from "next/router";
import React, { useEffect } from "react";
import tw, { css, styled } from "twin.macro";
import CommunityBoxCompo from "./CommunityBoxCompo";

const CommunityBox = () => {
  const { userInfo } = useGetUserInfo();
  const isEditPage = router.pathname.includes("edit");
  const id = isEditPage ? (router.query.id as string) : "";
  function EditComponent({ id }: { id: string }) {
    const { mainData } = useGetCommunityDetail({
      community_id: parseInt(id),
    });
    useEffect(() => {
      if (mainData.my_nickname !== mainData.writer_nickname) {
        alert("남이 작성한 글에는 수정할 수 없습니다.");
        router.replace("/community");
      }
    }, []);
    return (
      <div className=" w-full flex flex-col items-center tracking-[-6%]">
        <CommunityBoxCompo
          title={mainData.title}
          data={mainData.content}
          nickname={userInfo.nickname}
        />
      </div>
    );
  }
  if (!router.pathname.includes("/edit")) {
    return (
      <div className=" w-full flex flex-col items-center tracking-[-6%]">
        <CommunityBoxCompo title={""} data={""} nickname={userInfo.nickname} />
      </div>
    );
  } else {
    return <EditComponent id={id} />;
  }
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
  :disabled {
    background-color: #cccccc;
  }
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
