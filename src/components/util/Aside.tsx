import React from "react";
import tw, { css, styled } from "twin.macro";
import aside from "@/img/aside/listLogo.png";
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
import mainCloud from "@/img/aside/list_floudLogo.png";

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
        routerInfo={router.pathname.includes("/retro")}
        onClick={() => {
          router.push("/retro");
        }}
      >
        {router.pathname.includes("/retro") ? <KPT /> : <KPTUnclick />}
        <div>회고</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname.includes("/community")}
        onClick={() => {
          router.push("/community");
        }}
      >
        {router.pathname.includes("/community") ? (
          <Community />
        ) : (
          <CommunityUnclick />
        )}
        <div>커뮤니티</div>
      </SideBarDiv>
      <SideBarDiv
        routerInfo={router.pathname.includes("/mypage")}
        onClick={() => {
          router.push("/mypage/mypageInfo");
        }}
      >
        {router.pathname.includes("/mypage") ? (
          <MypageSvg />
        ) : (
          <MypageUnClick />
        )}
        <div>마이페이지</div>
        <div className=" absolute left-[85%]">
          {router.pathname.includes("/mypage") ? <MypageToggle /> : null}
        </div>
      </SideBarDiv>
      {router.pathname.includes("/mypage") ? (
        <MypageDiv>
          <MypageText
            name={router.pathname.includes("mypageInfo")}
            onClick={() => {
              router.push("/mypage/mypageInfo");
            }}
          >
            내 정보 수정
          </MypageText>
          <MypageText
            name={router.pathname.includes("story")}
            onClick={() => {
              router.push("/mypage/story");
            }}
          >
            작성글 확인
          </MypageText>
          <MypageText
            name={router.pathname === "/mypage/friends"}
            onClick={() => {
              router.push("/mypage/friends");
            }}
          >
            친구 관리
          </MypageText>
          <MypageText
            name={router.pathname.includes("contact")}
            onClick={() => {
              router.push("/mypage/contact");
            }}
          >
            문의하기
          </MypageText>
        </MypageDiv>
      ) : null}
      <SideBarDiv
        routerInfo={router.pathname === "/about"}
        onClick={() => {
          router.push("/about");
        }}
      >
        {router.pathname === "/about" ? <AboutClick /> : <AboutSvg />}
        <div>About FlouD</div>
      </SideBarDiv>
      <Image
        src={mainCloud}
        alt="사이드바 구름"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      />
    </SideBarWrapper>
  );
};

export default Aside;

export const SideBarWrapper = styled.div`
  position: sticky;
  top: 21px;
  left: 30px;
  width: 209px;
  height: 902px;
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
