import { myFriendPageNumAtom, myFriendPageInfoAtom } from "@/store/atom";
import { MyFriendList } from "@/types/myPageType";
import React from "react";
import { useRecoilState } from "recoil";
import Typography from "../Typography";
import MoveNext from "../util/MoveNext";
import FriendProfile from "./FriendProfile";

type Props = {
  friends: MyFriendList[];
};

export default function FriendList({ friends }: Props) {
  const [friendPageNum, setFriendPageNum] = useRecoilState(myFriendPageNumAtom);
  const [friendPageInfo, setFriendPageInfo] =
    useRecoilState(myFriendPageInfoAtom);

  return (
    <>
      <Typography
        title={`Friends (${friends.length})`}
        type={"bold30"}
        mt={30}
      />
      <div className="flex justify-start flex-wrap gap-[2.5%] m-[10px]">
        {friends.map((item) => {
          return (
            <FriendProfile
              key={item.friendship_id}
              friendship_id={item.friendship_id}
              nickname={item.nickname}
              introduction={item.introduction}
            />
          );
        })}
      </div>
      <div className="flex justify-end">
        <MoveNext
          isLast={friendPageInfo.last}
          currentPage={friendPageNum}
          setCurrentPage={setFriendPageNum}
        />
      </div>
    </>
  );
}
