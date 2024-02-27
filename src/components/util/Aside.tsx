import React from "react";
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

const Aside = () => {
  const router = useRouter();
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
        <KPT />
        <div>회고</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname === "/community"}
        onClick={() => {
          router.push("/community");
        }}
      >
        <Community />
        <div>커뮤니티</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname === "/mypage"}
        onClick={() => {
          router.push("/mypage");
        }}
      >
        <MypageSvg />
        <div>마이페이지</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname === "/about"}
        onClick={() => {
          router.push("/");
        }}
      >
        <AboutSvg />
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
  z-index: 100;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SideBarDiv = styled.div(
  ({ routerInfo }: { routerInfo: boolean }) => [
    tw`
        w-full h-10 flex items-center gap-[11px] py-3 px-9 text-[17px] tracking-[-6%] cursor-pointer
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
