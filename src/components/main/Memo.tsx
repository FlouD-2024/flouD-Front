import React, { useState } from "react";
import { css, styled } from "twin.macro";

type IMemo = {
  memo: string;
  yesterday_try: string;
};

const Memo = (prop: IMemo) => {
  const [showPart, setShowPart] = useState("MEMO");
  return (
    <MemoWrapper>
      <ToggleButtonWrapper>
        <ToggleBtn
          hasType={showPart === "MEMO"}
          onClick={() => setShowPart("MEMO")}
        >
          MEMO
        </ToggleBtn>
        <ToggleBtn
          hasType={showPart === "TRY"}
          onClick={() => setShowPart("TRY")}
        >
          TRY
        </ToggleBtn>
      </ToggleButtonWrapper>
      <div>
        {showPart === "MEMO" ? (
          <ContentBox>{prop.memo}</ContentBox>
        ) : (
          //이거 글자수 제한만 두면 될 듯...
          <ContentBox>{prop.yesterday_try}</ContentBox>
        )}
      </div>
    </MemoWrapper>
  );
};

export default Memo;

const MemoWrapper = styled.div`
  width: 466px;
  height: 310px;
  background-color: white;
  border-radius: 30.45px;
  position: relative;
`;

const ToggleButtonWrapper = styled.div`
  background-color: #87b7ff;
  position: absolute;
  top: 10%;
  left: 7%;
  width: 182.59px;
  height: 45.88px;
  border-radius: 18.35px;
  padding: 5px;
  display: flex;
`;

const ContentBox = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20% 7% 0% 7%;
  max-width: 100%;
  max-height: 80%;
`;

const ToggleBtn = styled.button(({ hasType }: { hasType: boolean }) => [
  css`
    width: 90.83px;
    height: 35.78px;
    border-radius: 16.78px;
    font-weight: 700;
    font-size: 18.35px;
    letter-spacing: -6%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  hasType
    ? css`
        background-color: white;
        color: black;
      `
    : css`
        background-color: transparent;
        color: white;
      `,
]);
