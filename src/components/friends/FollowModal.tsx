import React, { ReactNode } from "react";
import { ModalLayout } from "../main/AlarmSideBar";
import { styled } from "twin.macro";
import X from "@/img/svg/x-box.svg";
import friendCloud from "@/img/friends/플라우디 로고.png";
import notFound from "@/img/friends/notFound.png";
import Image from "next/image";
import Plus from "@/img/svg/friends/plus.svg";
import useSearchFriend from "@/query/get/useSearchFriend";

type prop = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  check: string;
  setCheck: React.Dispatch<React.SetStateAction<string>>;
};

const FollowModal = (prop: prop) => {
  const onClose = () => {
    prop.setOpen(!prop.open);
    prop.setCheck("");
  };

  const { mainData } = useSearchFriend({
    nickname: prop.check,
  });

  const ArticleStyle = ({ children }: { children: ReactNode }) => {
    return (
      <article className="w-full h-full relative flex flex-col justify-center items-center">
        {children}
      </article>
    );
  };
  return (
    <ModalLayout>
      {mainData === null ? (
        <>
          <Modal className="nofriend">
            <ArticleStyle>
              <p
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => onClose()}
              >
                <X />
              </p>
              <Image src={notFound} alt="친구가 없을 경우" />
              <div className="font-bold text-[19px] tracking-[-6%] mt-4 mb-10">
                검색결과가 없습니다
              </div>
              <FollowModalBtn onClick={() => onClose()}>
                다시 검색하기
              </FollowModalBtn>
            </ArticleStyle>
          </Modal>
        </>
      ) : (
        <>
          <Modal>
            <ArticleStyle>
              <p
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => onClose()}
              >
                <X />
              </p>
              <Image
                src={friendCloud}
                width={146}
                height={115}
                alt="팔로우신청창"
              />
              <div className="text-[40px] leading-[20.4px] font-extrabold tracking-[-6%] mt-7 mb-4">
                {/* {mainData} */}
              </div>
              <div className="mb-8 text-[#828282] text-base tracking-[-6%]">
                {/* {mainData.introduction} <br />
                Email : {mainData.email} */}
              </div>
              <FollowModalBtn className="success">
                <Plus />
                팔로우 신청하기
              </FollowModalBtn>
            </ArticleStyle>
          </Modal>
        </>
      )}
    </ModalLayout>
  );
};

export default FollowModal;

const Modal = styled.div`
  background-color: white;
  width: 510px;
  height: 423px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  &.nofriend {
    width: 342.5px;
    height: 284px;
    border-radius: 13.43px;
  }
`;

const FollowModalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 38px;
  font-size: 15.76px;
  letter-spacing: -6%;
  line-height: 21.4px;
  background-color: #4c6fff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &.success {
    width: 219px;
    height: 56px;
    gap: 16px;
    line-height: 31.5px;
    font-size: 23.18px;
  }
`;
