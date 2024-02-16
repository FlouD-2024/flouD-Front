import React from "react";
import { css, styled } from "twin.macro";
import CheckBlue from "@/img/svg/lets-icons_check-fill.svg";
import WrtieCloud from "@/img/svg/friendCloud.svg";

type FriendCheck = {
  id: number;
  isWrite: boolean;
  name: string;
};

const FriendCard = (prop: FriendCheck) => {
  return (
    <CardWrapper>
      <Card className="photo" hasEven={prop.id % 2 == 0}>
        <div className="mb-[15px]">
          <WrtieCloud />
        </div>
        {prop.name}
      </Card>
      <Card className="complete" hasEven={prop.id % 2 == 0}>
        {prop.isWrite ? "회고작성완료" : "회고 미작성"}
        {prop.isWrite ? (
          <>
            <CheckBlue />
          </>
        ) : null}
      </Card>
    </CardWrapper>
  );
};

export default FriendCard;

const CardWrapper = styled.div(() => [
  css`
    width: 232px;
    height: 260px;
    border-radius: 20px;
    background-color: white;
  `,
]);

const Card = styled.div(({ hasEven }: { hasEven: boolean }) => [
  css`
    &.photo {
      margin: 16px 13px 26px 13px;
      box-sizing: border-box;
      height: 160px;
      border-top-left-radius: 17.76px;
      border-top-right-radius: 17.76px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      letter-spacing: -6%;
      font-size: 23.14px;
      font-weight: 700;
    }
    &.complete {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23.14px;
      letter-spacing: -6%;
      font-weight: 700;
    }
  `,
  hasEven
    ? css`
        &.photo {
          background-color: #e6e2ff;
        }
      `
    : css`
        &.photo {
          background-color: rgba(76, 111, 255, 0.16);
        }
      `,
]);
