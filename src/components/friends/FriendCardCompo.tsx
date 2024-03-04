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
import ContentNav from "../util/ContentNav";
import Search from "@/img/svg/friends/search.svg";
import FollowModal from "./FollowModal";
import MoveNext from "../util/MoveNext";
import { useRecoilValue } from "recoil";
import { pageNumAtom } from "@/store/atom";

const FriendCardCompo = () => {
  // 여기서 그 신청창 팝업 만들고 그러면 될 듯?
  // next는 일단 나중으로 생각해보고... 얘네 백엔드가 어떻게 오는지
  // 없는거 눌렀을 때는 없다는 팝업창만 일단 띄우자..!
  const [data, setData] = useState<TotalFriendCardProp>({
    day: dayjs().toDate(),
    friendsCard: [],
  });
  const [day, setDay] = useState(dayjs());
  const [searchValue, setSearchValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const page = useRecoilValue(pageNumAtom);
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && open === false) {
      if (searchValue === "아리" || searchValue === "dkfl") {
        setOpen(!open);
        setCheck("Found");
      } else {
        setOpen(!open);
        setCheck("notFound");
      }
      setSearchValue("");
    }
  };
  useEffect(() => {
    if (day.format("YYYY-MM-DD") === "2024-02-28") {
      setData(FriendsTestData);
    } else if (day.format("YYYY-MM-DD") === "2024-02-26") {
      setData(OtherFriendsTestData);
    } else {
      setData({
        day: dayjs().toDate(),
        friendsCard: [],
      });
    }
  }, [day]);
  return (
    <div>
      <div className="flex w-full h-[60px] justify-between items-center mb-10">
        <div className="w-[413px] h-[51px] rounded-[17.54px] bg-white py-2.5 px-[15px] flex gap-[20px]">
          <Search />
          <IDSearchFriendInput
            placeholder="ID로 친구추가하기"
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
          />
        </div>
        <ContentNav />
      </div>
      <div className="flex pl-[31px] items-center w-full mb-14">
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
                      date={day}
                    />
                  </div>
                </>
              );
            })}
      </CardSortWrapper>
      {open && (
        <FollowModal
          open={open}
          setOpen={setOpen}
          check={check}
          setCheck={setCheck}
        />
      )}
      <div className="w-full flex justify-end">
        <MoveNext totalPage={2} currentPage={page} />
      </div>
    </div>
  );
};

export default FriendCardCompo;

const CardSortWrapper = styled.div`
  display: flex;
  padding-left: 60px;
  flex-wrap: wrap;
  column-gap: 35px;
  row-gap: 48px;
  width: 1100px;
  height: 621px;
`;

const DayButtonWrapper = styled.div`
  width: 210px;
  height: 46.6px;
  position: relative;
  left: 30%;
  border-radius: 17.7px;
  background-color: #4c6fff;
  color: white;
  box-shadow: 0px 0px 0px 5.9px rgba(127, 179, 255, 0.29);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17.7px;
  letter-spacing: -6%;
  line-height: 15px;
  font-weight: 700;
`;

const IDSearchFriendInput = styled.input`
  width: 100%;
  color: #808080;
  font-weight: 800;
  line-height: 25.4px;
  letter-spacing: -6%;
  :focus {
    outline: none;
  }
`;