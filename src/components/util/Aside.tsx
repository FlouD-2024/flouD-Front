import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import aside from "@/img/aside/목록 로고.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Main from "@/img/svg/aside/Main.svg";
import Friend from "@/img/svg/aside/Friend.svg";
import KPT from "@/img/svg/aside/KPT.svg";
import Community from "@/img/svg/aside/Community.svg";
import MypageSvg from "@/img/svg/aside/Mypage.svg";
import AboutSvg from "@/img/svg/aside/About.svg";
import MainUnClick from "@/img/svg/aside/MainUnclick.svg";
import FriendUnclick from "@/img/svg/aside/FriendUnClick.svg";
import KPTUnclick from "@/img/svg/aside/KPTUnClick.svg";
import CommunityUnclick from "@/img/svg/aside/CommunityUnclick.svg";
import AboutClick from "@/img/svg/aside/AboutClick.svg";
import MypageUnClick from "@/img/svg/aside/MypageUnclick.svg";
import MypageToggle from "@/img/svg/aside/MypageToggle.svg";

const Aside = () => {
  const router = useRouter();
  const [mypageInfo, setMypageInfo] = useState("info");
  const onClick = (str: string) => {
    setMypageInfo(str);
  };
  return (
    <SideBarWrapper>
      <div className="mt-[42px] mb-[33.3px]">
        <Image src={aside} alt="로고" />
      </div>
      <SideBarDiv
        routerInfo={router.pathname === "/main"}
        onClick={() => {
          router.push("/main");
        }}
      >
        {router.pathname === "/main" ? <Main /> : <MainUnClick />}
        <div>메인화면</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname === "/friends"}
        onClick={() => {
          router.push("/friends");
        }}
      >
        {router.pathname === "/friends" ? <Friend /> : <FriendUnclick />}
        <div>친구</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname === "/"}
        onClick={() => {
          router.push("/");
        }}
      >
        {router.pathname === "/" ? <KPT /> : <KPTUnclick />}
        <div>회고</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname === "/community"}
        onClick={() => {
          router.push("/community");
        }}
      >
        {router.pathname === "/community" ? (
          <Community />
        ) : (
          <CommunityUnclick />
        )}
        <div>커뮤니티</div>
      </SideBarDiv>
      {/* 여기 이름도 바뀔예정 */}
      <SideBarDiv
        routerInfo={router.pathname === "/"}
        onClick={() => {
          router.push("/mypage");
        }}
      >
        {/* 바뀌어야 되는데 안 바뀌어서 여기서 테스트 */}
        {router.pathname === "/" ? <MypageSvg /> : <MypageUnClick />}
        <div>마이페이지</div>
        <div className=" absolute left-[85%]">
          {router.pathname === "/" ? <MypageToggle /> : null}
        </div>
      </SideBarDiv>
      {router.pathname === "/" ? (
        <MypageDiv>
          <MypageText
            name={mypageInfo === "info"}
            onClick={() => onClick("info")}
          >
            내 정보 수정
          </MypageText>
          <MypageText
            name={mypageInfo === "confirm"}
            onClick={() => onClick("confirm")}
          >
            작성글 확인
          </MypageText>
          <MypageText
            name={mypageInfo === "friend"}
            onClick={() => onClick("friend")}
          >
            친구 관리
          </MypageText>
          <MypageText
            name={mypageInfo === "talk"}
            onClick={() => onClick("talk")}
          >
            문의하기
          </MypageText>
        </MypageDiv>
      ) : null}
      <SideBarDiv
        routerInfo={router.pathname === "/about"}
        onClick={() => {
          router.push("/");
        }}
      >
        {router.pathname === "/about" ? <AboutClick /> : <AboutSvg />}
        <div>About FlouD</div>
      </SideBarDiv>
    </SideBarWrapper>
  );
};

export default Aside;

export const SideBarWrapper = styled.div`
  position: sticky;
  top: 21px;
  left: 30px;
  width: 209px;
  height: 95vh;
  max-height: 902px;
  background-color: white;
  /* z-index: 100; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SideBarDiv = styled.div(
  ({ routerInfo }: { routerInfo: boolean }) => [
    tw`
        w-full h-10 relative flex items-center gap-[11px] py-3 px-9 text-[17px] tracking-[-6%] cursor-pointer
    `,
    routerInfo
      ? css`
          color: #2e48b0;
          background-color: rgba(76, 111, 255, 0.09);
          border-right: 3px solid #4c6fff;
        `
      : css`
          color: black;
        `,
  ]
);

const MypageDiv = styled.div`
  height: 183px;
  width: 100%;
  text-align: right;
  background-color: rgba(76, 111, 255, 0.09);
  border-right: 3px solid #4c6fff;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 10px 26px 10px 0px;
`;

const MypageText = styled.div(({ name }: { name: boolean }) => [
  css`
    color: #a2aaca;
    font-size: 17px;
    letter-spacing: -6%;
    font-weight: 500;
  `,
  name
    ? css`
        color: black;
      `
    : css``,
]);
