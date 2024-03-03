import { pageNumAtom } from "@/store/atom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { styled } from "twin.macro";

type prop = {
  totalPage: number;
  currentPage: number;
};

const MoveNext = (prop: prop) => {
  // 이건 상태이상으로 담아둬야겠다...
  const setPage = useSetRecoilState(pageNumAtom);
  const onPrev = () => {
    if (prop.currentPage !== 1) setPage(prop.currentPage - 1);
    else if (prop.currentPage === 1) return;
  };
  const onNext = () => {
    if (prop.currentPage !== prop.totalPage) setPage(prop.currentPage + 1);
    else if (prop.currentPage === prop.totalPage) return;
  };
  return (
    <BtnWrapper>
      <div className="mr-2">next</div>
      <div
        onClick={() => onPrev()}
        style={{
          color: prop.currentPage === 1 ? "#D9D9D9" : "black",
        }}
      >
        {"<"}
      </div>
      <div
        onClick={() => onNext()}
        style={{
          color: prop.currentPage === prop.totalPage ? "#D9D9D9" : "black",
        }}
      >
        {">"}
      </div>
    </BtnWrapper>
  );
};

export default MoveNext;

const BtnWrapper = styled.div`
  width: 162px;
  height: 45px;
  background-color: white;
  border-radius: 15px;
  font-size: 23.14px;
  line-height: 29.4px;
  letter-spacing: -6%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
