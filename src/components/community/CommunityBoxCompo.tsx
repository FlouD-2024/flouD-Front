import React, { ReactNode, useCallback, useState } from "react";
import {
  CommunityBoxWrapper,
  CommunitySubmitBtn,
  CommunityTextArea,
  CommunityTitleInput,
} from "./CommunityBox";
import { usePostCommunity } from "@/query/post/usePostCommunity";
import { usePutCommunity } from "@/query/patch/usePutCommunity";
import router from "next/router";

interface CommunityBoxCompoProps {
  title: string;
  data: string;
  nickname: string;
}

const CommunityBoxCompo = (prop: CommunityBoxCompoProps) => {
  const isEditPage = router.pathname.includes("edit");
  const id = isEditPage ? (router.query.id as string) : "";
  const [title, setTitle] = useState(prop.title);
  const [data, setData] = useState(prop.data);
  const { mutate: mutatePost } = usePostCommunity({
    prop: {
      title: title,
      content: data,
      postType: "FIND_FRIEND",
    },
  });
  const { mutate: mutatePut } = usePutCommunity({
    prop: {
      community_id: parseInt(id),
      title: title,
      content: data,
      postType: "FIND_FRIEND",
    },
  });
  const onClick = () => {
    if (!router.pathname.includes("/edit")) {
      mutatePost();
    } else {
      mutatePut();
    }
  };
  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  }, []);
  const onTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const Flex_END = useCallback(({ children }: { children: ReactNode }) => {
    return (
      <div className="flex justify-between items-center mb-[18px]">
        {children}
      </div>
    );
  }, []);

  return (
    <>
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
              {prop.nickname}
            </div>
          </div>
        </Flex_END>
        <CommunityTextArea value={data} onChange={onChange} />
      </CommunityBoxWrapper>
      <CommunitySubmitBtn
        onClick={(e: React.MouseEvent | React.TouchEvent) => {
          e.stopPropagation();
          onClick();
        }}
        disabled={title === "" || data === "" ? true : false}
      >
        게시하기
      </CommunitySubmitBtn>
    </>
  );
};

export default CommunityBoxCompo;
