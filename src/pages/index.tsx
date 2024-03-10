import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import Image from "next/image";
import logoFloud from "@/img/login/큰 플라우디 로고.png";
import googleBtn from "@/img/login/구글로 시작하기.png";
import kakaoBtn from "@/img/login/카카오톡으로 시작하기.png";
import loginInfo from "@/img/login/로그인 관련 사항.png";
import { css, styled } from "twin.macro";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const welcome: String = "Welcome!\nFirst FlouD..";
  useEffect(() => {
    const access = localStorage.getItem("access_token") as string;
    if (access !== null && access !== "") {
      router.replace("/main");
      console.log(access);
    }
  }, []);
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center ${inter.className}`}
    >
      <div className="flex items-center gap-[91px]">
        <div className=" h-full justify-between">
          <pre className="text-[43px] font-black leading-[52.5px] whitespace-pre-line pl-[93px]">
            {welcome}
          </pre>
          <div className="text-[25px] font-semibold leading-[52.5px] mb-[70px] pl-[93px]">
            당신의 성장의 자취를 기록하는 회고 웹 서비스
          </div>
          <Image src={logoFloud} alt="로그인 플라우디 로고" priority />
        </div>
        <div className="bg-white w-[558px] px-[67px] h-[782px] rounded-xl flex flex-col justify-center items-start">
          <p className="mb-3 text-[28px] leading-[136%] font-semibold">
            오늘도 회고 함께 공유할까요?
          </p>
          <p className=" mb-12 text-base">
            플라우디에서 취업 준비하는 친구들과 회고를 공유하세요
          </p>
          <div>
            <Image
              src={kakaoBtn}
              alt="카카오로 로그인하기"
              style={{
                marginBottom: "41px",
                cursor: "pointer",
              }}
              priority
            />
            <Image
              src={googleBtn}
              alt="구글로 로그인하기"
              style={{
                marginBottom: "58px",
                cursor: "pointer",
              }}
              priority
            />
            <Image src={loginInfo} alt="로그인 관련 사항" />
          </div>
        </div>
      </div>
    </main>
  );
}

export const ScreenBox = styled.div(() => [
  css`
    width: 1200px;
    height: 850px;
    background-color: transparent;
    position: relative;
    border: 1px solid black;
    margin: auto;
  `,
]);
