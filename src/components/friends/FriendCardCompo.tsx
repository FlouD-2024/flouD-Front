import {
  FriendsTestData,
  OtherFriendsTestData,
  TotalFriendCardProp,
} from "@/store/testData";
import React, { useEffect, useState } from "react";
import { styled } from "twin.macro";
import LeftBtn from "@/img/svg/chevron_left.svg";
import RightBtn from "@/img/svg/chevron_right.svg";
import dayjs from "dayjs";
import FriendCard from "./FriendCard";

const FriendCardCompo = () => {
  const [data, setData] = useState<TotalFriendCardProp>();
  const [day, setDay] = useState(dayjs());
  useEffect(() => {
    if (day.format("YYYY-MM-DD") === "2024-02-14") {
      setData(FriendsTestData);
    } else if (day.format("YYYY-MM-DD") === "2024-02-13") {
      setData(OtherFriendsTestData);
    } else {
      setData(undefined);
    }
  }, [day]);
  return (
    <div>
      <div className="flex justify-between items-center w-full ">
        <div className="font-bold tracking-[-6%] text-[40px]">
          Friend({data?.friendsCard.length})
        </div>
        <DayButtonWrapper>
          <button
            className=" cursor-pointer"
            onClick={() => {
              setDay(day.subtract(1, "day"));
            }}
          >
            <LeftBtn />
          </button>
          <div>{day.format("M월 DD일")}</div>
          <button
            className=" cursor-pointer"
            onClick={() => {
              setDay(day.add(1, "day"));
            }}
          >
            <RightBtn />
          </button>
        </DayButtonWrapper>
      </div>
      <CardSortWrapper>
        {typeof data === "undefined"
          ? null
          : data.friendsCard.map((e) => {
              return (
                <>
                  <div
                    style={{
                      order: e.isWrite ? "1" : "2",
                    }}
                  >
                    <FriendCard
                      key={e.friendId}
                      id={e.friendId}
                      name={e.name}
                      isWrite={e.isWrite}
                    />
                  </div>
                </>
              );
            })}
      </CardSortWrapper>
    </div>
  );
};

export default FriendCardCompo;

const CardSortWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 35px;
  row-gap: 48px;
  width: 1100px;
  height: 621px;
`;

const DayButtonWrapper = styled.div`
  width: 210px;
  height: 46.6px;
  border-radius: 17.7px;
  background-color: #4c6fff;
  color: white;
  box-shadow: 5.9px rgba(127, 179, 255, 0.29);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17.7px;
  letter-spacing: -6%;
  line-height: 15px;
  font-weight: 700;
`;
