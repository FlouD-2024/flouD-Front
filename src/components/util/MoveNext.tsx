import React from "react";
import { styled } from "twin.macro";

type prop = {
  isLast: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const MoveNext = (prop: prop) => {
  // 이건 상태이상으로 담아둬야겠다...
  const onPrev = () => {
    if (prop.currentPage !== 0) prop.setCurrentPage(prop.currentPage - 1);
    else if (prop.currentPage === 0) return;
  };
  const onNext = () => {
    if (prop.isLast === false) prop.setCurrentPage(prop.currentPage + 1);
    else return;
  };
  return (
    <BtnWrapper>
      <div
        onClick={() => onPrev()}
        style={{
          color: prop.currentPage === 0 ? "#D9D9D9" : "black",
        }}
      >
        {"<"}
      </div>
      <div className="w-[2px] text-[#d9d9d9] text-[20px]">|</div>
      <div
        onClick={() => onNext()}
        style={{
          color: prop.isLast ? "#D9D9D9" : "black",
        }}
      >
        {">"}
      </div>
    </BtnWrapper>
  );
};

export default MoveNext;

const BtnWrapper = styled.div`
  width: 100px;
  height: 40px;
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
