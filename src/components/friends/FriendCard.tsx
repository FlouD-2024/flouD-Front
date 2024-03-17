import React, { useState } from "react";
import { css, styled } from "twin.macro";
import CheckBlue from "@/img/svg/lets-icons_check-fill.svg";
import friendCloud from "@/img/friends/friendCloud.png";
import DoNotWrite from "@/img/svg/friends/friendNotCloud.svg";
import Image from "next/image";
import dayjs from "dayjs";
import ShowKPTModal from "../util/ShowKPTModal";
import FriendNotWrite from "./FriendNotWrite";
import ShowKPTFriendModal from "../util/ShowKPTFriendModal";

type FriendCheck = {
  id: number;
  isWrite: boolean;
  name: string;
  date: dayjs.Dayjs;
};

const FriendCard = (prop: FriendCheck) => {
  const [open, setOpen] = useState(false);
  const [unOpen, setUnOpen] = useState(false);
  const onClick = (isWrite: boolean) => {
    if (isWrite) setOpen(!open);
    else setUnOpen(!unOpen);
  };
  return (
    <>
      <CardWrapper onClick={() => onClick(prop.isWrite)}>
        <Card
          className="photo"
          hasEven={prop.id % 2 == 0}
          isWrite={prop.isWrite ? true : false}
        >
          <div className="mb-[15px]">
            {prop.isWrite ? (
              <Image src={friendCloud} alt="활성화 구름" />
            ) : (
              <DoNotWrite />
            )}
          </div>
          {prop.name}
        </Card>
        <Card
          className="complete"
          hasEven={prop.id % 2 == 0}
          isWrite={prop.isWrite ? true : false}
        >
          {prop.isWrite ? "회고작성완료" : "회고 미작성"}
          {prop.isWrite ? (
            <>
              <CheckBlue />
            </>
          ) : null}
        </Card>
      </CardWrapper>
      {open && prop.isWrite && (
        <ShowKPTFriendModal
          open={open}
          setOpen={setOpen}
          id={prop.id}
          date={prop.date.toDate()}
          name={prop.name}
        />
      )}
      {unOpen && (
        <FriendNotWrite open={unOpen} setOpen={setUnOpen} name={prop.name} />
      )}
    </>
  );
};

export default FriendCard;

const CardWrapper = styled.div(() => [
  css`
    width: 232px;
    height: 260px;
    border-radius: 20px;
    background-color: white;
    padding-top: 2px;
  `,
]);

const Card = styled.div(
  ({ hasEven, isWrite }: { hasEven: boolean; isWrite: boolean }) => [
    css`
      &.photo {
        margin: 16px 13px 20px 13px;
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
    isWrite
      ? hasEven
        ? css`
            &.photo {
              background-color: #e6e2ff;
            }
          `
        : css`
            &.photo {
              background-color: rgba(76, 111, 255, 0.16);
            }
          `
      : css`
          &.photo {
            background-color: #d9d9d9;
          }
        `,
  ]
);
